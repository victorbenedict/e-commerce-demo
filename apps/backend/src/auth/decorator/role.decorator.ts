import { EUserRole } from 'src/constants/types';
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: EUserRole[]) => SetMetadata('roles', roles);
