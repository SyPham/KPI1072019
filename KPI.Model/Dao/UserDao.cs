using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPI.Model.Dao
{
   public class UserDao
    {
        KPIDbContext _dbContext = null;
        public UserDao()
        {
            this._dbContext = new KPIDbContext();
        }

    }
}
