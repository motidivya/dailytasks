using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class EducationalQualification
    {
        public EducationalQualification()
        {
            Colleges = new HashSet<College>();
            Qualifications = new HashSet<Qualification>();
            Streams = new HashSet<Stream>();
        }

        public int Id { get; set; }
        public float? AggregatePercentage { get; set; }
        public int? YearOfPassing { get; set; }
        public int ApplicantId { get; set; }
        public string? CollegeName { get; set; }
        public string? CollegeLocation { get; set; }

        public virtual Applicant Applicant { get; set; } = null!;
        public virtual ICollection<College> Colleges { get; set; }
        public virtual ICollection<Qualification> Qualifications { get; set; }
        public virtual ICollection<Stream> Streams { get; set; }
    }
}
