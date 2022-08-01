using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class Type
    {
        public int Id { get; set; }
        public string? Type1 { get; set; }
        public int ProfessionalQualificationsId { get; set; }
        public int ProfessionalQualificationsApplicantId { get; set; }

        public virtual ProfessionalQualification ProfessionalQualifications { get; set; } = null!;
    }
}
