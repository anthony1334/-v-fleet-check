"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiVersion = exports.corsOptions = exports.dbOptions = void 0;
/**
 * environment
 *  Gather all environement vars needed to build and run application
 *  @version 1.0.0
 *  @author Jean-Luc Aubert <jean-luc.a@ideafactory.fr>
 */
exports.dbOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'v-fleet-db-admin',
    password: '!5o3aSy2F!nd*',
    database: 'v-fleet-repo',
    entities: [
        './entities/*.js'
    ],
    synchronize: true
};
// Définition des options CORS
exports.corsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: '*',
    preflightContinue: false
};
exports.apiVersion = 'api/v1/';
//# sourceMappingURL=environment.js.map