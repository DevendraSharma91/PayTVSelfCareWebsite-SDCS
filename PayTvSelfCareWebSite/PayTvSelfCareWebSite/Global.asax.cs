using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace PayTvSelfCareWebSite
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {

        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            string originalPath = HttpContext.Current.Request.Path;

            if (originalPath == "/Home")
            {
                Context.RewritePath(originalPath.Replace("/Home", "/default.aspx"));
            }
            if (originalPath == "/AboutUs")
            {
                Context.RewritePath(originalPath.Replace("/AboutUs", "/AboutUs.aspx"));
            }
            if (originalPath == "/Packages")
            {
                Context.RewritePath(originalPath.Replace("/Packages", "/packages.aspx"));
            }
            if (originalPath == "/MyDashboard")
            {
                Context.RewritePath(originalPath.Replace("/MyDashboard", "/Dashboard.aspx"));
            }
            if (originalPath == "/MyProfile")
            {
                Context.RewritePath(originalPath.Replace("/MyProfile", "/MyProfile.aspx"));
            }
            if (originalPath == "/MyLedger")
            {
                Context.RewritePath(originalPath.Replace("/MyLedger", "/MyLedger.aspx"));
            }
            if (originalPath == "/MyConnection")
            {
                Context.RewritePath(originalPath.Replace("/MyConnection", "/MyConnections.aspx"));
            }
            if (originalPath == "/MyServiceRequests")
            {
                Context.RewritePath(originalPath.Replace("/MyServiceRequests", "/MyServiceRequests.aspx"));
            }

            if (originalPath == "/MyPaymentHistory")
            {
                Context.RewritePath(originalPath.Replace("/MyPaymentHistory", "/MyPaymentHistory.aspx"));
            }
            if (originalPath == "/Login")
            {
                Context.RewritePath(originalPath.Replace("/Login", "/Login.aspx"));
            }
            if (originalPath == "/AppLogin")
            {
                Context.RewritePath(originalPath.Replace("/AppLogin", "/AppLogin.aspx"));
            }
            if (originalPath == "/PrivacyPolicy")
            {
                Context.RewritePath(originalPath.Replace("/PrivacyPolicy", "/PrivacyPolicy.aspx"));
            }
            if (originalPath == "/STBScheme")
            {
                Context.RewritePath(originalPath.Replace("/STBScheme", "/STBScheme.aspx"));
            }
            if (originalPath == "/TraiComplaints")
            {
                Context.RewritePath(originalPath.Replace("/TraiComplaints", "/TraiComplaints.aspx"));
            }
            if (originalPath == "/Login")
            {
                Context.RewritePath(originalPath.Replace("/Login", "/login.aspx"));
            }
            if (originalPath == "/PurchaseDetails")
            {
                Context.RewritePath(originalPath.Replace("/PurchaseDetails", "/PurchaseDetails.aspx"));
            }
            if (originalPath == "/Disclaimor")
            {
                Context.RewritePath(originalPath.Replace("/Disclaimor", "/Disclaimor.aspx"));
            }


            if (originalPath == "/PayU")
            {
                Context.RewritePath(originalPath.Replace("/PayU", "/PayU.aspx"));
            }
            if (originalPath == "/Success")
            {
                Context.RewritePath(originalPath.Replace("/Success", "/SuccessPage.aspx"));
            }
            if (originalPath == "/Failed")
            {
                Context.RewritePath(originalPath.Replace("/Failed", "/CancelPage.aspx"));
            }
        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}