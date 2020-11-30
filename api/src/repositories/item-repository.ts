import { connection } from './../database/connection';
import { Item } from './../entities/item';
import { EntityRepository, getManager, Repository } from "typeorm";

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
    public all(): Promise<Item[]> {
        return this.find()
    }

}