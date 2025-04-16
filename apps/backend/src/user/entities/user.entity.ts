import { EUserRole } from 'src/constants/types';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'auth_user_id', type: 'uuid' })
  authUserId: string; // This references the auth.users table (Supabase)

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({
    type: 'enum',
    enum: EUserRole,
    default: EUserRole.MEMBER,
  })
  role: EUserRole;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
