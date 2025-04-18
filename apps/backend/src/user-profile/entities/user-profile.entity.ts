import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryColumn } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  MEMBER = 'member',
}

@Entity({ name: 'user_profiles' })
export class UserProfile {
  @Expose()
  @PrimaryColumn('uuid')
  id: string;

  @Expose()
  @Column({ type: 'varchar', nullable: true })
  name?: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    nullable: false,
    default: UserRole.MEMBER,
  })
  role: UserRole;
}
