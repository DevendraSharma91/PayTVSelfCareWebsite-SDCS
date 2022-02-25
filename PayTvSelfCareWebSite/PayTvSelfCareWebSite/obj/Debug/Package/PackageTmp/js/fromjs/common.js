var LogInDataTable = CurrLogInDetails = null;
var IsCallByMobileApp = false;
var Reliable = new Array();
var WebMethodData = new Array();

var IOSLogInData = "";





$(window).load(function () {

    var pathname = window.location.pathname;

    if (pathname == '/Home') {
        $('#CosumerCorner').removeClass('current_page_item');
        $('#DigitalPackage').removeClass('current_page_item');
        $('#homepage').addClass('current_page_item')
        $('#About').removeClass('current_page_item');
        $('#ContactUs').removeClass('current_page_item');
        $('#STBScheme').removeClass('current_page_item');
        $('#TraiComp').removeClass('current_page_item');

    }

    if (pathname == '/AboutUs') {
        $('#CosumerCorner').removeClass('current_page_item');
        $('#DigitalPackage').removeClass('current_page_item');
        $('#homepage').removeClass('current_page_item')
        $('#About').addClass('current_page_item');
        $('#ContactUs').removeClass('current_page_item');
        $('#STBScheme').removeClass('current_page_item');
        $('#TraiComp').removeClass('current_page_item');
    }

    if (pathname == '/STBScheme') {
        $('#CosumerCorner').addClass('current_page_item');
        $('#DigitalPackage').addClass('current_page_item2');
        $('#homepage').removeClass('current_page_item')
        $('#About').removeClass('current_page_item');
        $('#ContactUs').removeClass('current_page_item');
        $('#STBScheme').addClass('current_page_item');
        $('#TraiComp').addClass('current_page_item2');
    }
    if (pathname == '/TraiComplaints') {
        $('#CosumerCorner').addClass('current_page_item');
        $('#DigitalPackage').addClass('current_page_item2');
        $('#homepage').removeClass('current_page_item')
        $('#About').removeClass('current_page_item');
        $('#ContactUs').removeClass('current_page_item');
        $('#STBScheme').addClass('current_page_item2');
        $('#TraiComp').addClass('current_page_item');
    }
    if (pathname == '/Packages') {
        $('#CosumerCorner').addClass('current_page_item');
        $('#DigitalPackage').addClass('current_page_item');
        $('#homepage').removeClass('current_page_item')
        $('#About').removeClass('current_page_item');
        $('#ContactUs').removeClass('current_page_item');
        $('#STBScheme').addClass('current_page_item2');
        $('#TraiComp').addClass('current_page_item2');

    }
    $('#SignIn').click(function () {
        $('#SignIn').removeClass('current_page_item');
        localStorage.setItem("PathName", window.location.pathname)
    });
    $('#LCOlogin').click(function () {
        $('#LCOlogin').removeClass('current_page_item');
    });
});




$(document).ready(function () {
    $("#Download").click(function () {
        $('html, body').animate({
            scrollTop: $("#Div6").offset().top
        }, 1500);

    });
    $(".Contact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1500);

    });
});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $("#ContactUs").removeClass("Contact");
    }
}); //missing );