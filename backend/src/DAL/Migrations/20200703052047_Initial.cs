using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace DAL.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "boats",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(nullable: false),
                    producer = table.Column<string>(nullable: false),
                    build_number = table.Column<int>(nullable: false),
                    loa = table.Column<double>(nullable: false),
                    b = table.Column<double>(nullable: false),
                    picture = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_boats", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "crew_members",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(nullable: false),
                    picture = table.Column<string>(nullable: true),
                    age = table.Column<int>(nullable: false),
                    email = table.Column<string>(nullable: false),
                    role = table.Column<string>(nullable: false),
                    certified_until = table.Column<DateTime>(nullable: false),
                    boat_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_crew_members", x => x.id);
                    table.ForeignKey(
                        name: "fk_crew_members_boats_boat_id",
                        column: x => x.boat_id,
                        principalTable: "boats",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "boats",
                columns: new[] { "id", "b", "build_number", "loa", "name", "picture", "producer" },
                values: new object[,]
                {
                    { 1, 3.2000000000000002, 1, 5.25, "Boat 1", "https://i.imgur.com/bd4DnKf.jpg", "Producer 2" },
                    { 2, 2.2000000000000002, 2, 4.25, "Boat 2", "https://i.imgur.com/bd4DnKf.jpg", "Producer1" },
                    { 3, 4.2000000000000002, 3, 6.25, "Boat 3", "https://i.imgur.com/bd4DnKf.jpg", "Producer 3" },
                    { 4, 2.2000000000000002, 4, 4.25, "Boat 4", "https://i.imgur.com/bd4DnKf.jpg", "Producer 4" },
                    { 5, 2.2000000000000002, 5, 4.25, "Boat 5", "https://i.imgur.com/bd4DnKf.jpg", "Producer 5" }
                });

            migrationBuilder.CreateIndex(
                name: "ix_crew_members_boat_id",
                table: "crew_members",
                column: "boat_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "crew_members");

            migrationBuilder.DropTable(
                name: "boats");
        }
    }
}
