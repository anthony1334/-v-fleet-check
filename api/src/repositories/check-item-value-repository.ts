import { connection } from './../database/connection';
import { CheckItemValue } from './../entities/check-item-value';
import { EntityRepository, getManager, Repository } from "typeorm";

@EntityRepository(CheckItemValue)
export class CheckItemValueRepository extends Repository<CheckItemValue> {
    public all(): Promise<CheckItemValue[]> {
        return this.find()
    }

}