using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class Application
    {
        public int Id { get; set; }
        public int ApplicantId { get; set; }
        public int WalkInId { get; set; }
        public int DateId { get; set; }
        public int DateWalkInId { get; set; }
        public string Venue { get; set; } = null!;
        public string? ThingsToRemember { get; set; }

        public virtual Applicant Applicant { get; set; } = null!;
        public virtual Date Date { get; set; } = null!;
        public virtual WalkIn WalkIn { get; set; } = null!;
    }
}
