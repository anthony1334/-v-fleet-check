import { connection } from './../database/connection';
import { Company } from './../entities/company';
import { EntityRepository, getManager, Repository } from "typeorm";

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {
    public all(): Promise<Company[]> {
        return this.find()
    }

    // public findPutInCompany(company:any): Promise<Company[]> {
    //     console.log(JSON.stringify(company))
    //     return getManager().getRepository(Company).find({where:{name:user.company}})
    //     // return getManager().getRepository(Vehicle).find({where:{immatriculation: vehicle.matriculation}})
    // }
}