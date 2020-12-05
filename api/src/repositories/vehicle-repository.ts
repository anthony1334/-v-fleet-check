import { connection } from './../database/connection';
import { Vehicle } from './../entities/vehicle';
import { EntityRepository, getManager, Repository } from "typeorm";

@EntityRepository(Vehicle)
export class VehicleRepository extends Repository<Vehicle> {
    public all(): Promise<Vehicle[]> {
        return this.find()
        // SELECT * FROM vehicle
    }

    public byImmat(matriculation: string): Promise<Vehicle[]> {
        return this.find(
            {
                where: {matriculation}
            }
        )
    }


}