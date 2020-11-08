import { Vehicle } from './../entities/vehicle';
import { getManager } from "typeorm";

export class VehicleRepository {
    public all(): Promise<Vehicle[]> {
        return getManager().getRepository(Vehicle).find()
    }

    public byImmat(matriculation: string) {
        return getManager().getRepository(Vehicle).find(
            {
                where: {matriculation}
            }
        )
    }


}