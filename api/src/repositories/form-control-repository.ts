import { connection } from './../database/connection';
import { FormControl } from './../entities/form-control';
import { EntityRepository, getManager, Repository } from "typeorm";

@EntityRepository(FormControl)
export class FormControlRepository extends Repository<FormControl> {
    public all(): Promise<FormControl[]> {
        return this.find()
    }

}