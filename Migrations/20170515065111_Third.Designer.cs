using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Vue2Spa.Data;
using Vue2Spa.Enums;

namespace Vue2Spa.Migrations
{
    [DbContext(typeof(EdionContext))]
    [Migration("20170515065111_Third")]
    partial class Third
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2");

            modelBuilder.Entity("Vue2Spa.Models.Field", b =>
                {
                    b.Property<int>("FieldId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Language");

                    b.Property<string>("Name");

                    b.Property<int?>("RowId");

                    b.Property<string>("Value");

                    b.HasKey("FieldId");

                    b.HasIndex("RowId");

                    b.ToTable("Fields");
                });

            modelBuilder.Entity("Vue2Spa.Models.Page", b =>
                {
                    b.Property<int>("PageId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Created");

                    b.Property<DateTime?>("Modified");

                    b.Property<string>("Name");

                    b.HasKey("PageId");

                    b.ToTable("Pages");
                });

            modelBuilder.Entity("Vue2Spa.Models.Row", b =>
                {
                    b.Property<int>("RowId")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("PageId");

                    b.Property<int>("SortOrder");

                    b.Property<string>("Type");

                    b.HasKey("RowId");

                    b.HasIndex("PageId");

                    b.ToTable("Rows");
                });

            modelBuilder.Entity("Vue2Spa.Models.Field", b =>
                {
                    b.HasOne("Vue2Spa.Models.Row", "Row")
                        .WithMany("Fields")
                        .HasForeignKey("RowId");
                });

            modelBuilder.Entity("Vue2Spa.Models.Row", b =>
                {
                    b.HasOne("Vue2Spa.Models.Page", "Page")
                        .WithMany("Rows")
                        .HasForeignKey("PageId");
                });
        }
    }
}
