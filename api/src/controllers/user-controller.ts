import { Request, Response } from 'express';
import { CompanyRepository } from './../repositories/company-repository';
import { connection } from './../database/connection';
import { UserRepository } from './../repositories/user-repository';

let repository: UserRepository
let companyRepository: CompanyRepository

connection.then(async db => {
    repository= await db.getCustomRepository(UserRepository)
    companyRepository= await db.getCustomRepository(CompanyRepository)
})  

export class UserController {

    public constructor() {
    }

    async login(request: Request, response: Response) {
        response.status(403).send("Coucou")
    }
    
    async signin(request: Request, response: Response) {
        console.log(JSON.stringify(request.body))
        repository.findUser(request.body)
        .then(users => {
            if (users.length>0) {
                response.status(200).send(users[0])
            } else {
                response.status(403).send({message:"aucun utilisateur"})
            }
        })
    }
}
