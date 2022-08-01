using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class WalkIn
    {
        public WalkIn()
        {
            Applications = new HashSet<Application>();
            Dates = new HashSet<Date>();
            JobRoles = new HashSet<JobRole>();
            PrerequisitesApplicationProcesses = new HashSet<PrerequisitesApplicationProcess>();
            SpecialOpportunities = new HashSet<SpecialOpportunity>();
            TimeSlots = new HashSet<TimeSlot>();
        }

        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public byte[]? UploadResume { get; set; }
        public DateOnly? ExpiryDate { get; set; }
        public DateOnly? DateCreated { get; set; }
        public string? Location { get; set; }
        public string? GuId { get; set; }
        public int UserId { get; set; }

        public virtual ICollection<Application> Applications { get; set; }
        public virtual ICollection<Date> Dates { get; set; }
        public virtual ICollection<JobRole> JobRoles { get; set; }
        public virtual ICollection<PrerequisitesApplicationProcess> PrerequisitesApplicationProcesses { get; set; }
        public virtual ICollection<SpecialOpportunity> SpecialOpportunities { get; set; }
        public virtual ICollection<TimeSlot> TimeSlots { get; set; }
    }
}
