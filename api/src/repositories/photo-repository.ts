import { connection } from './../database/connection';
import { Photo } from './../entities/photo';
import { EntityRepository, getManager, Repository } from "typeorm";

@EntityRepository(Photo)
export class PhotoRepository extends Repository<Photo> {
    public all(): Promise<Photo[]> {
        return getManager().getRepository(Photo).find()
    }
    public addPhoto(photo:any,idItem:any): Promise<Photo[]> {
        console.log(JSON.stringify(photo))
        return getManager().getRepository(Photo).find({where:{photo:photo}})
       
    }
}