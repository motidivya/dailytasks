using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class TimeSlot
    {
        public int Id { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
        public int WalkInId { get; set; }

        public virtual WalkIn WalkIn { get; set; } = null!;
    }
}
