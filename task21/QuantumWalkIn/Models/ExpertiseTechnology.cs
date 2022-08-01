using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class ExpertiseTechnology
    {
        public int Id { get; set; }
        public int ProfessionalQualificationsId { get; set; }
        public int ProfessionalQualificationsApplicantId { get; set; }

        public virtual ProfessionalQualification ProfessionalQualifications { get; set; } = null!;
    }
}
