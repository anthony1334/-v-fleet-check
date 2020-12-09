"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_router_1 = require("./routes/vehicle-router");
const user_router_1 = require("./routes/user-router");
const company_router_1 = require("./routes/company-router");
const vehicle_fleet_router_1 = require("./routes/vehicle-fleet-router");
const default_router_1 = require("./routes/default-router");
const environment_1 = require("./environment/environment");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");
/**
 * App core
 *  Create an express app
 *  Configure rules at startup
 *  Gather routers
 */
class App {
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.middleWare();
        this.configureRouter();
    }
    middleWare() {
        this.app.use(logger('dev'));
    }
    configureRouter() {
        default_router_1.default.use(cors(environment_1.corsOptions));
        this.app.use('/', default_router_1.default);
        vehicle_router_1.default.use(cors(environment_1.corsOptions));
        this.app.use(`${environment_1.apiVersion}/vehicle`, vehicle_router_1.default);
        user_router_1.default.use(cors(environment_1.corsOptions));
        this.app.use(`${environment_1.apiVersion}/user`, user_router_1.default);
        user_router_1.default.use(cors(environment_1.corsOptions));
        this.app.use(`${environment_1.apiVersion}/company`, company_router_1.default);
        user_router_1.default.use(cors(environment_1.corsOptions));
        this.app.use(`${environment_1.apiVersion}/vehicle-fleet`, vehicle_fleet_router_1.default);
    }
}
exports.default = new App().app;
//# sourceMappingURL=App.js.map