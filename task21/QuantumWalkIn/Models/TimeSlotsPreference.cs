using System;
using System.Collections.Generic;

namespace QuantumWalkIn.Models
{
    public partial class TimeSlotsPreference
    {
        public int Id { get; set; }
        public int TimeSlotId { get; set; }
        public int PreferenceId { get; set; }
    }
}
