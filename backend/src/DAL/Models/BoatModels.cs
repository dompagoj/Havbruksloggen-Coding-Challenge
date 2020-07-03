namespace DAL.Models
{
    public class BoatModel
    {
        public string Name { get; set; } = null!;
        public string Producer { get; set; } = null!;
        public int BuildNumber { get; set; }
        public double LOA { get; set; }
        public double B { get; set; }
        public string Picture { get; set; } = null!;
    }
}
