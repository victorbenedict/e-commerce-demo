import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRoles } from './roles.entity';
import { EUserRole } from 'src/constants/types';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(UserRoles)
    private rolesRepository: Repository<UserRoles>,
  ) {}

  async findRoleById(id: string): Promise<EUserRole | null> {
    const user = await this.rolesRepository.findOne({
      where: { id },
    });
    return user ? user.role : null;
  }
}
