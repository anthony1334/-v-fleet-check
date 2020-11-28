import { connection } from './../database/connection';
import { Vehicle } from './../entities/vehicle';
import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { VehicleRepository } from './../repositories/vehicle-repository';

let repository: VehicleRepository
connection.then(async db => {
    repository = await db.getCustomRepository(VehicleRepository)
})

export class VehicleController {

    public constructor() {}

    /**
     * Return all of the Vehicles from the database
     * @param request 
     * @param response 
     */
    async findAll(request: Request, response: Response): Promise<void> {
        // Call the findAll method of the repository
        repository.all().then((result: Vehicle[]) => {
            if (!result) {
                response.status(404).send({
                    message: 'No vehicle available at this time'
                })
            } else {
                response.status(200).send(result)
            }
        })
    }

    /**
     * Return as an array vehicles with this matriculation
     * @param request 
     * @param response 
     */
    async findByImmat(request: Request, response: Response): Promise<void> {
        repository.byImmat(request.params.matriculation).then((result: any) => {
            if (!result) {
                response.status(404).send({
                    message: `No vehicle with ${request.params.matriculation} were found`
                })
            } else {
                response.status(200).send(result)
            }            
        })
    }
}