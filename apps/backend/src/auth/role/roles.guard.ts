import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { EUserRole } from 'src/constants/types';
import { RolesService } from './roles.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private rolesService: RolesService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<EUserRole[]>(
      'roles',
      context.getHandler(),
    );
    if (!roles) {
      return true;
    }

    const request = context
      .switchToHttp()
      .getRequest<{ user?: { sub?: string } }>();

    const userId = request.user?.sub;
    if (!userId) return false;

    const userRole = await this.rolesService.findRoleById(userId);
    if (!userRole) return false;

    return roles.includes(userRole);
  }
}
