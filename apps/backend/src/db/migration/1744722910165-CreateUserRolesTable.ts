import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserRolesTable1744722910165 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE user_role_enum AS ENUM ('shopper', 'seller', 'admin');`,
    );
    await queryRunner.createTable(
      new Table({
        name: 'user_roles',
        columns: [
          {
            name: 'user_id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'role',
            type: 'user_role_enum',
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['user_id'],
            referencedTableName: 'auth.users',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_roles');
    await queryRunner.query(`DROP TYPE user_role_enum;`);
  }
}
