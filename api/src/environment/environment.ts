import { ConnectionOptions } from "typeorm";
import * as cors from 'cors';
// import {Checklist} from './../../../vFleet/src/screens/CheckList/CheckList'

/**
 * environment
 *  Gather all environement vars needed to build and run application
 *  @version 1.0.0
 *  @author Jean-Luc Aubert <jean-luc.a@ideafactory.fr>
 */

export const dbOptions: ConnectionOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'v-fleet-db-admin',
    password: '!5o3aSy2F!nd*',
    database: 'v-fleet-repo',
    entities: [
        __dirname + '/../entities/*{.ts,.js}'
    ],
    synchronize: false
}


// Définition des options CORS
export const corsOptions: cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: '*',
    preflightContinue: false
}

export const apiVersion = '/api/v1'

