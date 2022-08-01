using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class Technology
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int ExpertiseTechnologiesId { get; set; }
        public int FamiliarTechnologiesId { get; set; }
        public int FamiliarTechnologiesProfessionalQualificationsId { get; set; }
        public int FamiliarTechnologiesProfessionalQualificationsApplicantId { get; set; }

        public virtual FamiliarTechnology FamiliarTechnologies { get; set; } = null!;
    }
}
