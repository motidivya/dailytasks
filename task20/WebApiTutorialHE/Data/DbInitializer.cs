using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiTutorialHE.Models;

namespace WebApiTutorialHE.Data
{
    public class DBInitializer
    {
        public static void Initialize(ProductContext context)
        {
            context.Database.EnsureCreated();

            if (context.Product.Any())
            {
                return; // DB has already been seeded
            }

            var temperature = new Product[]{
                new Product{Id=1, Cost=1.21, Weight=100, Fragile=false, Quantity=10},
                new Product{Id=2, Cost=20.99, Weight=100, Fragile=false, Quantity=13},
                new Product{Id=3, Cost=27.99, Weight=100, Fragile=false, Quantity=123},
                new Product{Id=4, Cost=81.99, Weight=100, Fragile=false, Quantity=13},
                new Product{Id=5, Cost=21.00, Weight=100, Fragile=false, Quantity=42}
            };
            foreach (Product t in temperature)
            {
                context.Product.Add(t);
            }
            context.SaveChanges();
        }
    }
}