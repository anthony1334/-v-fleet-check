"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleRouter = void 0;
const vehicle_controller_1 = require("./../controllers/vehicle-controller");
const express_1 = require("express");
class VehicleRouter {
    constructor() {
        this.controller = new vehicle_controller_1.VehicleController();
        this.router = express_1.Router();
        this.setRoutes();
    }
    setRoutes() {
        this.router
            .get(`/vehicle`, this.controller.findAll)
            .get(`/:matriculation`, this.controller.findByImmat);
    }
}
exports.VehicleRouter = VehicleRouter;
const routes = new VehicleRouter();
exports.default = routes.router;
//# sourceMappingURL=vehicle-router.js.map