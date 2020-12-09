"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleRepository = void 0;
const vehicle_1 = require("./../entities/vehicle");
const typeorm_1 = require("typeorm");
let VehicleRepository = class VehicleRepository extends typeorm_1.Repository {
    all() {
        return this.find();
    }
    byImmat(matriculation) {
        return this.find({
            where: { matriculation }
        });
    }
    findControlByImmat(immat) {
        console.log(JSON.stringify(immat));
        return typeorm_1.getManager().getRepository(vehicle_1.Vehicle).find({ where: { matriculation: immat.immatriculation } });
        // return getManager().getRepository(Vehicle).find({where:{immatriculation: vehicle.matriculation}})
    }
};
VehicleRepository = __decorate([
    typeorm_1.EntityRepository(vehicle_1.Vehicle)
], VehicleRepository);
exports.VehicleRepository = VehicleRepository;
//# sourceMappingURL=vehicle-repository.js.map