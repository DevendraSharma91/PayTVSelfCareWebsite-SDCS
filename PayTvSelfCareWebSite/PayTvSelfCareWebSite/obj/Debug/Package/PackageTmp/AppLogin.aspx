<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AppLogin.aspx.cs" Inherits="WebApplication1.AppLogin" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="css/login/main.css?v=<%= System.Configuration.ConfigurationManager.AppSettings["ReleaseVersion"] %>.0"" rel="stylesheet" />
    <link href="css/font-awesome.min.css" rel="stylesheet" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css" />
    <script src="js/jquery-1.12.3.min.js"></script>
    <script src="js/Login/Login.js?v=<%= System.Configuration.ConfigurationManager.AppSettings["ReleaseVersion"] %>.0""></script>
</head>
<body>
    <div class="limiter">
        <div class="container-login100" style="background-image: url('images/login/36.png');">
            <div class="wrap-login100">
                <form class="login100-form validate-form">
                    <span class="login100-form-logo">
                        <i class="fa fa-user"></i>
                    </span>
                    <span class="login100-form-title p-b-34 p-t-27">Log in
                    </span>

                    <div class="wrap-input100 validate-input" data-validate="Enter username">
                        <input class="input100" type="text" name="username" placeholder="Username" />
                        <span class="focus-input100" data-placeholder="&#xf207;"></span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate="Enter password">
                        <input class="input100" type="password" name="pass" placeholder="Password" />
                        <span class="focus-input100" data-placeholder="&#xf191;"></span>
                    </div>

                    <div class="contact100-form-checkbox">
                        <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                        <label class="label-checkbox100" for="ckb1">
                            Remember me
                        </label>
                    </div>

                    <div class="container-login100-form-btn">
                        <a class="login100-form-btn" href="Dashboard.aspx">Login
                        </a>
                    </div>

                    <div class="p-t-90 text-left" style="font-size: 16px;">
                        <a style="float: left;" class="txt1" href="register.aspx">Ragister Now!</a>
                        <a style="float: right;" class="txt1" href="forgot_password.aspx">Forgot Password?</a>
                    </div>

                    <%--<div class="p-t-90 text-center" style="font-size: 18px;">
                        <a class="txt2" href="Default.aspx"><i class="fa fa-home"></i>&nbsp;Back To Home</a>
                    </div>--%>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
