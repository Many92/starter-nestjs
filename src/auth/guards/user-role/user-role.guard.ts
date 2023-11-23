import { Reflector } from '@nestjs/core';
import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserInterface } from '../../../interfaces/jwt-payload.interface';
import { META_ROLES } from '../../../auth/decorators/role-protected/role-protected.decorator';
@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles: string[] = this.reflector.get(
      META_ROLES,
      context.getHandler(),
    );
    if (!validRoles) return true;
    if (validRoles.length === 0) return true;
    const req = context.switchToHttp().getRequest();
    const user = req.user as UserInterface;

    if (!user)
      throw new BadRequestException('Su rol no tiene los permisos necesarios');
    for (const role of user.roles) {
      if (validRoles.includes(role)) return true;
    }
    throw new ForbiddenException('Su rol no tiene permitido esta operación');
  }
}
