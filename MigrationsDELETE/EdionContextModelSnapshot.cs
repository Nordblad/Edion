using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Vue2Spa.Data;

namespace Vue2Spa.Migrations
{
    [DbContext(typeof(EdionContext))]
    partial class EdionContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2");

            modelBuilder.Entity("Vue2Spa.Data.Field", b =>
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

            modelBuilder.Entity("Vue2Spa.Data.Page", b =>
                {
                    b.Property<int>("PageId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("PageId");

                    b.ToTable("Pages");
                });

            modelBuilder.Entity("Vue2Spa.Data.Row", b =>
                {
                    b.Property<int>("RowId")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("PageId");

                    b.Property<string>("Type");

                    b.HasKey("RowId");

                    b.HasIndex("PageId");

                    b.ToTable("Rows");
                });

            modelBuilder.Entity("Vue2Spa.Data.Field", b =>
                {
                    b.HasOne("Vue2Spa.Data.Row", "Row")
                        .WithMany("Fields")
                        .HasForeignKey("RowId");
                });

            modelBuilder.Entity("Vue2Spa.Data.Row", b =>
                {
                    b.HasOne("Vue2Spa.Data.Page", "Page")
                        .WithMany("Rows")
                        .HasForeignKey("PageId");
                });
        }
    }
}
