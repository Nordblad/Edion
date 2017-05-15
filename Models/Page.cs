using System;
using System.Collections.Generic;

namespace Vue2Spa.Models
{
    public class Page
    {
        public int PageId { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; }
        public DateTime? Modified { get; set; }
        public List<Row> Rows { get; set; }
    }
}