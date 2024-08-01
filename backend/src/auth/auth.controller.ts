import { Controller, Get, Post, Body, UseGuards, UsePipes, ValidationPipe,  Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RequestWithUser } from './jwt.strategy';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/create-user.dto';

export type AuthBody = {
  email: string;
  password: string;
};

export type CreateUser = {
    email: string,
    name: string, 
    password: string
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  // Envoie d'un mot de passe et email
  // L'API renvoie un token
  @Post('login')
  async login(@Body() authBody: AuthBody) {
    return await this.authService.login(authBody);
  }
  @Post('register')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.authService.register(createUserDto);
  }


  
// utilisation de JWTStrategy
@UseGuards(JwtAuthGuard)
  @Get()
  async authenticateUser(@Request() request: RequestWithUser){
   
    return await this.userService.getUser({
        userId: request.user.userId
    })
  }
}