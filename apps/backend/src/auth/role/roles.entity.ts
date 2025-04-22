import { Expose } from 'class-transformer';
import { EUserRole } from 'src/constants/types';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_profiles' })
export class UserRoles {
  @Expose()
  @PrimaryColumn('uuid')
  id: string;

  @Expose()
  @Column({ type: 'varchar', nullable: true })
  name?: string;

  @Column({
    type: 'enum',
    enum: EUserRole,
    nullable: false,
    default: EUserRole.MEMBER,
  })
  role: EUserRole;
}
