using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vue2Spa.Data;
using Vue2Spa.Enums;
using Vue2Spa.Models;

namespace Vue2Spa.Controllers
{
    [Route("api/[controller]")]
    public class RowController : Controller
    {
        private readonly EdionContext _context;
        public RowController(EdionContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Get(int id, Language lang)
        {
            // IEnumerable<RowViewModel>
            //return $"Id: {id}, lang: {lang}";
            var page = _context.Pages.Find(id);
            if (page == null)
            {
                return NotFound();
            }
            var rows = _context.Rows.Where(x => x.Page.PageId == id).Include(x => x.Fields).ToList();
            return Ok(rows.Select(x => new RowViewModel(x, lang)).ToList());
        }

        [HttpPost]
        public RowViewModel Post([FromBody]NewRowBindingModel model)
        {
            var page = _context.Pages.Find(model.PageId);
            var row = new Row
            {
                Page = page,
                Type = model.Type
            };
            _context.Rows.Add(row);

            foreach (var field in model.Fields)
            {
                // Loopa istället alltid igenom språk, men antingen allLanguages eller Language.None
                if (field.Translate == true)
                {
                    foreach (var lang in Enum.GetValues(typeof(Language)).Cast<Language>())
                    {
                        if (lang != Language.None)
                        {
                            _context.Fields.Add(new Field()
                            {
                                Name = field.Name,
                                Value = field.Value,
                                Row = row,
                                Language = lang
                            });
                        }
                    }
                }
                else
                {
                    _context.Fields.Add(new Field()
                    {
                        Name = field.Name,
                        Value = field.Value,
                        Row = row,
                        Language = Language.None
                    });

                }
            }

            _context.SaveChanges();
            return new RowViewModel(row, Language.Swedish);
            // return new
            // {
            //     Success = true,
            //     Row = row
            // };
        }
    }

    public class NewRowBindingModel
    {
        public int PageId { get; set; }
        public string Type { get; set; }
        public List<FieldBindingModel> Fields { get; set; }
    }
    public class FieldBindingModel
    {
        public string Name { get; set; }
        public string Value { get; set; }
        public bool? Translate { get; set; } // Only used when creating new
        public Language? Language { get; set; }
    }

    public class RowViewModel
    {
        public int Id { get; set; }
        public String Type { get; set; }
        public Dictionary<string, string> Fields { get; set; }
        public RowViewModel() { }
        public RowViewModel(Row row, Language lang)
        {
            Id = row.RowId;
            Type = row.Type;
            Fields = row.Fields.Where(x => x.Language == Language.None || x.Language == lang).ToDictionary(x => FirstLetterToLowercase(x.Name), x => x.Value);
        }

        private string FirstLetterToLowercase(string input)
        {
            if (input.Length == 0) return "";
            return Char.ToLowerInvariant(input[0]) + input.Substring(1);
        }
    }
}
