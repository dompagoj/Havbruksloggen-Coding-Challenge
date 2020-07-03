using System;
using System.Text.Json.Serialization;

namespace BL.Entities
{
    public class CrewMember : BaseEntity
    {
        public string Name { get; set; } = null!;
        public string? Picture { get; set; }
        public int Age { get; set; }
        public string Email { get; set; } = null!;
        public CrewRole Role { get; set; }
        public DateTime CertifiedUntil { get; set; } = DateTime.Now;

        public int BoatId { get; set; }

        [JsonIgnore]
        public Boat Boat { get; set; } = null!;
    }

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum CrewRole
    {
        Captain,
        DeckCader,
        ChiefEngineer,
        Motorman,
    }
}
