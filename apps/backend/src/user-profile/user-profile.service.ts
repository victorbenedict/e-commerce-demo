import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProfile } from './entities/user-profile.entity';
import { Repository } from 'typeorm';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';

@Injectable()
export class UserProfileService {
  constructor(
    @InjectRepository(UserProfile)
    private readonly userProfileRepository: Repository<UserProfile>,
  ) {}

  async findAll(): Promise<UserProfile[]> {
    return await this.userProfileRepository.find({ select: ['id', 'name'] });
  }

  async findOne(id: string): Promise<Partial<UserProfile> | null> {
    return await this.userProfileRepository.findOne({
      where: { id },
      select: ['id', 'name'],
    });
  }

  async update(
    id: string,
    updateUserProfileDto: UpdateUserProfileDto,
  ): Promise<Partial<UserProfile> | null> {
    const { name } = updateUserProfileDto;
    await this.userProfileRepository.update({ id }, { name });

    return this.findOne(id);
  }
}
