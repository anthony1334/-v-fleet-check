import { connection } from './../database/connection';
import { Item } from './../entities/item';
import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { ItemRepository } from './../repositories/item-repository';
import { CheckItemValue } from './../entities/check-item-value';
import { Checking } from './../entities/checking';
import { CheckingRepository } from './../repositories/checking-repository';
import { CheckItemValueRepository } from './../repositories/check-item-value-repository';


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
        let result: Item[] = await repository.all()
        if (result.length === 0) {
            response.status(404).send({
                message: 'No item available at this time'
            })
        } else {
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

    async putIn(request: Request, response: Response): Promise<void> {
        const itemsRecup = request.body.items

        const entities: CheckItemValue[] = []


        const checking: Checking = new Checking()
        let savedChecking: Checking
        checking.date = new Date()
       /*  checking.geometry = new Geolocation() */


        /*  checkingRepository.save(checking).then((persistentChecking: Checking) => */
        let persistentChecking: Checking = await checkingRepository.save(checking)
        savedChecking = persistentChecking
        itemsRecup.forEach(async( element: any) => {
            const checkItemValue: CheckItemValue = new CheckItemValue()
            checkItemValue.value = element.value
            checkItemValue.checking = savedChecking

            // Cherche l'Item correspondant


            const checkItem: Item = await repository.byId(element.id)
            checkItemValue.item = checkItem
            itemValueRepository.save(checkItemValue)
            
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