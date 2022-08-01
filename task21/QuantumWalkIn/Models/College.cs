using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class College
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Location { get; set; }
        public int EducationalQualificationsId { get; set; }
        public int EducationalQualificationsApplicantId { get; set; }

        public virtual EducationalQualification EducationalQualifications { get; set; } = null!;
    }
}
