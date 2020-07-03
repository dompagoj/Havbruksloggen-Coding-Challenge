migrate_create:
	@dotnet ef migrations add $(name) --startup-project Api --context AppDbContext --project DAL

migrate_latest:
	@dotnet ef database update --startup-project Api --context AppDbContext --project DAL

migrate_remove:
	@dotnet ef migrations remove --startup-project Api --context AppDbContext --project DAL

migrate_reset:
	@dotnet ef database update 0 --startup-project Api --context AppDbContext --project DAL
	@dotnet ef migrations remove --startup-project Api --context AppDbContext --project DAL

migrate:
	@dotnet ef database update $(name) --startup-project Api --context AppDbContext --project DAL
