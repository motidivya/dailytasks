using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class JobRole1
    {
        public JobRole1()
        {
            JobDetails = new HashSet<JobDetail>();
            Preferences = new HashSet<Preference>();
        }

        public int Id { get; set; }
        public int GrossCompensation { get; set; }
        public string RoleDescription { get; set; } = null!;
        public string Requirements { get; set; } = null!;

        public virtual ICollection<JobDetail> JobDetails { get; set; }
        public virtual ICollection<Preference> Preferences { get; set; }
    }
}
