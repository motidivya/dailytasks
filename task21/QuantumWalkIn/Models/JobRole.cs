using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class JobRole
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public int GrossCompensation { get; set; }
        public string RoleDescription { get; set; } = null!;
        public string Requirements { get; set; } = null!;
        public int WalkInId { get; set; }
        public int ApplicationId { get; set; }

        public virtual WalkIn WalkIn { get; set; } = null!;
    }
}
