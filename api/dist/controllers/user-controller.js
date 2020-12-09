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
const company_repository_1 = require("./../repositories/company-repository");
const connection_1 = require("./../database/connection");
const user_repository_1 = require("./../repositories/user-repository");
let repository;
let companyRepository;
connection_1.connection.then((db) => __awaiter(void 0, void 0, void 0, function* () {
    repository = yield db.getCustomRepository(user_repository_1.UserRepository);
    companyRepository = yield db.getCustomRepository(company_repository_1.CompanyRepository);
}));
class UserController {
    constructor() {
    }
    login(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.status(403).send("Coucou");
        });
    }
    signin(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(JSON.stringify(request.body));
            repository.findUser(request.body)
                .then(users => {
                if (users.length > 0) {
                    response.status(200).send(users[0]);
                }
                else {
                    response.status(403).send({ message: "aucun utilisateur" });
                }
            });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user-controller.js.map