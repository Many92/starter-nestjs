import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/create-auth.dto';
import { GetUser } from './decorators/get-user.decorator';
import { UserInterface } from '../interfaces/jwt-payload.interface';
import { Auth } from './decorators/auth.decorators';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  create(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @Get('check-token')
  @Auth()
  checkAuthStatus(@GetUser() user: UserInterface) {
    return this.authService.checkToken(user);
  }
}
