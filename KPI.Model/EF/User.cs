using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPI.Model.EF
{
  public class User
    {
        public int ID { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string FullName { get; set; }
        public string Password { get; set; }
        public int Permission { get; set; }
        public string Image { get; set; }
    }
}
