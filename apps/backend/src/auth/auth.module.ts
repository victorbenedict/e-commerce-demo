import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './jwt/jwt.strategy';
import { UserRoles } from './role/roles.entity';
import { RolesService } from './role/roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoles])],
  providers: [JwtStrategy, RolesService],
  exports: [RolesService],
})
export class AuthModule {}
