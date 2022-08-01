using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class Date
    {
        public Date()
        {
            Applications = new HashSet<Application>();
        }

        public int Id { get; set; }
        public DateOnly? Date1 { get; set; }
        public int WalkInId { get; set; }

        public virtual WalkIn WalkIn { get; set; } = null!;
        public virtual ICollection<Application> Applications { get; set; }
    }
}
