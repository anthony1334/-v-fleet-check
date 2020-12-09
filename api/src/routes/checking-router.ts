import { CheckingController } from './../controllers/checking-controller';
import { apiVersion } from './../environment/environment';
import { NextFunction, Request, Response, Router } from 'express'

export class CheckingRouter {
    public router: Router
    private controller: CheckingController

    public constructor() {
        this.controller = new CheckingController()

        this.router = Router()
        this.setRoutes()
    }

    private setRoutes() {
        this.router
            .get(
                `/`,
                this.controller.findAll
            )

    }

}

const routes: CheckingRouter = new CheckingRouter()
export default routes.router