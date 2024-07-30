import { Injectable } from '@nestjs/common';
import { Prisma} from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService){}
   async getUsers() {
        const users = await this.prisma.user.findMany({
            // Selectionné ce qu'on veut recuperer
            select: {
                id: true,
                email: true,
                name: true,
            }
        })
        return users;
    }

    async getUser( {userId}: {userId:String}) {
        const users = await this.prisma.user.findUnique({
            where: {
                id: ''
            },
            // Selectionné ce qu'on veut recuperer
            select: {
                id: true,
                email: true,
                name: true,
            }
        })
        return users;
    }

    async createUser(data: any) {
        try {
          const user = await this.prisma.user.create({
            data,
          });
          return user;
        } catch (error) {
          throw new Error(`Error creating user: ${error.message}`);
        }
    }
    
    async deleteUser(userId: string) {
        try {
          const user = await this.prisma.user.delete({
            where: {
              id: userId,
            },
          });
          return user;
        } catch (error) {
          throw new Error(`Error deleting user: ${error.message}`);
        }
    }
    
    async updateUser(userId: string, data: any) {
        try {
          const user = await this.prisma.user.update({
            where: {
              id: userId,
            },
            data,
          });
          return user;
        } catch (error) {
          throw new Error(`Error updating user: ${error.message}`);
        }
    }

}
