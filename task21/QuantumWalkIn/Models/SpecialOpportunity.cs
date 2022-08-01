using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class SpecialOpportunity
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public int WalkInId { get; set; }

        public virtual WalkIn WalkIn { get; set; } = null!;
    }
}
