import { connection } from './../database/connection';
import { FormControl } from './../entities/form-control';
import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { FormControlRepository } from './../repositories/form-control-repository';

let repository: FormControlRepository
connection.then(async db => {
    repository = await db.getCustomRepository(FormControlRepository)
})

export class FormControlController {

    public constructor() {}

    /**
     * Return all of the Vehicles from the database
     * @param request 
     * @param response 
     */
    async findAll(request: Request, response: Response): Promise<void> {
        // Call the findAll method of the repository
        repository.all().then((result: FormControl[]) => {
            if (!result) {
                response.status(404).send({
                    message: 'No formControl available at this time'
                })
            } else {
                response.status(200).send(result)
            }
        })
    }
  
}