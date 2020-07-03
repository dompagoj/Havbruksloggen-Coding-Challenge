using System.Collections.Generic;

namespace BL.Entities
{
    public class Boat : BaseEntity
    {
        public string Name { get; set; } = null!;
        public string Producer { get; set; } = null!;
        public int BuildNumber { get; set; }
        public double LOA { get; set; }
        public double B { get; set; }
        public string Picture { get; set; } = null!;

        public ICollection<CrewMember> Crew { get; set; } = null!;
    }
}
