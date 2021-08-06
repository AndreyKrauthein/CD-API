import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Get()
    async listUser(): Promise<User[]> {
        return this.userService.listUser()
    }

    @Get(":id")
    async listOne(@Param() params): Promise <User>{
        return this.userService.listOne(params.id)
    }

    @Post()
    async create(@Body() data: User) {
       return this.userService.create(data)
    }

    @Put()
    async update(@Body() user: User) {
        await this.userService.update(user)
        return user
    }

    @Delete(":id")
    async delete(@Param() params): Promise<string> {
        await this.userService.delete(params.id)
        return "Usuario deletado!"
    }
}