import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ){}

    async listUser(): Promise<User[]> {
        return this.userModel.findAll()
    }

    async listOne(id: number): Promise<User>{
        return this.userModel.findByPk(id)
    }

    async create(data: User){
        let user = new User()
        user.name = data.name,
        user.email = data.email,
        user.phone = data.phone,
        user.password = data.password
        return this.userModel.create(user)        
    }

    update(user: User) {
        return this.userModel.update(user, {
            where: {
                id: user.id
            }
        })
    }

    async delete(id: number) {
        const user: User = await this.listOne(id)
        user.destroy()
    }


}