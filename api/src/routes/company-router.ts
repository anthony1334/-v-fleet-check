import { CompanyController } from './../controllers/company-controller';
import { apiVersion } from './../environment/environment';
import { NextFunction, Request, Response, Router } from 'express'


export class CompanyRouter {
    public router: Router
    private controller: CompanyController

    public constructor() {
        this.controller = new CompanyController()

        this.router = Router()
        this.setRoutes()
    }

    private setRoutes() {
        this.router
            .post(
                `/company`,
                this.controller.login
            )
    }

}

const routes: CompanyRouter = new CompanyRouter()
export default routes.router