using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using QuantumWalkIn.Models;

namespace QuantumWalkIn.Data
{
    public partial class QuantumWalkInContext : DbContext
    {
        public QuantumWalkInContext()
        {
        }

        public QuantumWalkInContext(DbContextOptions<QuantumWalkInContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Applicant> Applicants { get; set; } = null!;
        public virtual DbSet<Application> Applications { get; set; } = null!;
        public virtual DbSet<College> Colleges { get; set; } = null!;
        public virtual DbSet<Date> Dates { get; set; } = null!;
        public virtual DbSet<EducationalQualification> EducationalQualifications { get; set; } = null!;
        public virtual DbSet<ExpertiseTechnology> ExpertiseTechnologies { get; set; } = null!;
        public virtual DbSet<FamiliarTechnology> FamiliarTechnologies { get; set; } = null!;
        public virtual DbSet<JobDetail> JobDetails { get; set; } = null!;
        public virtual DbSet<JobRole> JobRoles { get; set; } = null!;
        public virtual DbSet<JobRole1> JobRoles1 { get; set; } = null!;
        public virtual DbSet<Preference> Preferences { get; set; } = null!;
        public virtual DbSet<PrerequisitesApplicationProcess> PrerequisitesApplicationProcesses { get; set; } = null!;
        public virtual DbSet<ProfessionalQualification> ProfessionalQualifications { get; set; } = null!;
        public virtual DbSet<Qualification> Qualifications { get; set; } = null!;
        public virtual DbSet<SpecialOpportunity> SpecialOpportunities { get; set; } = null!;
        public virtual DbSet<Stream> Streams { get; set; } = null!;
        public virtual DbSet<Technology> Technologies { get; set; } = null!;
        public virtual DbSet<TimeSlot> TimeSlots { get; set; } = null!;
        public virtual DbSet<TimeSlotsPreference> TimeSlotsPreferences { get; set; } = null!;
        public virtual DbSet<Type> Types { get; set; } = null!;
        public virtual DbSet<WalkIn> WalkIns { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Applicant>(entity =>
            {
                entity.ToTable("applicant");

                entity.HasComment("Applicant is the user that may or may not apply to any walkin.");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Created)
                    .HasColumnType("datetime")
                    .HasColumnName("created");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(45)
                    .HasColumnName("email_id");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(45)
                    .HasColumnName("first_name");

                entity.Property(e => e.LastName)
                    .HasMaxLength(45)
                    .HasColumnName("last_name");

                entity.Property(e => e.PasswordHash)
                    .HasMaxLength(32)
                    .HasColumnName("password_hash");

                entity.Property(e => e.PhoneNumber).HasColumnName("phone_number");

                entity.Property(e => e.Picture)
                    .HasColumnType("blob")
                    .HasColumnName("picture");

                entity.Property(e => e.Portfolio)
                    .HasMaxLength(500)
                    .HasColumnName("portfolio");

                entity.Property(e => e.Referral)
                    .HasMaxLength(45)
                    .HasColumnName("referral");

                entity.Property(e => e.Resume)
                    .HasColumnType("blob")
                    .HasColumnName("resume");

                entity.Property(e => e.Updated)
                    .HasColumnType("datetime")
                    .HasColumnName("updated");

                entity.Property(e => e.Updates).HasColumnName("updates");
            });

            modelBuilder.Entity<Application>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.DateId, e.DateWalkInId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0, 0 });

                entity.ToTable("application");

                entity.HasIndex(e => new { e.DateId, e.DateWalkInId }, "fk_application_date1_idx");

                entity.HasIndex(e => e.WalkInId, "fk_application_walk_in1_idx");

