import { connection } from './../database/connection';
import { Item } from './../entities/item';
import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { ItemRepository } from './../repositories/item-repository';
import { CheckItemValue } from './../entities/check-item-value';
import { Checking } from './../entities/checking';
import { CheckingRepository } from './../repositories/checking-repository';
import { CheckItemValueRepository } from './../repositories/check-item-value-repository';
import { Vehicle } from './../entities/vehicle';


let repository: ItemRepository
let checkingRepository: CheckingRepository
let itemValueRepository: CheckItemValueRepository
connection.then(async db => {
    repository = await db.getCustomRepository(ItemRepository)
    checkingRepository = await db.getCustomRepository(CheckingRepository)
    itemValueRepository = await db.getCustomRepository(CheckItemValueRepository)
})




export class ItemController {

    public constructor() { }

    /**
     * Return all of the Vehicles from the database
     * @param request 
     * @param response 
     */
    async findAll(request: Request, response: Response): Promise<void> {
        // Call the findAll method of the repository
        /* repository.all().then((result: Item[]) => { */
        const result: Item[] = await repository.all()
        if (result.length === 0) {
            response.status(404).send({
                message: 'No item available at this time'
            })
        } else {
            //DTO
            const api: any[] = result.map((item: any) => {
                return {
                    id: item.id,
                    validator: "",
                    title: item.label,
                    detail: item.hinting,
                    controle: item.uiType.uiType,
                    previous: item.itemValues.length ? item.itemValues[item.itemValues.length - 1].value : 0,
                    value: "",
                    done: false
                }
            })
            response.status(200).send(api)
        }

    }
/**
 * met a jours les checkItemValues
 * @param request 
 * @param response 
 */
    async putIn(request: Request, response: Response): Promise<void> {
        const itemsRecup = request.body.items
        const vehicleRecup: Vehicle = request.body.immat

        //crée un nouvel objet checking de type checking(entity)
        const checking: Checking = new Checking()
        let savedChecking: Checking
        checking.date = new Date()
        checking.vehicle = vehicleRecup
       /*  checking.geometry = new Geolocation() */


        /*  checkingRepository.save(checking).then((persistentChecking: Checking) => */
        // met a jours la db
        //.save = requête SQL INSERT INTO checking (date, vehicleId) VALUES()
        let persistentChecking: Checking = await checkingRepository.save(checking)
        itemsRecup.forEach(async( element: any) => {
            const checkItemValue: CheckItemValue = new CheckItemValue()
            checkItemValue.value = element.value
            checkItemValue.checking = persistentChecking

            // Cherche l'Item correspondant
            const checkItem: Item = await repository.byId(element.id)
            checkItemValue.item = checkItem
            itemValueRepository.save(checkItemValue)
            //.save = requête SQL INSERT INTO check-item-value(checkingId,value,itemId) VALUES() 
        });

        response.status(200).send(itemsRecup.length.toString())   
    }
    //






    /**
       * Return as an array vehicles with this matriculation
       * @param request 
       * @param response 
       */
    async findByLabel(request: Request, response: Response): Promise<void> {

        repository.byLabel().then((result: any) => {
            if (!result) {
                response.status(404).send({
                    message: `No item with ${request.params.label} were found`
                })
            } else {
                response.status(200).send(result)
            }
        })
    }
}