import { Injectable, BadRequestException } from '@nestjs/common';
import { Prisma} from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service'
import { CreateUserDto } from '../create-user.dto';
import * as bcrypt from 'bcrypt';

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

    async createUser(userData: { email: string, name: string, password: string }) {
      try {
        if (!userData.email || !userData.email.includes('@')) {
          throw new BadRequestException('Invalid email format');
        }
        const hashedPassword = await bcrypt.hash(userData.password, 10);
    
        const user = await this.prisma.user.create({
          data: {
            email: userData.email,
            name: userData.name,
            password: hashedPassword,
          },
        });
    
        return user;
      } catch (error) {
        
        console.error('erreur durant la création:', error);
        throw new Error('Echec de création du user'); 
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
          throw new Error(`Erreur suppression user: ${error.message}`);
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
          throw new Error(`Erreur updating user: ${error.message}`);
        }
    }

}
