import { connection } from './../database/connection';
import { VehicleFleet } from './../entities/vehicle-fleet';
import { EntityRepository, getManager, Repository } from "typeorm";

@EntityRepository(VehicleFleet)
export class VehicleFleetRepository extends Repository<VehicleFleet> {
    public all(): Promise<VehicleFleet[]> {
        return this.find()
    }
}