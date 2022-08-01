using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class Preference
    {
        public int Id { get; set; }
        public int JobRolesId { get; set; }

        public virtual JobRole1 JobRoles { get; set; } = null!;
    }
}
