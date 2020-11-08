import VehicleRouter from './routes/vehicle-router';
import DefaultRouter  from './routes/default-router';
import { dbOptions, corsOptions, apiVersion } from './environment/environment';
import * as cors from 'cors'
import * as express from 'express'
import * as logger from 'morgan'
import { createConnection } from 'typeorm';

/**
 * App core
 *  Create an express app
 *  Configure rules at startup
 *  Gather routers
 *  Create a persistent connection to database
 */
class App {
    public app: express.Application

    public constructor() {
        this.app = express()
        this.middleWare()
        this.createConnexion()
        this.configureRouter()
    }

    private middleWare(): void {
        this.app.use(logger('dev'))
    }

    private createConnexion(): void {
        createConnection(dbOptions).then(
            async connection => {
                console.log('Database server was connected')
            }
        ).catch((error) => {
            console.log('TypeORM raised an error : ', error)
        })
    }

    private configureRouter(): void {
        DefaultRouter.use(cors(corsOptions))
        this.app.use('/', DefaultRouter)

        VehicleRouter.arguments(cors(corsOptions))
        this.app.use(`${apiVersion}/vehicle`, VehicleRouter)

    }
}

export default new App().app