import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterModuleDeleteDescription1639343348020
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("modules", "description");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "modules",
      new TableColumn({
        name: "description",
        type: "varchar",
      })
    );
  }
}
