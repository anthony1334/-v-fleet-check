import { CheckItemValueController } from './../controllers/check-item-value-controller';
import { apiVersion } from './../environment/environment';
import { NextFunction, Request, Response, Router } from 'express'

export class CheckItemValueRouter {
    public router: Router
    private controller: CheckItemValueController

    public constructor() {
        this.controller = new CheckItemValueController()

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

const routes: CheckItemValueRouter = new CheckItemValueRouter()
export default routes.router