import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { UserProfileService } from './user-profile.service';

@Controller('user-profile')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Get()
  findAll() {
    return this.userProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userProfileService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserProfileDto: UpdateUserProfileDto,
  ) {
    return this.userProfileService.update(id, updateUserProfileDto);
  }
}
