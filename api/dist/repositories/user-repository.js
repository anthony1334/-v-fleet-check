"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_1 = require("./../entities/user");
const typeorm_1 = require("typeorm");
class UserRepository {
    all() {
        return typeorm_1.getManager().getRepository(user_1.User).find();
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user-repository.js.map