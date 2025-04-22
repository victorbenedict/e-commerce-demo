import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { EUserRole } from 'src/constants/types';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { UserProfileService } from './user-profile.service';
import { Roles } from 'src/auth/decorator/role.decorator';

@Controller('user-profile')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Get()
  @Roles(EUserRole.ADMIN)
  findAll() {
    return this.userProfileService.findAll();
  }

  @Get(':id')
  @Roles(EUserRole.ADMIN)
  findOne(@Param('id') id: string) {
    return this.userProfileService.findOne(id);
  }

  @Patch(':id')
  @Roles(EUserRole.ADMIN)
  update(
    @Param('id') id: string,
    @Body() updateUserProfileDto: UpdateUserProfileDto,
  ) {
    return this.userProfileService.update(id, updateUserProfileDto);
  }
}
