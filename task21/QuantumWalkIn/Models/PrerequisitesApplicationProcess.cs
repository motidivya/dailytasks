using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class PrerequisitesApplicationProcess
    {
        public int Id { get; set; }
        public string GeneralInstructions { get; set; } = null!;
        public string MinimumSystemRequirements { get; set; } = null!;
        public string Process { get; set; } = null!;
        public int WalkInId { get; set; }

        public virtual WalkIn WalkIn { get; set; } = null!;
    }
}
