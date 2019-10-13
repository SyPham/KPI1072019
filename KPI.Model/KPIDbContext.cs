using KPI.Model.EF;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPI.Model
{
    public class KPIDbContext : DbContext
    {

        public KPIDbContext() : base("name=KPIDbContext")
        {
            this.Configuration.LazyLoadingEnabled = false;

        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

        }
        public DbSet<User> Users { get; set; }
    }
}
