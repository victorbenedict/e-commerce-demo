import { IsNotEmpty } from 'class-validator';

export class UpdateUserProfileDto {
  @IsNotEmpty({ message: 'Name is required.' })
  name: string;
}
