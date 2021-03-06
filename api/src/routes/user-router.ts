import { UserController } from './../controllers/user-controller';
import { apiVersion } from './../environment/environment';
import { NextFunction, Request, Response, Router } from 'express'


export class UserRouter {
    public router: Router
    private controller: UserController

    public constructor() {
        this.controller = new UserController()

        this.router = Router()
        this.setRoutes()
    }

    private setRoutes() {
        this.router
            .get(
                `/:username/:password`,
                this.controller.login
            )
            .post(
                '/',
                this.controller.signin
            )
            .post(
                `/company`,
                this.controller.putInCompany
            )
    }

}

const routes: UserRouter = new UserRouter()
export default routes.router