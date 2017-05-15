using System.Collections.Generic;

namespace Vue2Spa.Models
{
    public class Row
    {
        public int RowId { get; set; }
        public Page Page { get; set; }
        public int SortOrder { get; set; }
        public string Type { get; set; }
        public List<Field> Fields { get; set; }
    }
}