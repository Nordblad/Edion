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
    public class PageController : Controller
    {
        private readonly EdionContext _context;
        public PageController(EdionContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IEnumerable<Page> Get()
        {
            return _context.Pages.ToList();
        }

        [HttpPost]
        public object Post([FromBody]NewPageModel model)
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

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var page = _context.Pages.FirstOrDefault(x => x.PageId == id);
            if (page != null)
            {
                var rows = _context.Rows.Where(x => x.Page == page).ToList();
                foreach (var r in rows) {
                    var fields = _context.Fields.Where(x => x.Row == r).ToList();
                    foreach (var f in fields) {
                        _context.Fields.Remove(f);
                    }
                    //_context.Fields.RemoveRange(r.Fields);
                    _context.Rows.Remove(r);
                }
                _context.Pages.Remove(page);
                _context.SaveChanges();
                return Ok(_context.Pages.ToList());
            }
            return NotFound(new { message = "Not found" });
        }
    }

    public class NewPageModel
    {
        public string Name { get; set; }
    }

}
