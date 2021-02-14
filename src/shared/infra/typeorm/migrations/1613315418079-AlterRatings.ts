import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class AlterRatings1613315418079 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('ratings', 'FK_COUCH_ID');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'ratings',
      new TableForeignKey({
        name: 'FK_COUCH_ID',
        columnNames: ['couch_id'],
        referencedTableName: 'couchs',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }
}
