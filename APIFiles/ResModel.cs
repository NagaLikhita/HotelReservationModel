using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Entity.Models
{
    public class ResModel
    {
        public int SNo { get; set; }
        public string Hotel { get; set; }
        public System.DateTime Arrival { get; set; }
        public  System.DateTime Departure { get; set; }
        public string Type { get; set; }
        public int Guests { get; set; }
        public decimal Price { get; set; }
    }
}