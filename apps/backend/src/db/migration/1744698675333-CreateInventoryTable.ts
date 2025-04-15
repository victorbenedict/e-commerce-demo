import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateInventoryTable1744698675333 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'inventory',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '256',
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'price',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'sku',
            type: 'varchar',
            length: '128',
            isNullable: true,
          },
          {
            name: 'stock',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'varchar',
            length: '64',
            isNullable: true,
          },
          {
            name: 'image_url',
            type: 'varchar',
            length: '512',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            onUpdate: 'now()',
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
    await queryRunner.dropTable('inventory');
  }
}
