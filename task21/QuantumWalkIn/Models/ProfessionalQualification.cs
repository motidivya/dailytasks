using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class ProfessionalQualification
    {
        public ProfessionalQualification()
        {
            ExpertiseTechnologiesNavigation = new HashSet<ExpertiseTechnology>();
            FamiliarTechnologies = new HashSet<FamiliarTechnology>();
            Types = new HashSet<Type>();
        }

        public int Id { get; set; }
        public string? ProfessionalQualificationscol { get; set; }
        public int ApplicantId { get; set; }
        public int? YearsOfExperience { get; set; }
        public long? CurrentCtc { get; set; }
        public long? ExpectedCtc { get; set; }
        public string? ExpertiseTechnologies { get; set; }
        public sbyte? NoticePeriod { get; set; }
        public DateOnly? LengthOfNoticePeriod { get; set; }
        public sbyte? PastAppearances { get; set; }
        public string? Role { get; set; }

        public virtual Applicant Applicant { get; set; } = null!;
        public virtual ICollection<ExpertiseTechnology> ExpertiseTechnologiesNavigation { get; set; }
        public virtual ICollection<FamiliarTechnology> FamiliarTechnologies { get; set; }
        public virtual ICollection<Type> Types { get; set; }
    }
}
