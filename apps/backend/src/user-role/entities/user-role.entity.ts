import { EUserRole } from 'src/constants/types';
import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_roles' })
export class UserRole {
  @PrimaryColumn('uuid', { name: 'user_id' })
  userId: string;

  @PrimaryColumn({
    type: 'enum',
    enum: EUserRole,
    name: 'role',
  })
  role: EUserRole;
}
