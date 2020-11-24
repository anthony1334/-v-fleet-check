import { User } from './../entities/user';
import { getManager } from "typeorm";

export class UserRepository {
    public all(): Promise<User[]> {
        return getManager().getRepository(User).find()
    }
}