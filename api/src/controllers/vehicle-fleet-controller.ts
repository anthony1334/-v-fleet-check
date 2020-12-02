import { Request, Response } from 'express';
import { VehicleFleetRepository } from './../repositories/vehicle-fleet-repository';

export class VehicleFleetController {

    private repository: VehicleFleetRepository

    public constructor() {
        this.repository = new VehicleFleetRepository()
    }

    async login(request: Request, response: Response) {
        this.repository.all().then((result: any) => {
            if (!result) {
                response.status(404).send({
                    message: 'No vehicle fleet available at this time'
                })
            } else {
                response.status(200).send("petit message pour vehicle controller")
            }
        })
    }
}