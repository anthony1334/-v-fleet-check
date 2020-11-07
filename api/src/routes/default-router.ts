import { NextFunction, Request, Response, Router } from 'express'

export class DefaultRouter {
    public router: Router

    public constructor() {
        this.router = Router()
        this.setRoutes()
    }

    private setRoutes(): void {
        this.router.get(
            '/',
            this.get
        )
    }

    private get(request: Request, response: Response, next: NextFunction): void {
        response.status(200).send({
            message: 'Default router GET is okay'
        })
    }

}

const routes: DefaultRouter = new DefaultRouter()
export default routes.router