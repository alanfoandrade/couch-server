import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCouchs1613092202715 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'couchs',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'model',
            type: 'varchar',
          },
          {
            name: 'seaters',
            type: 'integer',
          },
          {
            name: 'lenght',
            type: 'integer',
          },
          {
            name: 'height',
            type: 'integer',
          },
          {
            name: 'width',
            type: 'integer',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
            onUpdate: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('couchs');
  }
}
