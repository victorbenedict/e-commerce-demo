// import { Seeder } from '@jorgebodega/typeorm-seeding';
// import { EUserRole } from 'src/constants/types';
// import { UserRole } from 'src/user-role/entities/user-role.entity';
// import { DataSource } from 'typeorm';

// export default class UserRolesSeeder extends Seeder {
//   async run(dataSource: DataSource): Promise<void> {
//     const userRoles: UserRole[] = [
//       { userId: 'a493b6d0-7699-4542-be59-29d9f4e5f3a4', role: EUserRole.ADMIN },
//       {
//         userId: 'defaaeda-d4ca-4184-b602-4bade074f0ca',
//         role: EUserRole.SHOPPER,
//       },
//       {
//         userId: 'c42a2b6d-d937-4811-8a7a-41e579d6d340',
//         role: EUserRole.SELLER,
//       },
//       {
//         userId: 'c42a2b6d-d937-4811-8a7a-41e579d6d340',
//         role: EUserRole.SHOPPER,
//       },
//       {
//         userId: 'd9c9b6e8-1096-4c80-bfc1-359a7d73db20',
//         role: EUserRole.SELLER,
//       },
//     ];

//     await dataSource.getRepository(UserRole).insert(userRoles);
//   }
// }
