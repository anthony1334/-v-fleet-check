import { VehicleController } from './../controllers/vehicle-controller';
import { apiVersion } from './../environment/environment';
import { NextFunction, Request, Response, Router } from 'express'


export class VehicleRouter {
    public router: Router
    private controller: VehicleController

    public constructor() {
        this.controller = new VehicleController()

        this.router = Router()
        this.setRoutes()
    }

    private setRoutes() {
        this.router
            .get(
                `/`,
                this.controller.findAll
            )
            .get(
                `/:matriculation`,
                this.controller.findByImmat
            )
            .post(
                '/',
                this.controller.controlByImmat
            )

    }
}

const routes: VehicleRouter = new VehicleRouter()
export default routes.router