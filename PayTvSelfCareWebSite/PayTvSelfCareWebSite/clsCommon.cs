using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Net.Http;
using System.Json;
using System.Web.Script.Serialization;
using System.Data;

namespace WebApplication1
{
    public class clsCommon
    {
        public string CallAPI(string APICaller)
        {
            string jsonResponse = string.Empty;
            try
            {
                WebRequest req2 = WebRequest.Create(@"" + ConfigurationManager.AppSettings["CallingUrl"].ToString() + APICaller);
                req2.Method = "GET";
                req2.ContentType = @"application/json; charset=utf-8";
                string username = ConfigurationManager.AppSettings["username"].ToString();// "relyMSOApp";
                string password = ConfigurationManager.AppSettings["password"].ToString(); //"rely@3134";

                string svcCredentials = Convert.ToBase64String(ASCIIEncoding.ASCII.GetBytes(username + ":" + password));

                req2.Headers.Add("Authorization", "Basic " + svcCredentials);
                HttpWebResponse response = (HttpWebResponse)req2.GetResponse();

                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    jsonResponse = sr.ReadToEnd();
                }

            }
            catch (Exception e)
            {
                jsonResponse = e.Message.ToString();
            }

            return jsonResponse;
        }

        public string CallSMSAPI(string APICaller)
        {
            string jsonResponse = string.Empty;
            try
            {
                WebRequest req2 = WebRequest.Create(@"" + ConfigurationManager.AppSettings["callingurlsms"].ToString() + APICaller);
                req2.Method = "GET";
                req2.ContentType = @"application/json; charset=utf-8";
                string username = ConfigurationManager.AppSettings["username"].ToString();// "relyMSOApp";
                string password = ConfigurationManager.AppSettings["password"].ToString(); //"rely@3134";

                string svcCredentials = Convert.ToBase64String(ASCIIEncoding.ASCII.GetBytes(username + ":" + password));

                req2.Headers.Add("Authorization", "Basic " + svcCredentials);
                HttpWebResponse response = (HttpWebResponse)req2.GetResponse();

                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    jsonResponse = sr.ReadToEnd();
                }

            }
            catch (Exception e)
            {
                jsonResponse = e.Message.ToString();
            }

