import { connection } from './../database/connection';
import { Item } from './../entities/item';
import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { ItemRepository } from './../repositories/item-repository';

let repository: ItemRepository
connection.then(async db => {
    repository = await db.getCustomRepository(ItemRepository)
})

export class ItemController {

    public constructor() {}

    /**
     * Return all of the Vehicles from the database
     * @param request 
     * @param response 
     */
    async findAll(request: Request, response: Response): Promise<void> {
        // Call the findAll method of the repository
        repository.all().then((result: Item[]) => {
            if (!result) {
                response.status(404).send({
                    message: 'No item available at this time'
                })
            } else {
                response.status(200).send(result)
            }
        })
    }
  
}