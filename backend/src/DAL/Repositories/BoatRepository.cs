using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using BL.Entities;
using DAL.DTOs;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public class BoatRepository : BaseRepository<Boat>
    {
        public BoatRepository(AppDbContext dbContext) : base(dbContext) { }

        public override Task<Boat?> Find(int id)
        {
            return _dbContext.Boats.Include(b => b.Crew).FirstOrDefaultAsync(t => t.Id == id)!;
        }

        public Task<List<BoatDTO>> FindAll()
        {
            return _dbContext.Boats.Select(b => new BoatDTO(b, b.Crew.Count)).ToListAsync();
        }

        public Task<Boat> Create(BoatModel model)
        {
            var boat = new Boat()
            {
                Name = model.Name,
                Producer = model.Producer,
                BuildNumber = model.BuildNumber,
                LOA = model.LOA,
                B = model.B,
                Picture = model.Picture,
            };

            return base.Create(boat);
        }

        public async Task<Boat> Update(int id, BoatModel model)
        {
            var boat = await _dbContext.Boats.FindAsync(id);

            boat.Name = model.Name;
            boat.Producer = model.Producer;
            boat.BuildNumber = model.BuildNumber;
            boat.LOA = model.LOA;
            boat.B = model.B;
            boat.Picture = model.Picture;

            return await base.Update(boat);
        }
    }
}
