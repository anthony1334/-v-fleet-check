"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultRouter = void 0;
const express_1 = require("express");
class DefaultRouter {
    constructor() {
        this.router = express_1.Router();
        this.setRoutes();
    }
    setRoutes() {
        this.router.get('/', this.get);
    }
    get(request, response, next) {
        response.status(200).send({
            message: 'Default router GET is okay'
        });
    }
}
exports.DefaultRouter = DefaultRouter;
const routes = new DefaultRouter();
exports.default = routes.router;
//# sourceMappingURL=default-router.js.map