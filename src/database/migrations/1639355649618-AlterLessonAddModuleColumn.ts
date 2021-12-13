import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AlterLessonAddModuleColumn1639355649618
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "lessons",
      new TableColumn({
        name: "module_id",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "lessons",
      new TableForeignKey({
        name: "LessonModulesPK",
        columnNames: ["module_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "modules",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("lessons", "module_id");
    await queryRunner.dropForeignKey("lessons", "LessonModulesPK");
  }
}
