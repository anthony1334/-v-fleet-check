import { Request, Response } from 'express';
import { PhotoRepository } from './../repositories/photo-repository';

export class PhotoController {

    private repository: PhotoRepository

    public constructor() {
        this.repository = new PhotoRepository()
    }

    async putInPhoto(request: Request, response: Response) {
       console.log(request.headers)
       response.status(200).send({'message':'photo bien reçu'})
    }
}