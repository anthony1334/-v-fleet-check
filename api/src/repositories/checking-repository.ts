import { connection } from './../database/connection';
import { Checking } from './../entities/checking';
import { EntityRepository, getManager, Repository } from "typeorm";

@EntityRepository(Checking)
export class CheckingRepository extends Repository<Checking> {
    public all(): Promise<Checking[]> {
        return this.find()
    }

}