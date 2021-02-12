import { ItemController } from './../controllers/item-controller';
import { apiVersion } from './../environment/environment';
import { NextFunction, Request, Response, Router } from 'express'

export class ItemRouter {
    public router: Router
    private controller: ItemController

    public constructor() {
        this.controller = new ItemController()

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
                `/label`,
                this.controller.findByLabel
            )
            .post(
                `/`,
                this.controller.putIn

            )
    }
}

const routes: ItemRouter = new ItemRouter()
export default routes.router