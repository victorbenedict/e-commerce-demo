import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateUserTable1744789060635 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TYPE user_role_enum AS ENUM ('admin', 'member');
      `);

    await queryRunner.createTable(
      new Table({
        name: 'user_profiles',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '256',
            isNullable: true,
          },
          {
            name: 'role',
            type: 'user_role_enum',
            isNullable: true,
            default: `'member'`,
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'user_profiles',
      new TableForeignKey({
        columnNames: ['id'],
        referencedTableName: 'auth.users',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.query(
      `ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_profiles');
    await queryRunner.query(`DROP TYPE user_role_enum;`);
  }
}
