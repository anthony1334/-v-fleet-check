import { Request, Response } from 'express';
import { CompanyRepository } from './../repositories/company-repository';
import { connection } from './../database/connection';
import { UserRepository } from './../repositories/user-repository';
import { User } from './../entities/user';

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
        const user: any = { 
            username: request.params.username,
            password: request.params.password
        }

        const account: User = await repository.authenticate(user)

        if (account) {
            response.status(200).send(account)
        } else {
            response.status(403).send({message: `L'accès n'est pas autorisé`})
        }
    }
    
    async signin(request: Request, response: Response) {
        repository.findUser(request.body)
        .then(users => {
            if (users.length>0) {
                response.status(200).send(users[0])
            } else {
                response.status(403).send({message:"aucun utilisateur"})
            }
        })
    }

    async putInCompany(request: Request, response: Response) {
        repository.findPutInCompany(request.body)
        .then(users => {
            if (users.length>0) {
                response.status(200).send(users[0])
            } else {
                response.status(404).send({message:"aucun"})
            }
        })
    }
}
