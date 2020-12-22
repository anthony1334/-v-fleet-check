import { connection } from './../database/connection';
import { Photo } from './../entities/photo';
import { EntityRepository, getManager, Repository } from "typeorm";

@EntityRepository(Photo)
export class PhotoRepository extends Repository<Photo> {
    public all(): Promise<Photo[]> {
        return this.find()
    }
}