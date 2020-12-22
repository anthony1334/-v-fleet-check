import { PhotoController } from '../controllers/photo-controller';
import { apiVersion } from '../environment/environment';
import { NextFunction, Request, Response, Router } from 'express'

export class PhotoRouter {
    public router: Router
    private controller: PhotoController

    public constructor() {
        this.controller = new PhotoController()

        this.router = Router()
        this.setRoutes()
    }

    private setRoutes() {
        this.router
           
            .post(
                `/`,
                this.controller.putInPhoto

            )
    }
}

const routes: PhotoRouter = new PhotoRouter()
export default routes.router