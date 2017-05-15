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
        public PageController(EdionContext context) {
            _context = context;
        }
        [HttpGet]
        public IEnumerable<Page> Get()
        {
            return _context.Pages.ToList();
        }

        [HttpPost]
        public object Post([FromBody]NewPageModel model) {
            var page = new Page {
                Name = model.Name,
                Created = DateTime.Now
            };
            _context.Pages.Add(page);
            _context.SaveChanges();
            return new {
                Success = true,
                Id = page.PageId
            };
        }
    }

    public class NewPageModel
    {
        public string Name { get; set; }
    }

}
