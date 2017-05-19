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
        //[HttpGet]
        // public IActionResult Get(int id, Language lang)
        // {
        //     // IEnumerable<RowViewModel>
        //     //return $"Id: {id}, lang: {lang}";
        //     var page = _context.Pages.Find(id);
        //     if (page == null)
        //     {
        //         return NotFound();
        //     }
        //     var rows = _context.Rows.Where(x => x.Page.PageId == id).Include(x => x.Fields).ToList();
        //     return Ok(rows.Select(x => new RowViewModel(x, lang)).ToList());
        // }
        [HttpGet] // NEW!
        public IActionResult Get(int pageId)
        {
            // IEnumerable<RowViewModel>
            //return $"Id: {id}, lang: {lang}";
            var page = _context.Pages.Find(pageId);
            if (page == null)
            {
                return NotFound();
            }
            var rows = _context.Rows.Where(x => x.Page == page).Include(x => x.Fields);
            var m = rows.ToDictionary(x => x.RowId, x => new RowViewModel(x));
            return Ok(m);
        }

        // [HttpPost]
        // public RowViewModel Post([FromBody]NewRowBindingModel model)
        // {
        //     var page = _context.Pages.Find(model.PageId);
        //     var row = new Row
        //     {
        //         Page = page,
        //         Type = model.Type
        //     };
        //     _context.Rows.Add(row);

        //     foreach (var field in model.Fields)
        //     {
        //         // Loopa istället alltid igenom språk, men antingen allLanguages eller Language.None
        //         if (field.Translate == true)
        //         {
        //             foreach (var lang in Enum.GetValues(typeof(Language)).Cast<Language>())
        //             {
        //                 if (lang != Language.None)
        //                 {
        //                     _context.Fields.Add(new Field()
        //                     {
        //                         Name = field.Name,
        //                         Value = field.Value,
        //                         Row = row,
        //                         Language = lang
        //                     });
        //                 }
        //             }
        //         }
        //         else
        //         {
        //             _context.Fields.Add(new Field()
        //             {
        //                 Name = field.Name,
        //                 Value = field.Value,
        //                 Row = row,
        //                 Language = Language.None
        //             });

        //         }
        //     }

        //     _context.SaveChanges();
        //     return new RowViewModel(row, Language.Swedish);
        //     // return new
        //     // {
        //     //     Success = true,
        //     //     Row = row
        //     // };
        // }

        [HttpPost]
        public IActionResult Post([FromBody]SaveChangesBindingModel changes)
        {
            foreach (var row in changes.ChangedRows)
            {
                if (row.Delete == true) {
                    var rowToDelete = _context.Rows.Find(row.RowId);

                    foreach(var f in changes.ChangedFields.Where(x => x.RowId == row.RowId).ToList()) {
                        changes.ChangedFields.Remove(f);
                    }
                    if (rowToDelete != null) {
                        _context.Fields.RemoveRange(_context.Fields.Where(x => x.Row == rowToDelete));
                        _context.Rows.Remove(rowToDelete);
                    }
                }
                else if (row.RowId < 0)
                {
                    // Its a newly added row
                    var temporaryId = row.RowId;

                    var newRow = new Row()
                    {
                        Page = _context.Pages.Find(row.PageId),
                        SortOrder = row.SortOrder,
                        Type = row.Type
                    };
                    _context.Rows.Add(newRow);
                    _context.SaveChanges();

                    foreach (var f in changes.ChangedFields.Where(x => x.RowId == temporaryId)) {
                        f.RowId = newRow.RowId;
                    }
                }
            }
            foreach (var field in changes.ChangedFields)
            {
                var f = _context.Fields.FirstOrDefault(x => x.Row.RowId == field.RowId && x.Name == field.Name && x.Language == field.LanguageId);
                if (f != null)
                {
                    // The field exists, just update it
                    f.Value = field.Value;
                }
                else
                {
                    f = new Field() {
                        Row = _context.Rows.Find(field.RowId),
                        Name = field.Name,
                        Language = field.LanguageId,
                        Value = field.Value
                    };
                    _context.Fields.Add(f);
                }
            }
            _context.SaveChanges();
            return Ok(changes);
        }
    }

    // public class NewRowBindingModel
    // {
    //     public int PageId { get; set; }
    //     public string Type { get; set; }
    //     public List<FieldBindingModel> Fields { get; set; }
    // }
    // public class FieldBindingModel
    // {
    //     public string Name { get; set; }
    //     public string Value { get; set; }
    //     public bool? Translate { get; set; } // Only used when creating new
    //     public Language? Language { get; set; }
    // }
    public class SaveChangesBindingModel
    {
        public List<RowBindingModel> ChangedRows { get; set; }
        public List<FieldBindingModel> ChangedFields { get; set; }
    }
    public class RowBindingModel
    {
        public int PageId { get; set; }
        public int RowId { get; set; }
        public bool? Delete { get; set; }
        public string Type { get; set; }
        public int SortOrder { get; set; }
    }
    public class FieldBindingModel
    {
        public int RowId { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        //public bool? Translate { get; set; } // Only used when creating new
        public Language LanguageId { get; set; }
    }

    public class RowViewModel
    {
        public int RowId { get; set; }
        public String Type { get; set; }
        public int SortOrder { get; set; }
        public Dictionary<string, Dictionary<int, string>> Fields { get; set; }
        public RowViewModel() { }
        public RowViewModel(Row row)
        {
            RowId = row.RowId;
            Type = row.Type;
            SortOrder = row.SortOrder;
            Fields = row.Fields.GroupBy(x => x.Name).ToDictionary(x => FirstLetterToLowercase(x.Key), x => x.ToDictionary(y => (int)y.Language, y => y.Value));
        }

        private string FirstLetterToLowercase(string input)
        {
            if (input.Length == 0) return "";
            return Char.ToLowerInvariant(input[0]) + input.Substring(1);
        }
    }
}
