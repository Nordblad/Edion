using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Vue2Spa.Data;
using Vue2Spa.Models;

namespace Vue2Spa.Controllers
{
    [Route("api/[controller]")]

    public class SampleDataController : Controller
    {
        private readonly EdionContext _context;
        public SampleDataController(EdionContext context) {
            _context = context;
        }
        [HttpPost]
        public string Post() {
            var page = new Page() {
                Name = "TestSeedad",
                Created = DateTime.Now
            };
            _context.Pages.Add(page);
            var row = new Row() {
                Page = page,
                SortOrder = 0,
                Type = "simple-row"
            };
            _context.Rows.Add(row);
            _context.SaveChanges();
            return "Det ska ha sparats";
        // public int RowId { get; set; }
        // public Page Page { get; set; }
        // public int SortOrder { get; set; }
        // public string Type { get; set; }
        // public List<Field> Fields { get; set; }
        }
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
