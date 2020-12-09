import { connection } from './../database/connection';
import { CheckItemValue } from './../entities/check-item-value';
import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { CheckItemValueRepository } from './../repositories/check-item-value-repository';

let repository: CheckItemValueRepository
connection.then(async db => {
    repository = await db.getCustomRepository(CheckItemValueRepository)
})

export class CheckItemValueController {

    public constructor() {}

    /**
     * Return all of the Vehicles from the database
     * @param request 
     * @param response 
     */
    async findAll(request: Request, response: Response): Promise<void> {
        // Call the findAll method of the repository
        repository.all().then((result: CheckItemValue[]) => {
            if (!result) {
                response.status(404).send({
                    message: 'No checkItemValue available at this time'
                })
            } else {
                response.status(200).send(result)
            }
        })
    }
  
}