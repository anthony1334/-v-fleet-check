import { Request, Response } from 'express';
import { Photo } from './../entities/photo';
import { connection } from './../database/connection';
import { ItemRepository } from './../repositories/item-repository';
import { PhotoRepository } from './../repositories/photo-repository';
import { Item } from './../entities/item';

let repository: PhotoRepository
let itemRepository: ItemRepository

connection.then(async db => {
    repository= await db.getCustomRepository(PhotoRepository)
    itemRepository= await db.getCustomRepository(ItemRepository)
  
})  

export class PhotoController {

    private repository: PhotoRepository

    public constructor() {
        this.repository = new PhotoRepository()
    }

    async putInPhoto(request: Request, response: Response) {
        const checkItem: Item = await itemRepository.byId(request.body.idItem)

        const photo: Photo = new Photo()
        photo.photo = request.file.filename
        photo.item = checkItem

        
         repository.save(photo)
        .then(photo => {
            if (photo) {
                response.status(200).send({message:"l image  a  pu etre enregistrée"})
            } else {
                response.status(424).send({message:"l image n a pas pu etre enregistrée"})
            }
        }) 
    }
}