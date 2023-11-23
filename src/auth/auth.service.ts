import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  JwtPayload,
  UserInterface,
} from 'src/interfaces/jwt-payload.interface';
import { LoginAuthDto } from './dto/create-auth.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async login(loginDto: LoginAuthDto) {
    const user = await this.userService.findUsername(loginDto.username);

    if (!user)
      throw new UnauthorizedException('Sus credenciales no son correctas');

    if (!bcrypt.compareSync(loginDto.password, user.password))
      throw new UnauthorizedException('La contraseña es incorrecta');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userUpd } = user;
    return {
      ...userUpd,
      token: this.getJwtToken({ id: user.id }),
    };
  }
  async checkToken(user: UserInterface) {
    return {
      ...user,
      token: this.getJwtToken({ id: user.id }),
    };
  }
  private getJwtToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }
}
