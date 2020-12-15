import VehicleRouter from './routes/vehicle-router';
import ItemRouter from './routes/item-router';
import FormControlRouter from './routes/form-control-router';
import CheckItemValueRouter from './routes/check-item-value-router';
import CheckingRouter from './routes/checking-router';
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
        this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    private configureRouter(): void {
        DefaultRouter.use(cors(corsOptions))
        this.app.use('/', DefaultRouter)

        VehicleRouter.use(cors(corsOptions))
        this.app.use(`${apiVersion}/vehicle`, VehicleRouter)

        ItemRouter.use(cors(corsOptions))
        this.app.use(`${apiVersion}/items`, ItemRouter)
     

        FormControlRouter.use(cors(corsOptions))
        this.app.use(`${apiVersion}/form-control`, FormControlRouter)

        CheckItemValueRouter.use(cors(corsOptions))
        this.app.use(`${apiVersion}/check-item-value`, CheckItemValueRouter)

        CheckingRouter.use(cors(corsOptions))
        this.app.use(`${apiVersion}/checking`, CheckingRouter)

    

    }
}

export default new App().app