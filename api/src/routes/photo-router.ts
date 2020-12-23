import { PhotoController } from '../controllers/photo-controller';
import { apiVersion } from '../environment/environment';
import { NextFunction, Request, Response, Router } from 'express'
import * as multer from 'multer'

const upLoad = multer({dest:"upload/"})

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
                upLoad.single("photo"),
                this.controller.putInPhoto

            )
    }
}

const routes: PhotoRouter = new PhotoRouter()
export default routes.router