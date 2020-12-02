import { Request, Response } from 'express';
import { UserRepository } from './../repositories/user-repository';

export class UserController {

    private repository: UserRepository

    public constructor() {
        this.repository = new UserRepository()
    }

    async login(request: Request, response: Response) {
        this.repository.all().then((result: any) => {
            if (!result) {
                response.status(404).send({
                    message: 'No user available at this time'
                })
            } else {
                response.status(200).send("petit message pour user controller")
            }
        })
    }
}
