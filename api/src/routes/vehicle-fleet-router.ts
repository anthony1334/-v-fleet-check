import { VehicleFleetController } from './../controllers/vehicle-fleet-controller';
import { apiVersion } from './../environment/environment';
import { NextFunction, Request, Response, Router } from 'express'


export class VehicleFleetRouter {
    public router: Router
    private controller: VehicleFleetController

    public constructor() {
        this.controller = new VehicleFleetController()

        this.router = Router()
        this.setRoutes()
    }

    private setRoutes() {
        this.router
            .post(
                `/vehicle-fleet`,
                this.controller.login
        )
    }
}

const routes: VehicleFleetRouter = new VehicleFleetRouter()
export default routes.router