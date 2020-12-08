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
exports.UserController = void 0;
const user_repository_1 = require("./../repositories/user-repository");
class UserController {
    constructor() {
        this.repository = new user_repository_1.UserRepository();
    }
    login(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository.all().then((result) => {
                if (!result) {
                    response.status(404).send({
                        message: 'No user available at this time'
                    });
                }
                else {
                    response.status(200).send("coucou");
                }
            });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user-controller.js.map