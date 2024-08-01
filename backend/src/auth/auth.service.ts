import { Injectable, BadRequestException } from '@nestjs/common';
import {AuthBody, CreateUser } from './auth.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import {hash, compare} from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from './jwt.strategy';
import { CreateUserDto } from 'src/create-user.dto';

@Injectable()
export class AuthService {
    // On va utiliser prisma pour savoir si l'utilisateur est dans la DB 
    constructor(private readonly prisma: PrismaService, private readonly jwtService:JwtService){}
    async login(authBody: AuthBody){
        const { email, password} = authBody
        
        const existingUser = await this.prisma.user.findUnique({
            where: {
                email: email,
            }
        });

        if (!existingUser) {
            throw new Error("L'utilisateur n'existe pas ");
        }

        //  On verifie que le mot de passe est le bon
        const isPasswordValid = await this.isPasswordValid({ password, hashedPassword:existingUser.password});

        if (!isPasswordValid) {
            throw new Error("Le mot de passe est invalid");
        }

       
        
        
        return  this.authenticateUser({
            userId: existingUser.id
        });
        
        //const hashPassword = await this.hashPassword({password});
       

    }
    // Methode disponible uniquement dans le service et on hash le password
    private async hashPassword({password} : { password:string}) {
        const hashedPassword =  await hash( password, 10)
        return hashedPassword ; 
    }

    // Comparer le mot de pass hasher et celui en clair 
    private async isPasswordValid({password, hashedPassword} : { password:string, hashedPassword: string}) {
        const isPasswordValid = await compare(password, hashedPassword)
        return isPasswordValid ; 
    }
 
    // Création du payload
    private async authenticateUser({userId} : UserPayload) {
        const payload: UserPayload = { userId};
        return {
            access_token: await this.jwtService.sign(payload),
        };
    }
    

    async register(createUserDto: CreateUserDto){
        const { email, name, password} = createUserDto;
       // Vérifiez que l'email n'est pas  vide
      if (!email) {
        throw new Error("L'email est requis ")
      }
        const existingUser = await this.prisma.user.findUnique({
            where: {
                email,
            }
        });

        if (existingUser) {
            throw new Error("Un compte existe déjà à cette adress email");
        }

       const hashedPassword = await this.hashPassword({password});
       const createdUser = await this.prisma.user.create({
        data: {
            email,
            name,
            password: hashedPassword
        }
       })
        
        return  this.authenticateUser({
            userId: createdUser.id
        });
        
        
       

    }


}

