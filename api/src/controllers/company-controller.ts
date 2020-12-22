import { Request, Response } from 'express';
import { CompanyRepository } from './../repositories/company-repository';

export class CompanyController {

    private repository: CompanyRepository

    public constructor() {
        this.repository = new CompanyRepository()
    }

    // async PutInCompany(request: Request, response: Response) {
    //     console.log(JSON.stringify(request.body))
    //     repository.findPutInCompany(request.body)
    //     .then(companys => {
    //         if (companys.length>0) {
    //             response.status(200).send(companys[0])
    //         } else {
    //             response.status(404).send({message:"aucun véhicule avec cette immat"})
    //         }
    //     })
    // }
}