using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
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
        public IEnumerable<Row> Get(int id)
        {
            return _context.Rows.Where(x => x.Page.PageId == id).ToList();
        }

        [HttpPost]
        public object Post([FromBody]NewRowBindingModel model)
        {
            var page = new Page
            {
                Name = model.Name,
                Created = DateTime.Now
            };
            _context.Pages.Add(page);
            _context.SaveChanges();
            return new
            {
                Success = true,
                Id = page.PageId
            };
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
        public Language Language { get; set; }
    }

}
