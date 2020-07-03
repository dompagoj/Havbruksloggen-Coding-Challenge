using BL.Entities;
using DAL.Configuration;
using DAL.Seed;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class AppDbContext : DbContext
    {
        public DbSet<Boat> Boats { get; set; } = null!;
        public DbSet<CrewMember> CrewMembers { get; set; } = null!;

        public AppDbContext() { }
        public AppDbContext(DbContextOptions opts) : base(opts) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.UseSnakeCase();
            modelBuilder.SeedBoats();

            modelBuilder.Entity<CrewMember>()
                .Property(c => c.Role)
                .HasConversion<string>();
        }
    }
}
