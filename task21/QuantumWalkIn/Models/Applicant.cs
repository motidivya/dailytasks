using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    /// <summary>
    /// Applicant is the user that may or may not apply to any walkin.
    /// </summary>
    public partial class Applicant
    {
        public Applicant()
        {
            Applications = new HashSet<Application>();
            EducationalQualifications = new HashSet<EducationalQualification>();
            ProfessionalQualifications = new HashSet<ProfessionalQualification>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string EmailId { get; set; } = null!;
        public string PasswordHash { get; set; } = null!;
        public DateTime? Created { get; set; }
        public DateTime? Updated { get; set; }
        public long PhoneNumber { get; set; }
        public byte[]? Resume { get; set; }
        public string? Portfolio { get; set; }
        public string? Referral { get; set; }
        public sbyte? Updates { get; set; }
        public byte[]? Picture { get; set; }

        public virtual ICollection<Application> Applications { get; set; }
        public virtual ICollection<EducationalQualification> EducationalQualifications { get; set; }
        public virtual ICollection<ProfessionalQualification> ProfessionalQualifications { get; set; }
    }
}
