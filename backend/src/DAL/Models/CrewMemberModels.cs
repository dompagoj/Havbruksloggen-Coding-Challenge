using System;
using BL.Entities;

namespace Api.Models
{
    public class CrewMemberModel
    {
        public string Name { get; set; }
        public string? Picture { get; set; }
        public int Age { get; set; }
        public string Email { get; set; } = null!;
        public CrewRole Role { get; set; }
        public DateTime CertifiedUntil { get; set; } = DateTime.Now;
    }
}
