using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using Vue2Spa.Models;

namespace Vue2Spa.Data
{
    public class EdionContext : DbContext
    {
        public EdionContext(DbContextOptions<EdionContext> options) : base(options)
        {
        }
        
        public DbSet<Page> Pages { get; set; }
        public DbSet<Row> Rows { get; set; }
        public DbSet<Field> Fields { get; set; }

        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
        //     optionsBuilder.UseSqlite("Data Source=edion2.db");
        // }
    }

    // public class Page {
    //     public int PageId { get; set; }
    //     public string Name { get; set; }
    //     public List<Row> Rows { get; set; }
    // }

    // public class Row {
    //     public int RowId { get; set; }
    //     public Page Page { get; set; }
    //     public string Type { get; set; }
    //     public List<Field> Fields { get; set; }
    // }
    // public class Field {
    //     public int FieldId { get; set; }
    //     public string Name { get; set; }
    //     public string Value { get; set; }
    //     public Language Language { get; set; }
    //     public Row Row { get; set; }
    // }

    // public enum Language {
    //     Swedish = 1,
    //     English = 2
    // }
}