            return jsonResponse;
        }


        public  bool IsNumeric(string val)
        {
            Double result;
            return Double.TryParse(val, out result);
        }



        public string CallPostAPINew(string Parmeters)
        {
           
            //var data = Encoding.ASCII.GetBytes(Parmeters);
            try
            {
                using (WebClient wc = new WebClient())
                {
                    //.Method = "POST";
                    string username = ConfigurationManager.AppSettings["username"].ToString();// "relyMSOApp";
                    string password = ConfigurationManager.AppSettings["password"].ToString(); //"rely@3134";
                    string svcCredentials = Convert.ToBase64String(ASCIIEncoding.ASCII.GetBytes(username + ":" + password));
                    wc.Headers.Add("Authorization", "Basic " + svcCredentials);
                    wc.Headers[HttpRequestHeader.ContentType] = "application/json";
                    //wc.Headers[HttpRequestHeader.ContentLength] = data.Length.ToString();
                    string HtmlResult = wc.UploadString(ConfigurationManager.AppSettings["CallingUrl"].ToString() + "CreateTicket","POST", Parmeters);
                }
            }
            catch (Exception ex)
            { 
            }
            return "";
        }


        public string CallPostAPI(string APICaller)
        {
            string jsonResponse = string.Empty;
            try
            {

                var request = (HttpWebRequest)WebRequest.Create(@"" + ConfigurationManager.AppSettings["CallingUrl"].ToString() + "CreateTicket");

                var postData = "thing1=hello";
                postData += "&thing2=world";
                var data = Encoding.ASCII.GetBytes(APICaller);

                request.Method = "POST";
                request.ContentType = "application/json";
                request.ContentLength = data.Length;
                string username = ConfigurationManager.AppSettings["username"].ToString();// "relyMSOApp";
                string password = ConfigurationManager.AppSettings["password"].ToString(); //"rely@3134";

                string svcCredentials = Convert.ToBase64String(ASCIIEncoding.ASCII.GetBytes(username + ":" + password));


                request.Headers.Add("Authorization", "Basic " + svcCredentials);

                using (var stream = request.GetRequestStream())
                {
                    stream.Write(data, 0, data.Length);
                }

                var response = (HttpWebResponse)request.GetResponse();

                var responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();



                //WebRequest request = WebRequest.Create(@"" + ConfigurationManager.AppSettings["CallingUrl"].ToString() + "CreateTicket");
                //// Set the Method property of the request to POST.
                //request.Method = "POST";
                //// Create POST data and convert it to a byte array.

                //byte[] byteArray = Encoding.UTF8.GetBytes(APICaller);
                //// Set the ContentType property of the WebRequest.
                //request.ContentType = "application/x-www-form-urlencoded";
                //// Set the ContentLength property of the WebRequest.
                //request.ContentLength = byteArray.Length;
                //string username = ConfigurationManager.AppSettings["username"].ToString();// "relyMSOApp";
                //string password = ConfigurationManager.AppSettings["password"].ToString(); //"rely@3134";

                //string svcCredentials = Convert.ToBase64String(ASCIIEncoding.ASCII.GetBytes(username + ":" + password));


                //request.Headers.Add("Authorization", "Basic " + svcCredentials);
                //// Get the request stream.
                //Stream dataStream = request.GetRequestStream();
                //// Write the data to the request stream.
                //dataStream.Write(byteArray, 0, byteArray.Length);
                //// Close the Stream object.
                //dataStream.Close();
                //// Get the response.
                //WebResponse response = request.GetResponse();
                //// Display the status.
                //Console.WriteLine(((HttpWebResponse)response).StatusDescription);
                //// Get the stream containing content returned by the server.
                //dataStream = response.GetResponseStream();
                //// Open the stream using a StreamReader for easy access.
                //StreamReader reader = new StreamReader(dataStream);
                //// Read the content.
                //string responseFromServer = reader.ReadToEnd();
                //// Display the content.
                //Console.WriteLine(responseFromServer);
                //// Clean up the streams.
                //reader.Close();
                //dataStream.Close();
                //response.Close();

                //WebRequest req2 = WebRequest.Create(@"" + ConfigurationManager.AppSettings["CallingUrl"].ToString() + APICaller);

                //req2.Method = "POST";
                //req2.ContentType = @"application/json; charset=utf-8";

                //byte[] byteArray = Encoding.UTF8.GetBytes(APICaller);
                //// Set the ContentType property of the WebRequest.
             
                //// Set the ContentLength property of the WebRequest.
                //req2.ContentLength = byteArray.Length;
                //string username = ConfigurationManager.AppSettings["username"].ToString();// "relyMSOApp";
                //string password = ConfigurationManager.AppSettings["password"].ToString(); //"rely@3134";

                //string svcCredentials = Convert.ToBase64String(ASCIIEncoding.ASCII.GetBytes(username + ":" + password));


                //req2.Headers.Add("Authorization", "Basic " + svcCredentials);
                //HttpWebResponse response = (HttpWebResponse)req2.GetResponse();

                //using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                //{
                //    jsonResponse = sr.ReadToEnd();
                //}

            }
            catch (Exception e)
            {
                jsonResponse = e.Message.ToString();
            }


            return jsonResponse;
        }


        public string JVal(string key, JsonValue obj)
        {
            ///return obj[key].ToString().Replace("\\", "").Replace("\"", "");
            return obj[key].ToString();
        }
        public string JValReplace(string key, JsonValue obj)
        {
            return obj[key].ToString().Replace("\\", "").Replace("\"", "");
            
        }
        public  string GetJson(DataTable table)
        {
            JavaScriptSerializer jss = new JavaScriptSerializer();
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            Dictionary<string, object> row;
            foreach (DataRow dr in table.Rows)
            {
                row = new Dictionary<string, object>();
                foreach (DataColumn col in table.Columns)
                {
                    row.Add(col.ColumnName, dr[col]);
                }
                rows.Add(row);
            }
            return jss.Serialize(rows);
        }

        public  string GetDtToString(DataTable table)
        {
            JavaScriptSerializer jss = new JavaScriptSerializer();
            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            string DTtoString = "";
            foreach (DataRow dr in table.Rows)
            {
                //row = new Dictionary<string, object>();
                foreach (DataColumn col in table.Columns)
                {
                    if (DTtoString == "")
                        DTtoString = col.ColumnName + ".@." + dr[col];
                    else
                        DTtoString = DTtoString + "._." + col.ColumnName + ".@." + dr[col];

                }

            }
            return DTtoString;
        }

    }
}