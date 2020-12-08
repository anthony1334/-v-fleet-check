import { connection } from './../database/connection';
import { Vehicle } from './../entities/vehicle';
import { EntityRepository, getManager, Repository } from "typeorm";

@EntityRepository(Vehicle)
export class VehicleRepository extends Repository<Vehicle> {
    public all(): Promise<Vehicle[]> {
        return this.find()
    }

    public byImmat(matriculation: string): Promise<Vehicle[]> {
        return this.find(
            {
                where: {matriculation}
            }
        )
    }

    public findControlByImmat(immat:any): Promise<Vehicle[]> {
        console.log(JSON.stringify(immat))
        return getManager().getRepository(Vehicle).find({where:{matriculation:immat.immatriculation}})
        // return getManager().getRepository(Vehicle).find({where:{immatriculation: vehicle.matriculation}})
    }
}