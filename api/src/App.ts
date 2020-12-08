import VehicleRouter from './routes/vehicle-router';
import UserRouter from './routes/user-router';
import CompanyRouter from './routes/company-router';
import VehicleFleetRouter from './routes/vehicle-fleet-router';
import DefaultRouter  from './routes/default-router';
import { corsOptions, apiVersion } from './environment/environment';
import * as bodyParser from 'body-parser';
import * as cors from 'cors'
import * as express from 'express'
import * as logger from 'morgan'

/**
 * App core
 *  Create an express app
 *  Configure rules at startup
 *  Gather routers
 */
class App {
    public app: express.Application

    public constructor() {
        this.app = express()
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended:true}))
        this.middleWare()
        this.configureRouter()
    }

    private middleWare(): void {
        this.app.use(logger('dev'))

    }

    private configureRouter(): void {
        DefaultRouter.use(cors(corsOptions))
        this.app.use('/', DefaultRouter)

        VehicleRouter.use(cors(corsOptions))
        this.app.use(`${apiVersion}/vehicle`, VehicleRouter)

        UserRouter.use(cors(corsOptions))
        this.app.use(`${apiVersion}/user`, UserRouter)

        UserRouter.use(cors(corsOptions))
        this.app.use(`${apiVersion}/company`, CompanyRouter)

        UserRouter.use(cors(corsOptions))
        this.app.use(`${apiVersion}/vehicle-fleet`, VehicleFleetRouter)

    }
}

export default new App().app