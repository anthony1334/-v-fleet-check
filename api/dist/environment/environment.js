"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiVersion = exports.corsOptions = exports.dbOptions = void 0;
// import {Checklist} from './../../../vFleet/src/screens/CheckList/CheckList'
/**
 * environment
 *  Gather all environement vars needed to build and run application
 *  @version 1.0.0
 *  @author Jean-Luc Aubert <jean-luc.a@ideafactory.fr>
 */
exports.dbOptions = {
    type: 'mariadb',
    host: '127.0.0.1',
    port: 3307,
    username: 'v-fleet-db-admin',
    password: '!5o3aSy2F!nd*',
    database: 'v-fleet-repo',
    entities: [
        __dirname + '/../entities/*{.ts,.js}'
    ],
    synchronize: false
};
// Définition des options CORS
exports.corsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: '*',
    preflightContinue: false
};
exports.apiVersion = '/api/v1';
//# sourceMappingURL=environment.js.map