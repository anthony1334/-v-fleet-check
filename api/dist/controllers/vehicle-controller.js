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
exports.VehicleController = void 0;
const connection_1 = require("./../database/connection");
const vehicle_repository_1 = require("./../repositories/vehicle-repository");
let repository;
connection_1.connection.then((db) => __awaiter(void 0, void 0, void 0, function* () {
    repository = yield db.getCustomRepository(vehicle_repository_1.VehicleRepository);
}));
class VehicleController {
    constructor() { }
    /**
     * Return all of the Vehicles from the database
     * @param request
     * @param response
     */
    findAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            // Call the findAll method of the repository
            repository.all().then((result) => {
                if (!result) {
                    response.status(404).send({
                        message: 'No vehicle available at this time'
                    });
                }
                else {
                    response.status(200).send(result);
                }
            });
        });
    }
    /**
     * Return as an array vehicles with this matriculation
     * @param request
     * @param response
     */
    findByImmat(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            repository.byImmat(request.params.matriculation).then((result) => {
                if (!result) {
                    response.status(404).send({
                        message: `No vehicle with ${request.params.matriculation} were found`
                    });
                }
                else {
                    response.status(200).send(result);
                }
            });
        });
    }
    controlByImmat(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(JSON.stringify(request.body));
            repository.findControlByImmat(request.body)
                .then(immats => {
                if (immats.length > 0) {
                    response.status(200).send(immats[0]);
                }
                else {
                    response.status(403).send({ message: "aucun véhicule avec cette immat" });
                }
            });
        });
    }
}
exports.VehicleController = VehicleController;
//# sourceMappingURL=vehicle-controller.js.map