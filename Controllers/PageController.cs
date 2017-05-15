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
        [HttpGet("[action]")]
        public IEnumerable<Page> Get()
        {
            return _context.Pages.ToList();
            // return new List<Page>() {
            //     new Page() {
            //         PageId = 1,
            //         Name = "Heeej",
            //         Rows = null
            //     }
            // };
        }
    }
}
