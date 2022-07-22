namespace WebApiTutorialHE.Models
{
    public class Product
    {
        public int? Id { get; set; }
        public double Cost { get; set; }
        public double Weight { get; set; }
        public bool Fragile { get; set; }
        public int Quantity { get; set; }
    }
}