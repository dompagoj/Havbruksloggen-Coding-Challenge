using BL.Entities;

namespace DAL.DTOs
{
    public class BoatDTO
    {
        public Boat Boat { get; set; }
        public int CrewCount { get; set; }

        public BoatDTO(Boat boat, int crewCount)
        {
            Boat = boat;
            CrewCount = crewCount;
        }
    }
}
