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
const vehicle_repository_1 = require("./../repositories/vehicle-repository");
class VehicleController {
    constructor() {
        this.repository = new vehicle_repository_1.VehicleRepository();
    }
    findAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            // Call the findAll method of the repository
            this.repository.all().then((result) => {
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
    findByImmat(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository.byImmat(request.params.matriculation).then((result) => {
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
}
exports.VehicleController = VehicleController;
//# sourceMappingURL=vehicle-controller.js.map