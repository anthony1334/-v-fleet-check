"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleRepository = void 0;
const vehicle_1 = require("./../entities/vehicle");
const typeorm_1 = require("typeorm");
class VehicleRepository {
    all() {
        return typeorm_1.getManager().getRepository(vehicle_1.Vehicle).find();
    }
    byImmat(matriculation) {
        return typeorm_1.getManager().getRepository(vehicle_1.Vehicle).find({
            where: { matriculation }
        });
    }
}
exports.VehicleRepository = VehicleRepository;
//# sourceMappingURL=vehicle-repository.js.map