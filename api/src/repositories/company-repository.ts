import { connection } from './../database/connection';
import { Company } from './../entities/company';
import { EntityRepository, getManager, Repository } from "typeorm";

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {
    public all(): Promise<Company[]> {
        return this.find()
    }
}