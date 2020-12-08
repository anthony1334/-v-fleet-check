"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_router_1 = require("./routes/vehicle-router");
const user_router_1 = require("./routes/user-router");
const default_router_1 = require("./routes/default-router");
const environment_1 = require("./environment/environment");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");
const typeorm_1 = require("typeorm");
/**
 * App core
 *  Create an express app
 *  Configure rules at startup
 *  Gather routers
 *  Create a persistent connection to database
 */
class App {
    constructor() {
        this.app = express();
        this.middleWare();
        this.createConnexion();
        this.configureRouter();
    }
    middleWare() {
        this.app.use(logger('dev'));
    }
    createConnexion() {
        typeorm_1.createConnection(environment_1.dbOptions).then((connection) => __awaiter(this, void 0, void 0, function* () {
            console.log('Database server was connected');
        })).catch((error) => {
            console.log('TypeORM raised an error : ', error);
        });
    }
    configureRouter() {
        default_router_1.default.use(cors(environment_1.corsOptions));
        this.app.use('/', default_router_1.default);
        vehicle_router_1.default.use(cors(environment_1.corsOptions));
        this.app.use(`${environment_1.apiVersion}/vehicle`, vehicle_router_1.default);
        user_router_1.default.use(cors(environment_1.corsOptions));
        this.app.use(`${environment_1.apiVersion}/user`, user_router_1.default);
    }
}
exports.default = new App().app;
//# sourceMappingURL=App.js.map