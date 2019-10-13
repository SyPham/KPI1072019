using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KPI.Web.Controllers
{
  public class LoginController : Controller
  {
    // GET: Login
    public ActionResult Index()
    {
      return View();
    }

    public JsonResult Login(string username, string password)
    {
      if(username == "henry" && password =="1")
        return Json(new { token ="henry1996"},JsonRequestBehavior.AllowGet);
      return Json(new { token = "" }, JsonRequestBehavior.AllowGet);
    }
  }
}
