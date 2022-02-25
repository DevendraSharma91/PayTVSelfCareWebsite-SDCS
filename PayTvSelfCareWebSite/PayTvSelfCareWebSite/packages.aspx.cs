using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Configuration;
using System.Text;


namespace WebApplication1
{
    public partial class packages : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string Portalurl = System.Configuration.ConfigurationManager.AppSettings["Portalurl"].ToString();
            ScriptManager.RegisterStartupScript(this, this.GetType(), "getPortalurl", "javascript:getPortalurl('" + Portalurl + "');", true);
        }

        //Get State
        [System.Web.Services.WebMethod]
        public static string Statelist()
        {
            clsCommon objCommon = new clsCommon();
            string OPID = ConfigurationManager.AppSettings["OPID"].ToString();
            return objCommon.CallAPI("StateList?PageSize=-1&opID=" + OPID + "");
        }

        //Get Citylist
        [System.Web.Services.WebMethod]
        public static string GetCityList(int StateId)
        {
            clsCommon objCommon = new clsCommon();
            string OPID = ConfigurationManager.AppSettings["OPID"].ToString();
            return objCommon.CallAPI("CityList?PageSize=-1&StateID=" + StateId + "&opID=" + OPID + "");
        }

        //Get SubOperator
        [System.Web.Services.WebMethod]
        public static string getSubOperatorList(int CityId)
        {
            clsCommon objCommon = new clsCommon();
            string OPID = ConfigurationManager.AppSettings["OPID"].ToString();
            return objCommon.CallAPI("getSubOperatorList?opID=" + OPID + "&pageSize=-1&cityID=" + CityId + "");
        }

        //Get Pakeges
        [System.Web.Services.WebMethod]
        public static string GetPackges(int locationType, int locationid, int listtype, int GenerID)
        {
            clsCommon objCommon = new clsCommon();
            string OPID = ConfigurationManager.AppSettings["OPID"].ToString();
            return objCommon.CallAPI("ProductMaster?PageSize=-1&locationType=" + locationType + "&locationId=" + locationid + "&listType=" + listtype + "&opID=" + OPID + "&GenreID=" + GenerID + "");
        }
        [System.Web.Services.WebMethod]
        public static string GetChannelList(int Criteria)
        {
            string result = "";
            clsCommon objCommon = new clsCommon();
            string OPID = ConfigurationManager.AppSettings["OPID"].ToString();
            result = objCommon.CallAPI("PackageComposition?pageSize=-1&PackageID=" + Criteria + "&opID=" + OPID + "");
            //CityList?PageSize=-1&StateID=" + StateId + ""

            return result;
        }

    }
}