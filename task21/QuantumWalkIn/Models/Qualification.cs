using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class Qualification
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int EducationalQualificationId { get; set; }
        public int EducationalQualificationApplicantId { get; set; }

        public virtual EducationalQualification EducationalQualification { get; set; } = null!;
    }
}