                entity.HasIndex(e => e.ApplicantId, "fk_applications_applicant1_idx");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.DateId).HasColumnName("date_id");

                entity.Property(e => e.DateWalkInId).HasColumnName("date_walk_in_id");

                entity.Property(e => e.ApplicantId).HasColumnName("applicant_id");

                entity.Property(e => e.ThingsToRemember)
                    .HasColumnType("text")
                    .HasColumnName("things_to_remember");

                entity.Property(e => e.Venue)
                    .HasColumnType("text")
                    .HasColumnName("venue");

                entity.Property(e => e.WalkInId).HasColumnName("walk_in_id");

                entity.HasOne(d => d.Applicant)
                    .WithMany(p => p.Applications)
                    .HasForeignKey(d => d.ApplicantId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_applications_applicant1");

                entity.HasOne(d => d.WalkIn)
                    .WithMany(p => p.Applications)
                    .HasForeignKey(d => d.WalkInId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_application_walk_in1");

                entity.HasOne(d => d.Date)
                    .WithMany(p => p.Applications)
                    .HasForeignKey(d => new { d.DateId, d.DateWalkInId })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_application_date1");
            });

            modelBuilder.Entity<College>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.EducationalQualificationsId, e.EducationalQualificationsApplicantId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0, 0 });

                entity.ToTable("college");

                entity.HasIndex(e => new { e.EducationalQualificationsId, e.EducationalQualificationsApplicantId }, "fk_college_educational_qualifications1_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.EducationalQualificationsId).HasColumnName("educational_qualifications_id");

                entity.Property(e => e.EducationalQualificationsApplicantId).HasColumnName("educational_qualifications_applicant_id");

                entity.Property(e => e.Location)
                    .HasMaxLength(45)
                    .HasColumnName("location");

                entity.Property(e => e.Name)
                    .HasMaxLength(45)
                    .HasColumnName("name");

                entity.HasOne(d => d.EducationalQualifications)
                    .WithMany(p => p.Colleges)
                    .HasForeignKey(d => new { d.EducationalQualificationsId, d.EducationalQualificationsApplicantId })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_college_educational_qualifications1");
            });

            modelBuilder.Entity<Date>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.WalkInId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                entity.ToTable("date");

                entity.HasIndex(e => e.WalkInId, "fk_date_walk_in1_idx");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.WalkInId).HasColumnName("walk_in_id");

                entity.Property(e => e.Date1).HasColumnName("date");

                entity.HasOne(d => d.WalkIn)
                    .WithMany(p => p.Dates)
                    .HasForeignKey(d => d.WalkInId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_date_walk_in1");
            });

            modelBuilder.Entity<EducationalQualification>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.ApplicantId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                entity.ToTable("educational_qualification");

                entity.HasIndex(e => e.ApplicantId, "fk_educational_qualifications_applicant1_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ApplicantId).HasColumnName("applicant_id");

                entity.Property(e => e.AggregatePercentage).HasColumnName("aggregate_percentage");

                entity.Property(e => e.CollegeLocation)
                    .HasMaxLength(45)
                    .HasColumnName("college_location");

                entity.Property(e => e.CollegeName)
                    .HasMaxLength(45)
                    .HasColumnName("college_name");

                entity.Property(e => e.YearOfPassing).HasColumnName("year_of_passing");

                entity.HasOne(d => d.Applicant)
                    .WithMany(p => p.EducationalQualifications)
                    .HasForeignKey(d => d.ApplicantId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_educational_qualifications_applicant1");
            });

            modelBuilder.Entity<ExpertiseTechnology>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.ProfessionalQualificationsId, e.ProfessionalQualificationsApplicantId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0, 0 });

                entity.ToTable("expertise_technology");

                entity.HasIndex(e => new { e.ProfessionalQualificationsId, e.ProfessionalQualificationsApplicantId }, "fk_expertise_technologies_professional_qualifications1_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ProfessionalQualificationsId).HasColumnName("professional_qualifications_id");

                entity.Property(e => e.ProfessionalQualificationsApplicantId).HasColumnName("professional_qualifications_applicant_id");

                entity.HasOne(d => d.ProfessionalQualifications)
                    .WithMany(p => p.ExpertiseTechnologiesNavigation)
                    .HasForeignKey(d => new { d.ProfessionalQualificationsId, d.ProfessionalQualificationsApplicantId })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_expertise_technologies_professional_qualifications1");
            });

            modelBuilder.Entity<FamiliarTechnology>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.ProfessionalQualificationsId, e.ProfessionalQualificationsApplicantId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0, 0 });

                entity.ToTable("familiar_technology");

                entity.HasIndex(e => new { e.ProfessionalQualificationsId, e.ProfessionalQualificationsApplicantId }, "fk_expertise_technologies_professional_qualifications1_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ProfessionalQualificationsId).HasColumnName("professional_qualifications_id");

                entity.Property(e => e.ProfessionalQualificationsApplicantId).HasColumnName("professional_qualifications_applicant_id");

                entity.HasOne(d => d.ProfessionalQualifications)
                    .WithMany(p => p.FamiliarTechnologies)
                    .HasForeignKey(d => new { d.ProfessionalQualificationsId, d.ProfessionalQualificationsApplicantId })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_expertise_technologies_professional_qualifications10");
            });

            modelBuilder.Entity<JobDetail>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.JobRolesId, e.SpecialOpportunitiesId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0, 0 });

                entity.ToTable("job_details");

                entity.HasIndex(e => e.JobRolesId, "fk_details_job_roles1_idx");

                entity.HasIndex(e => e.SpecialOpportunitiesId, "fk_details_special_opportunities1_idx");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.JobRolesId).HasColumnName("job_roles_id");

                entity.Property(e => e.SpecialOpportunitiesId).HasColumnName("special_opportunities_id");

                entity.Property(e => e.DateToFrom).HasColumnName("date_to_from");

                entity.Property(e => e.ExpiryDate).HasColumnName("expiry_date");

                entity.Property(e => e.Location)
                    .HasMaxLength(45)
                    .HasColumnName("location");

                entity.HasOne(d => d.JobRoles)
                    .WithMany(p => p.JobDetails)
                    .HasForeignKey(d => d.JobRolesId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_details_job_roles1");
            });

            modelBuilder.Entity<JobRole>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.WalkInId, e.ApplicationId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0, 0 });

                entity.ToTable("job_role");

                entity.HasIndex(e => e.ApplicationId, "fk_job_role_application1_idx");

                entity.HasIndex(e => e.WalkInId, "fk_job_roles_walk_in1_idx");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.WalkInId).HasColumnName("walk_in_id");

                entity.Property(e => e.ApplicationId).HasColumnName("application_id");

                entity.Property(e => e.GrossCompensation).HasColumnName("gross_compensation");

                entity.Property(e => e.Requirements)
                    .HasColumnType("text")
                    .HasColumnName("requirements");

                entity.Property(e => e.RoleDescription)
                    .HasColumnType("text")
                    .HasColumnName("role_description");

                entity.Property(e => e.Title)
                    .HasMaxLength(45)
                    .HasColumnName("title");

                entity.HasOne(d => d.WalkIn)
                    .WithMany(p => p.JobRoles)
                    .HasForeignKey(d => d.WalkInId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_job_roles_walk_in1");
            });

            modelBuilder.Entity<JobRole1>(entity =>
            {
                entity.ToTable("job_roles");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.GrossCompensation).HasColumnName("gross_compensation");

                entity.Property(e => e.Requirements)
                    .HasColumnType("text")
                    .HasColumnName("requirements");

                entity.Property(e => e.RoleDescription)
                    .HasColumnType("text")
                    .HasColumnName("role_description");
            });

            modelBuilder.Entity<Preference>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.JobRolesId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                entity.ToTable("preference");

                entity.HasIndex(e => e.JobRolesId, "fk_preference_job_roles1_idx");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.JobRolesId).HasColumnName("job_roles_id");

                entity.HasOne(d => d.JobRoles)
                    .WithMany(p => p.Preferences)
                    .HasForeignKey(d => d.JobRolesId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_preference_job_roles1");
            });

            modelBuilder.Entity<PrerequisitesApplicationProcess>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.WalkInId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                entity.ToTable("prerequisites_application_process");

                entity.HasIndex(e => e.WalkInId, "fk_prerequisites_application_process_walk_in1_idx");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.WalkInId).HasColumnName("walk_in_id");

                entity.Property(e => e.GeneralInstructions)
                    .HasColumnType("text")
                    .HasColumnName("general_instructions");

                entity.Property(e => e.MinimumSystemRequirements)
                    .HasColumnType("text")
                    .HasColumnName("minimum_system_requirements");

                entity.Property(e => e.Process)
                    .HasColumnType("text")
                    .HasColumnName("process");

                entity.HasOne(d => d.WalkIn)
                    .WithMany(p => p.PrerequisitesApplicationProcesses)
                    .HasForeignKey(d => d.WalkInId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_prerequisites_application_process_walk_in1");
            });

            modelBuilder.Entity<ProfessionalQualification>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.ApplicantId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                entity.ToTable("professional_qualification");

                entity.HasIndex(e => e.ApplicantId, "fk_professional_qualifications_applicant1_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ApplicantId).HasColumnName("applicant_id");

                entity.Property(e => e.CurrentCtc).HasColumnName("current_ctc");

                entity.Property(e => e.ExpectedCtc).HasColumnName("expected_ctc");

                entity.Property(e => e.ExpertiseTechnologies)
                    .HasMaxLength(45)
                    .HasColumnName("expertise_technologies");

                entity.Property(e => e.LengthOfNoticePeriod).HasColumnName("length_of_notice_period");

                entity.Property(e => e.NoticePeriod).HasColumnName("notice_period");

                entity.Property(e => e.PastAppearances).HasColumnName("past_appearances");

                entity.Property(e => e.ProfessionalQualificationscol)
                    .HasMaxLength(45)
                    .HasColumnName("professional_qualificationscol");

                entity.Property(e => e.Role)
                    .HasMaxLength(45)
                    .HasColumnName("role");

                entity.Property(e => e.YearsOfExperience).HasColumnName("years_of_experience");

                entity.HasOne(d => d.Applicant)
                    .WithMany(p => p.ProfessionalQualifications)
                    .HasForeignKey(d => d.ApplicantId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_professional_qualifications_applicant1");
            });

            modelBuilder.Entity<Qualification>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.EducationalQualificationId, e.EducationalQualificationApplicantId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0, 0 });

                entity.ToTable("qualification");

                entity.HasIndex(e => new { e.EducationalQualificationId, e.EducationalQualificationApplicantId }, "fk_qualification_educational_qualification1_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.EducationalQualificationId).HasColumnName("educational_qualification_id");

                entity.Property(e => e.EducationalQualificationApplicantId).HasColumnName("educational_qualification_applicant_id");

                entity.Property(e => e.Name)
                    .HasMaxLength(45)
                    .HasColumnName("name");

                entity.HasOne(d => d.EducationalQualification)
                    .WithMany(p => p.Qualifications)
                    .HasForeignKey(d => new { d.EducationalQualificationId, d.EducationalQualificationApplicantId })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_qualification_educational_qualification1");
            });

            modelBuilder.Entity<SpecialOpportunity>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.WalkInId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                entity.ToTable("special_opportunities");

                entity.HasIndex(e => e.WalkInId, "fk_special_opportunities_walk_in1_idx");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.WalkInId).HasColumnName("walk_in_id");

                entity.Property(e => e.Title)
                    .HasMaxLength(45)
                    .HasColumnName("title");

                entity.HasOne(d => d.WalkIn)
                    .WithMany(p => p.SpecialOpportunities)
                    .HasForeignKey(d => d.WalkInId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_special_opportunities_walk_in1");
            });

            modelBuilder.Entity<Stream>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.EducationalQualificationId, e.EducationalQualificationApplicantId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0, 0 });

                entity.ToTable("stream");

                entity.HasIndex(e => new { e.EducationalQualificationId, e.EducationalQualificationApplicantId }, "fk_stream_educational_qualification1_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.EducationalQualificationId).HasColumnName("educational_qualification_id");

                entity.Property(e => e.EducationalQualificationApplicantId).HasColumnName("educational_qualification_applicant_id");

                entity.Property(e => e.Name)
                    .HasMaxLength(45)
                    .HasColumnName("name");

                entity.HasOne(d => d.EducationalQualification)
                    .WithMany(p => p.Streams)
                    .HasForeignKey(d => new { d.EducationalQualificationId, d.EducationalQualificationApplicantId })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_stream_educational_qualification1");
            });

            modelBuilder.Entity<Technology>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.ExpertiseTechnologiesId, e.FamiliarTechnologiesId, e.FamiliarTechnologiesProfessionalQualificationsId, e.FamiliarTechnologiesProfessionalQualificationsApplicantId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0, 0, 0, 0 });

                entity.ToTable("technology");

                entity.HasIndex(e => e.ExpertiseTechnologiesId, "fk_technologies_expertise_technologies1_idx");

                entity.HasIndex(e => new { e.FamiliarTechnologiesId, e.FamiliarTechnologiesProfessionalQualificationsId, e.FamiliarTechnologiesProfessionalQualificationsApplicantId }, "fk_technologies_familiar_technologies1_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ExpertiseTechnologiesId).HasColumnName("expertise_technologies_id");

                entity.Property(e => e.FamiliarTechnologiesId).HasColumnName("familiar_technologies_id");

                entity.Property(e => e.FamiliarTechnologiesProfessionalQualificationsId).HasColumnName("familiar_technologies_professional_qualifications_id");

                entity.Property(e => e.FamiliarTechnologiesProfessionalQualificationsApplicantId).HasColumnName("familiar_technologies_professional_qualifications_applicant_id");

                entity.Property(e => e.Name)
                    .HasMaxLength(45)
                    .HasColumnName("name");

                entity.HasOne(d => d.FamiliarTechnologies)
                    .WithMany(p => p.Technologies)
                    .HasForeignKey(d => new { d.FamiliarTechnologiesId, d.FamiliarTechnologiesProfessionalQualificationsId, d.FamiliarTechnologiesProfessionalQualificationsApplicantId })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_technologies_familiar_technologies1");
            });

            modelBuilder.Entity<TimeSlot>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.WalkInId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                entity.ToTable("time_slot");

                entity.HasIndex(e => e.WalkInId, "fk_time_slot_walk_in1_idx");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.WalkInId).HasColumnName("walk_in_id");

                entity.Property(e => e.EndTime)
                    .HasColumnType("time")
                    .HasColumnName("end_time");

                entity.Property(e => e.StartTime)
                    .HasColumnType("time")
                    .HasColumnName("start_time");

                entity.HasOne(d => d.WalkIn)
                    .WithMany(p => p.TimeSlots)
                    .HasForeignKey(d => d.WalkInId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_time_slot_walk_in1");
            });

            modelBuilder.Entity<TimeSlotsPreference>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.TimeSlotId, e.PreferenceId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0, 0 });

                entity.ToTable("time_slots_preferences");

                entity.HasIndex(e => e.PreferenceId, "fk_time_slots_preferences_preference1_idx");

                entity.HasIndex(e => e.TimeSlotId, "fk_time_slots_preferences_time_slot1_idx");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.TimeSlotId).HasColumnName("time_slot_id");

                entity.Property(e => e.PreferenceId).HasColumnName("preference_id");
            });

            modelBuilder.Entity<Type>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.ProfessionalQualificationsId, e.ProfessionalQualificationsApplicantId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0, 0 });

                entity.ToTable("type");

                entity.HasIndex(e => new { e.ProfessionalQualificationsId, e.ProfessionalQualificationsApplicantId }, "fk_type_professional_qualifications1_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ProfessionalQualificationsId).HasColumnName("professional_qualifications_id");

                entity.Property(e => e.ProfessionalQualificationsApplicantId).HasColumnName("professional_qualifications_applicant_id");

                entity.Property(e => e.Type1)
                    .HasMaxLength(45)
                    .HasColumnName("type");

                entity.HasOne(d => d.ProfessionalQualifications)
                    .WithMany(p => p.Types)
                    .HasForeignKey(d => new { d.ProfessionalQualificationsId, d.ProfessionalQualificationsApplicantId })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_type_professional_qualifications1");
            });

            modelBuilder.Entity<WalkIn>(entity =>
            {
                entity.ToTable("walk_in");

                entity.HasIndex(e => e.Title, "title_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DateCreated).HasColumnName("date_created");

                entity.Property(e => e.ExpiryDate).HasColumnName("expiry_date");

                entity.Property(e => e.GuId)
                    .HasMaxLength(45)
                    .HasColumnName("guId");

                entity.Property(e => e.Location)
                    .HasMaxLength(45)
                    .HasColumnName("location");

                entity.Property(e => e.Title)
                    .HasMaxLength(45)
                    .HasColumnName("title");

                entity.Property(e => e.UploadResume)
                    .HasColumnType("tinyblob")
                    .HasColumnName("upload_resume");

                entity.Property(e => e.UserId).HasColumnName("user_id");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
