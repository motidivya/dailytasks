using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class JobDetail
    {
        public int Id { get; set; }
        public DateOnly ExpiryDate { get; set; }
        public DateOnly DateToFrom { get; set; }
        public string Location { get; set; } = null!;
        public int JobRolesId { get; set; }
        public int SpecialOpportunitiesId { get; set; }

        public virtual JobRole1 JobRoles { get; set; } = null!;
    }
}
