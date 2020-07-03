using BL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL.Seed
{
    public static class SeedBoatsExtension
    {
        public static void SeedBoats(this ModelBuilder modelBuilder)
        {
            var boats = new[]
            {
                new Boat()
                {
                    Id = 1,
                    Name = "Boat 1",
                    Producer = "Producer 2",
                    BuildNumber = 1,
                    LOA = 5.25,
                    B = 3.2,
                    Picture = "https://i.imgur.com/bd4DnKf.jpg",
                },
                new Boat()
                {
                    Id = 2,
                    Name = "Boat 2",
                    Producer = "Producer1",
                    BuildNumber = 2,
                    LOA = 4.25,
                    B = 2.2,
                    Picture = "https://i.imgur.com/bd4DnKf.jpg",
                },
                new Boat()
                {
                    Id = 3,
                    Name = "Boat 3",
                    Producer = "Producer 3",
                    BuildNumber = 3,
                    LOA = 6.25,
                    B = 4.2,
                    Picture = "https://i.imgur.com/bd4DnKf.jpg",

                },
                new Boat()
                {
                    Id = 4,
                    Name = "Boat 4",
                    Producer = "Producer 4",
                    BuildNumber = 4,
                    LOA = 4.25,
                    B = 2.2,
                    Picture = "https://i.imgur.com/bd4DnKf.jpg",

                },
                new Boat()
                {
                    Id = 5,
                    Name = "Boat 5",
                    Producer = "Producer 5",
                    BuildNumber = 5,
                    LOA = 4.25,
                    B = 2.2,
                    Picture = "https://i.imgur.com/bd4DnKf.jpg",

                },
            };

            modelBuilder.Entity<Boat>()
                .HasData(boats);
        }
    }
}
