import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { Query } from "typeorm/driver/Query";

export class CreateClients1633130592981 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "transactions",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "amount",
                        type: "number"
                    },
                    {
                        name: "type",
                        type: "varchar"
                    },
                    {
                        name: "category",
                        type: "varchar"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('transactions')
    }

}
