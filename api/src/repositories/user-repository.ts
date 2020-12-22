import { User } from './../entities/user';
import { Entity, EntityRepository, getManager, Repository } from "typeorm";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    public all(): Promise<User[]> {
        return getManager().getRepository(User).find()
    }
    public findUser(user:any): Promise<User[]> {
        console.log(JSON.stringify(user))
        return getManager().getRepository(User).find({where:{userLog:user.username, passwordLog:user.password}})
    }
    public findPutInCompany(user:any): Promise<User[]> {
        console.log(JSON.stringify(user))
        return getManager().getRepository(User).find({where:{name:user.company}})
        // return getManager().getRepository(Vehicle).find({where:{immatriculation: vehicle.matriculation}})
    }
}