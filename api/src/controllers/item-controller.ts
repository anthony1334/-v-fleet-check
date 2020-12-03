import { connection } from './../database/connection';
import { Item } from './../entities/item';
import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { ItemRepository } from './../repositories/item-repository';
import { loadavg } from 'os';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

let repository: ItemRepository
connection.then(async db => {
    repository = await db.getCustomRepository(ItemRepository)
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
        repository.all().then((result: Item[]) => {
            if (result.length === 0) {
                response.status(404).send({
                    message: 'No item available at this time'
                })
            } else {
                const api: any[]=  result.map((item:any)=>{
                    return {
                        label:item.label,
                        hinting:item.hinting,
                        uiType:item.uiType.uiType,
                        previousValue:item.itemValues.length ?item.itemValues[0] : 0
                    }
                })
               
                response.status(200).send(api)
            }
        })
    }



/**
   * Return as an array vehicles with this matriculation
   * @param request 
   * @param response 
   */
async findByLabel(request: Request, response: Response): Promise < void> {
   
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