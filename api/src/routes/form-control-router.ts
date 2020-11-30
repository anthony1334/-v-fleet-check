import { FormControlController } from './../controllers/form-control-controller';
import { apiVersion } from './../environment/environment';
import { NextFunction, Request, Response, Router } from 'express'

export class FormControlRouter {
    public router: Router
    private controller: FormControlController

    public constructor() {
        this.controller = new FormControlController()

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

const routes: FormControlRouter = new FormControlRouter()
export default routes.router