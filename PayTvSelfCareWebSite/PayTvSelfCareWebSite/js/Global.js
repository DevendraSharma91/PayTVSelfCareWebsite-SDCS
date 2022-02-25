var WebMethodData = new Array();

function PushData(name, value) {
    var NewVale = "";
    if (value.toString().indexOf("'") >= 0)
        NewVale = value.replace(/'/g, '♦');
    else
        NewVale = value;

    WebMethodData.push('"' + name + '":"' + NewVale + '"');
}
function CallWebMethod(MethodName, Data, OnPass, OnFail) {
    //if (MethodName == "MyProfile.aspx/BillAddressdetail")
    //Data = "{" + WebMethodData.toString().replace("[", "").replace("]", "") + "}";
    //else
    Data = "{" + WebMethodData.toString().replace("[", "{").replace("]", "}") + "}";
    try {

        $.ajax({
            type: "POST",
            url: MethodName,
            data: Data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnPass,
            error: OnFail
        });
        //SetTimer = window.setInterval(function () { CallMe(); }, 60000);
        //clearInterval(SetTimer);
        //TotlaTime = SessionTime === undefined ? 20 : parseInt(SessionTime);
        //ctime = SessionTime === undefined ? 20 : parseInt(SessionTime);
        //TimeOut = 1;
        //window.clearInterval(SetTimer);

    }
    catch (e) {
        alert(e.message);
    }
}

function CallPublicAPI(MethodName, Data, OnPass, OnFail) {
    //if (MethodName == "MyProfile.aspx/BillAddressdetail")
    //Data = "{" + WebMethodData.toString().replace("[", "").replace("]", "") + "}";
    //else
    Data = "{" + WebMethodData.toString().replace("[", "{").replace("]", "}") + "}";
    try {

        $.ajax({
            type: "POST",
            url: MethodName,
            data: Data,
            //headers: { 'Authorization': 'Basic ' + btoa(username + ':' + password) },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnPass,
            error: OnFail
        });
        //SetTimer = window.setInterval(function () { CallMe(); }, 60000);
        //clearInterval(SetTimer);
        //TotlaTime = SessionTime === undefined ? 20 : parseInt(SessionTime);
        //ctime = SessionTime === undefined ? 20 : parseInt(SessionTime);
        //TimeOut = 1;
        //window.clearInterval(SetTimer);

    }
    catch (e) {
        alert(e.message);
    }
}

