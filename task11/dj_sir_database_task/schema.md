# Schemas

Job

--| Logged In (Boolean)

--| Apply Button (Boolean)

--| Details (String)

--|--| Expiry date (Date)
--|--| Title (String)
--|--| Date To and From (Date)
--|--| Location (String)
--|--| Job Roles (String)

--|--|--| Gross compensation package (Number)
--|--|--| Role Description (String)
--|--|--| Requirements (String)

--|--| Special Opportunities (String)

--| Prerequisites $ Application Process (String)

--|--| General Instructions (String)
--|--| Minimum System Requirements (String)
--|--| Process (String)

--| Time Slots & Preferences

--|--| Time Slot (Single Select)

--|--|--| Start Time (Time)
--|--|--| End Time (Time)

--|--| Preference (String, Multiple Select)

--| Upload Updated Resume (File, Single Upload)