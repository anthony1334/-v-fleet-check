import { ConnectionOptions } from "typeorm";
import * as cors from 'cors'

/**
 * environment
 *  Gather all environement vars needed to build and run application
 *  @version 1.0.0
 *  @author Jean-Luc Aubert <jean-luc.a@ideafactory.fr>
 */

export const dbOptions: ConnectionOptions = {
    type: 'mariadb',
    host: '127.0.0.1',
    port: 3307,
    username: 'v-fleet-db-admin',
    password: '!5o3aSy2F!nd*',
    database: 'v-fleet-repo',
    entities: [
        './entities/*.js'
    ],
    synchronize: true
}

// Définition des options CORS
export const corsOptions: cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: '*',
    preflightContinue: false
}

export const apiVersion = 'api/v1/'

