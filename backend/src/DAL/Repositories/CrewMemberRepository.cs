using System.Threading.Tasks;
using Api.Models;
using BL.Entities;

namespace DAL.Repositories
{
    public class CrewMemberRepository : BaseRepository<CrewMember>
    {
        public CrewMemberRepository(AppDbContext dbContext) : base(dbContext) { }

        public Task<CrewMember> Create(int boatId, CrewMemberModel model)
        {
            var crewMember = new CrewMember()
            {
                Name = model.Name,
                Picture = model.Picture,
                Age = model.Age,
                Email = model.Email,
                Role = model.Role,
                CertifiedUntil = model.CertifiedUntil,
                BoatId = boatId,
            };

            return base.Create(crewMember);
        }

        public async Task<CrewMember> Update(int id, CrewMemberModel model)
        {
            var crewMember = await _dbContext.CrewMembers.FindAsync(id);

            crewMember.Name = model.Name;
            crewMember.Picture = model.Picture;
            crewMember.Age = model.Age;
            crewMember.Email = model.Email;
            crewMember.Role = model.Role;
            crewMember.CertifiedUntil = model.CertifiedUntil;

            return await base.Update(crewMember);
        }
    }
}
