using Vue2Spa.Enums;

namespace Vue2Spa.Models
{
    public class Field
    {
        public int FieldId { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public Language Language { get; set; }
        public Row Row { get; set; }
    }
}