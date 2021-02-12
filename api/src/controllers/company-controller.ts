import { Request, Response } from 'express';
import { CompanyRepository } from './../repositories/company-repository';

export class CompanyController {

    private repository: CompanyRepository

    public constructor() {
        this.repository = new CompanyRepository()
    }

    async login(request: Request, response: Response) {
        this.repository.all().then((result: any) => {
            if (!result) {
                response.status(404).send({
                    message: 'No picture available at this time'
                })
            } else {
                response.status(200).send("la photo est envoyée")
            }
        })
    }
}