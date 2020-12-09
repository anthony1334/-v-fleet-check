"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const user_controller_1 = require("./../controllers/user-controller");
const express_1 = require("express");
class UserRouter {
    constructor() {
        this.controller = new user_controller_1.UserController();
        this.router = express_1.Router();
        this.setRoutes();
    }
    setRoutes() {
        this.router
            .get(`/`, this.controller.login)
            .post('/', this.controller.signin);
    }
}
exports.UserRouter = UserRouter;
const routes = new UserRouter();
exports.default = routes.router;
//# sourceMappingURL=user-router.js.map