import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, } from '@prisma/client';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Get( '/:userId')

    getUser(@Param('userId') userId:String){
        return this.userService.getUser({
            userId,
        });
    }

    @Post()
    async createUser(@Body() data:any) {
        return this.userService.createUser(data);
    }

    @Put('/:id')
    async updateUser(@Param('id') userId: string, @Body() data: any){
        return this.userService.updateUser(userId, data);
    }


    @Delete('/:id')
    async deleteUser(@Param('id') userId: string) {
        return this.userService.deleteUser(userId);
    }

}
