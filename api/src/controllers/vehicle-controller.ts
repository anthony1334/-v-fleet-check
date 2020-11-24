import { Request, Response } from 'express';
import { VehicleRepository } from './../repositories/vehicle-repository';

export class VehicleController {
    private repository: VehicleRepository

    public constructor() {
        this.repository = new VehicleRepository()
    }
    async findAll(request: Request, response: Response) {
        this.repository = new VehicleRepository()
        // Call the findAll method of the repository
        this.repository.all().then((result: any) => {
            if (!result) {
                response.status(404).send({
                    message: 'No vehicle available at this time'
                })
            } else {
                response.status(200).send(result)
            }
        })
    }

    async findByImmat(request: Request, response: Response) {
        this.repository.byImmat(request.params.matriculation).then((result: any) => {
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