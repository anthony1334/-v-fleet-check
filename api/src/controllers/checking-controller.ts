import { connection } from './../database/connection';
import { Checking } from './../entities/checking';
import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { CheckingRepository } from './../repositories/checking-repository';

let repository: CheckingRepository
connection.then(async db => {
    repository = await db.getCustomRepository(CheckingRepository)
})

export class CheckingController {

    public constructor() {}

    /**
     * Return all of the Vehicles from the database
     * @param request 
     * @param response 
     */
    async findAll(request: Request, response: Response): Promise<void> {
        // Call the findAll method of the repository
        repository.all().then((result: Checking[]) => {
            if (!result) {
                response.status(404).send({
                    message: 'No checking available at this time'
                })
            } else {
                response.status(200).send(result)
            }
        })
    }
  
}