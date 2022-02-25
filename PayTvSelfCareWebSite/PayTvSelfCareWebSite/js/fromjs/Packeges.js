//var OpratorID = "PayTv";
var PortalUrl = '';
var PackgesNew = false;
function Add_ContactPerson() {
    $(".modal_bg ").show();
    $(".ChannalsView").show();
    $('body').css('overflow', 'hidden');
}
function genreclick(e) {
    var a = $(e).closest('.item');
    var b = $(a).hasClass('open');
    var c = $(a).closest('.accordion').find('.open');

    //if (b != true) {
    //    $(c).find('.contents').slideUp(200);
    //    $(c).removeClass('open');
    //}

    $(a).toggleClass('open');
    $(a).find('.contents').slideToggle(200);
}



function OnPassStateList(result) {
    result = result.d;
    // var Statelist = Reliable.parse(JSON.parse(result.d.split('|')[0]));
    var Statelist = JSON.parse(result);
    var Selected = Statelist["Description"][0]["StateID"];
    var State = '<option value="-1"  disabled selected >Select Your State</option>';
    var City = '<option value="-1"  disabled selected >Select Your City</option>';
    var LCO = '<option value="-1"  disabled selected >Select Your LCO</option>';
    var Option = '';
    if (Statelist != "" && Statelist != null && Statelist != undefined) {
        for (var i = 0; i < Statelist.Description.length; i++) {
            Option += '<option value="' + Statelist.Description[i]["StateID"] + '">' + Statelist.Description[i]["State Name"] + '</option>';
        }

    }
    var StateData = State + Option;

    $('#SelectState').html("");

    $('#SelectState').html(StateData);
    //$('#SelectState').val(Selected);
    //$('#SelectState').val(DS["TABLE4"][0]["STATEID"]);
    $('#Citylist').html("");
    $('#Citylist').html(City);
    $('#LCOlist').html("");
    $('#LCOlist').html(LCO);
    $('#Edit_SelectState').html("");
    $('#Edit_SelectState').html(StateData);
    $('#Edit_Citylist').html("");
    $("#Loadingbg").hide();
    if (City > 0 && City !== '') {
        $('#Edit_Citylist').html(City);
    }

}
function OnFailStateList(result) {
}

function OnPassGetCityList(result) {
    result = result.d;
    var Citylist = JSON.parse(result);
    if (Citylist["Status"] == "Success") {
        var Option = '<option value="-1" disabled selected >Select Your City</option>';
        if (Citylist != "" && Citylist != null && Citylist != undefined) {
            for (var i = 0; i < Citylist.Description.length; i++) {
                Option += '<option value="' + Citylist.Description[i]["CityID"] + '">' + Citylist.Description[i]["City Name"] + '</option>';
            }
        }
        $('.state_loading').css('display', 'none');
        $('#Citylist').html("");
        $('#Citylist').html(Option);
        $("#Loadingbg").hide();
    }
    else {
        $('#Citylist').val(-1);
        $('.state_loading').css('display', 'none');
        $('#Loadingbg').hide();
    }
}

function OnFailGetCityList(result) {
    result = result.d;
    var CityF = JSON.parse(result);
    if (CityF["Status"] == "Fail") {
        MsgBox("E", "Unable to get Citys");
    }
}


function OnPassGetLCOlist(result) {
    result = result.d;
    var LCOlist = JSON.parse(result);
    if (LCOlist["Status"] == "Success") {
        var Option1 = '<option value="-1" disabled selected >Select Your LCO</option>';
        if (LCOlist != "" && LCOlist != null && LCOlist != undefined) {
            for (var i = 0; i < LCOlist.Description.length; i++) {
                Option1 += '<option value="' + LCOlist.Description[i]["AccID"] + '">' + LCOlist.Description[i]["AccDesc"] + '</option>';
            }
        }
        $('#LCOlist').html("");
        $('#LCOlist').html(Option1);
        $('#Loadingbg').hide();
    }
    else {
        $('#LCOlist').val(-1);
        $('#Loadingbg').hide();
    }
}

function OnFailGetLCOlist(result) {
    result = result.d;
    var LCOF = JSON.parse(result);
    if (LCOF["Status"] == "Fail") {
        MsgBox("E", "Unable to get LCOs");
    }
}

function GetpaksValidation() {
    var PacksVal = true;
    if ($("#SelectState").val() == null && $("#SelectState").val() == undefined) {
        $("#ErrorTxt").show();
        $('#ErrorTxt').html("Please select State !");
        $(".ErrorTxt").delay(5000).fadeOut();
        PacksVal = false;
    }
    else if ($("#Citylist").val() == null && $("#Citylist").val() == undefined) {
        $("#ErrorTxt").show();
        $('#ErrorTxt').html("Please select City!");
        $(".ErrorTxt").delay(5000).fadeOut();
        PacksVal = false;
    }
    else if ($("#LCOlist").val() == null && $("#LCOlist").val() == undefined) {
        $("#ErrorTxt").show();
        $('#ErrorTxt').html("Please select LCO!");
        $(".ErrorTxt").delay(5000).fadeOut();
        PacksVal = false;
    }
    return PacksVal;
}
function GetPacks1() {
    $("#Addon").hide();
    $("#Major").show();
    $("#Channals").hide();
    PackgesNew = true;
}
function GetPacks3() {
    $("#Addon").show();
    $("#Major").hide();
    $("#Channals").hide();
    PackgesNew = true;
}

function GetPacks2() {
    $("#Addon").hide();
    $("#Major").hide();
    $("#Channals").show();
    PackgesNew == true;

    if ($('#ChannalsAcc').find('div[data-isgenercall="true"]').length == 0 && GetpaksValidation() == true) {
        // $('#Channals').html("");
        $("#Loadingbg").show();
        if ($("#SelectState").val() !== '' || $("#SelectState").val() !== 0 || $("#SelectState").val() !== null) {
            var LocationID = $("#SelectState").val();
            var Locationtype = 1;
        }
        if ($("#Citylist").val() !== null) {
            var LocationID = $("#Citylist").val();
            var Locationtype = 2;
        }
        var listType = "5";
        //PushData('OPID', OpratorID)
        PushData('locationType', Locationtype);
        PushData('locationid', LocationID);
        PushData('listtype', listType);
        PushData('GenerID', 0)
        CallPublicAPI('packages.aspx/GetPackges', '', OnPassGenerList, OnFailGetPakegesList);
    }
}



function getChannellist(e, GenerID) {

    var a = $(e).closest('.item');
    var b = $(a).hasClass('open');
    var c = $(a).closest('.accordion').find('.open');
    //if (b != true) {
    //    $(c).find('.contents').slideUp(200);
    //    $(c).removeClass('open');
    //}
    $(a).toggleClass('open');
    $(a).find('.contents').slideToggle(200);

    if ($('#contGnr' + GenerID + '').find('div').length == 0) {
        $("#Addon").hide();
        $("#Major").hide();
        $("#Channals").show();
        PackgesNew == true;

        var listType = "5";
        //PushData('OPID', OpratorID)
        var LocationID
        var Locationtype
        $("#Loadingbg").show();
        if ($("#SelectState").val() !== '' || $("#SelectState").val() !== 0 || $("#SelectState").val() !== null) {
            LocationID = $("#SelectState").val();
            Locationtype = 1;
        }
        if ($("#Citylist").val() !== null) {
            LocationID = $("#Citylist").val();
            Locationtype = 2;
        }
        PushData('locationType', Locationtype);
        PushData('locationid', LocationID);
        PushData('listtype', listType);
        PushData('GenerID', GenerID)
        CallPublicAPI('packages.aspx/GetPackges', '', OnPassChannelview, OnFailGetPakegesList);
    }
}

function getPortalurl(url) {
    PortalUrl = url;
}
function GetPacks() {
    if (GetpaksValidation() == true) {
        $("#Major").show();
        $("#Addon").hide();
        $("#Channals").hide();
        //$("#RecomondedPacksMajor").html("");
        //$("#RecomondedPacksAddon").html("");
        //$("#BroadcasterMajor").html("");
        //$("#BroadcasterAddon").html("");
        //$("#ChannalsAcc").html("");
        PackgesNew = false;
        $("#ReccPack").addClass("active");
        $("#AddonsLi").removeClass("active");
        $("#ChannelsLi").removeClass("active");

        $("#Loadingbg").show();
        if ($("#SelectState").val() !== '' || $("#SelectState").val() !== 0 || $("#SelectState").val() !== null) {
            var LocationID = $("#SelectState").val();
            var Locationtype = 1;
        }
        if ($("#Citylist").val() !== null) {
            var LocationID = $("#Citylist").val();
            var Locationtype = 2;
        }
        var listType = "3";
        //PushData('OPID', OpratorID)
        PushData('locationType', Locationtype);
        PushData('locationid', LocationID);
        PushData('listtype', listType);
        PushData('GenerID', 0)
        CallPublicAPI('packages.aspx/GetPackges', '', OnPassPakegesList, OnFailGetPakegesList);
    }
}



function OnPassGenerList(result) {
    var ds;
    var ConnectionHtml;
    var DHD;
    //var Datach = null;
    result = result.d;
    ds = JSON.parse(result).Description;
    //dsss = ds;
    if (PackgesNew == false) {
        $('#RecomondedPacksMajor').html("");
        $('#RecomondedPacksAddon').html("");
        $('#BroadcasterMajor').html("");
        $('#BroadcasterAddon').html("");
        $('#ChannalsAcc').html("");
        $('.fade').addClass('in');
        $('.fade').addClass('active');
    }

    $("#Addons").css('pointer-events', 'all');
    $("#Chanels").css('pointer-events', 'all');

    var Channels = new Array();
    $('#ChannalsAcc').html('');
    var j = 0;
    for (var i = 0; i < ds.length; i++) {
        var data = $.grep(Channels, function (itm, p) {
            return itm['Genre'] == ds[i]['Genre'];
        });

        if (data.length == 0) {
            j = 1;
            var GenerHtml = $('  <div class="item" data-isgenercall="true"  >' +
                                 ' <div class="heading" onclick="getChannellist(this,' + ds[i]['GenreID'] + ')">' + ds[i]['Genre'] + '           ' + ds[i]['NoofPkgChannel'] + '  Channel(s)' + '</div>' +
                                  '<div class="contents" style="height: auto" id="contGnr' + ds[i]['GenreID'] + '"></div>');

            $('#ChannalsAcc').append(GenerHtml);
            Channels.push({
                'Genre': ds[i]['Genre']
            });
        }

    }
    $("#Loadingbg").hide();
}

function OnPassChannelview(result) {
    var ds;
    var ConnectionHtml;
    var DHD;
    //var Datach = null;
    result = result.d;
    ds = JSON.parse(result).Description;
    if (PackgesNew == false) {
        $('#RecomondedPacksMajor').html("");
        $('#RecomondedPacksAddon').html("");
        $('#BroadcasterMajor').html("");
        $('#BroadcasterAddon').html("");
        // $('#ChannalsAcc').html("");
        $('.fade').addClass('in');
        $('.fade').addClass('active');
    }

    $("#Addons").css('pointer-events', 'all');
    $("#Chanels").css('pointer-events', 'all');

    var Channels = new Array();
    if (ds !== null) {
        $(ds).each(function (a, e) {
            if (e.ProductType == 'Channel') {
                var ImgpathNew = 'images/imagenotavailable.png';
                if (e.ImgPath !== undefined && e.ImgPath != "" && e.ImgPath != null)
                    ImgpathNew = e.ImgPath;
                var ChannelHtml = new Array();
                ChannelHtml.push(' <div class="channelsmain">' +
                                            '<span>' +
                                                '<img src="' + ImgpathNew + '" alt="' + e.ProductName + '" style="height: 60px; width: 90px;" />' +
                                                '<br />' +
                                                '<span style="color: rgb(0, 0, 0); font-weight: 300; text-decoration: none; font-size: 15px;"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp' + parseFloat(e.MSOMRP).toFixed(2) + '</span>' +
                                            '</span>' +
                                            '<p>' +
                                            e.ProductName +
                                            '</p>' +
                                           // '<div class="pack_select selected">' +
                                           //'<a target="_blank"   href="' + PortalUrl + '">Select' +
                                           //'</a>' +
                                           // '</div>' +
                                        '</div>');
                $('#contGnr' + e.GenreID).append(ChannelHtml)
            }
        })

        //for (var i = 0; i < ds.length; i++) {
        //    if (ds[i]['ProductType'] == 'Channel') {

        //        var data = $.grep(Channels, function (itm, p) {
        //            return itm['Genre'] == ds[i]['Genre'];
        //        });

        //        var ImgpathNew = 'images/imagenotavailable.png';
        //        if (ds[i]['ImgPath'] !== undefined && ds[i]['ImgPath'] != "" && ds[i]['ImgPath'] != null)
        //            ImgpathNew = ds[i]['ImgPath'];

        //        if (data.length == 0) {
        //            var ChannelHtml = new Array();
        //            ChannelHtml.push(' <div class="channelsmain">' +
        //                                        '<span>' +
        //                                            '<img src="' + ImgpathNew + '" alt="' + ds[i]['ProductName'] + '" style="height: 60px; width: 90px;" />' +
        //                                            '<br />' +
        //                                            '<span style="color: rgb(0, 0, 0); font-weight: 300; text-decoration: none; font-size: 15px;"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp' + parseFloat(ds[i]['MSOMRP']).toFixed(2) + '</span>' +
        //                                        '</span>' +
        //                                        '<p>' +
        //                                        ds[i]['ProductName'] +
        //                                        '</p>' +
        //                                       // '<div class="pack_select selected">' +
        //                                       //'<a target="_blank"   href="' + PortalUrl + '">Select' +
        //                                       //'</a>' +
        //                                       // '</div>' +
        //                                    '</div>');

        //            $('#contGnr' + ds[i]['GenreID']).html(ChannelHtml)
        //            Channels.push({
        //                'Genre': ds[i]['Genre'], 'Html': ChannelHtml
        //            });
        //        }
        //        else {
        //            var htmlArray = $.grep(Channels, function (itm, p) {
        //                return itm['Genre'] == ds[i]['Genre'];
        //            });
        //            var ChannelHtml = new Array();
        //            ChannelHtml = htmlArray[0].Html;
        //            ChannelHtml.push(' <div class="channelsmain">' +
        //                                        '<span>' +
        //                                            '<img src="' + ImgpathNew + '" alt="' + ds[i]['ProductName'] + '" style="height: 60px; width: 90px;" />' +
        //                                            '<br />' +
        //                                            '<span style="color: rgb(0, 0, 0); font-weight: 300; text-decoration: none; font-size: 15px;"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp' + parseFloat(ds[i]['MSOMRP']).toFixed(2) + '</span>' +
        //                                        '</span>' +
        //                                         '<p>' +
        //                                        ds[i]['ProductName'] +
        //                                        '</p>' +
        //                                       // '<div class="pack_select selected">' +
        //                                       //'<a target="_blank"   href="' + PortalUrl + '">Select' +
        //                                       //'</a>' +
        //                                       // '</div>' +
        //                                    '</div>');
        //            $('#contGnr' + ds[i]['GenreID']).html(ChannelHtml)
        //            Channels[ds[i]['Genre']] = ChannelHtml;
        //        }
        //    }
        //}
    }
    $("#Loadingbg").hide();
}

function OnPassPakegesList(result) {
    var ds;
    var ConnectionHtml;
    var DHD;
    //var Datach = null;
    result = result.d;
    ds = JSON.parse(result).Description;
    if (PackgesNew == false) {
        $('#RecomondedPacksMajor').html("");
        $('#RecomondedPacksAddon').html("");
        $('#BroadcasterMajor').html("");
        $('#BroadcasterAddon').html("");
        // $('#ChannalsAcc').html("");
        $('.fade').addClass('in');
        $('.fade').addClass('active');
    }

    $("#Addons").css('pointer-events', 'all');
    $("#Chanels").css('pointer-events', 'all');

    var Channels = new Array();

    if (ds !== null) {
        //for (var i = 0; i < ds.length; i++) {
        //    if (ds[i]['ProductType'] == 'Channel') {

        //        //var data = $.grep(Channels, function (itm, p) {
        //        //    return itm['Genre'] == ds[i]['Genre'];
        //        //});

        //        var ImgpathNew = 'images/imagenotavailable.png';
        //        if (ds[i]['ImgPath'] !== undefined && ds[i]['ImgPath'] != "" && ds[i]['ImgPath'] != null)
        //            ImgpathNew = ds[i]['ImgPath'];

        //        //if (data.length == 0) {
        //            var ChannelHtml = new Array();
        //            ChannelHtml.push(' <div class="channelsmain">' +
        //                                        '<span>' +
        //                                            '<img src="' + ImgpathNew + '" alt="' + ds[i]['ProductName'] + '" style="height: 60px; width: 90px;" />' +
        //                                            '<br />' +
        //                                            '<span style="color: rgb(0, 0, 0); font-weight: 300; text-decoration: none; font-size: 15px;"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp' + parseFloat(ds[i]['MSOMRP']).toFixed(2) + '</span>' +
        //                                        '</span>' +
        //                                        '<p>' +
        //                                        ds[i]['ProductName'] +
        //                                        '</p>' +
        //                                       // '<div class="pack_select selected">' +
        //                                       //'<a target="_blank"   href="' + PortalUrl + '">Select' +
        //                                       //'</a>' +
        //                                       // '</div>' +
        //                                    '</div>');

        //            $('#contGnr' + ds[i]['GenreID']).html(ChannelHtml)

        //        //    Channels.push({
        //        //        'Genre': ds[i]['Genre'], 'Html': ChannelHtml
        //        //    });
        //        //}
        //        //else {
        //        //    var htmlArray = $.grep(Channels, function (itm, p) {
        //        //        return itm['Genre'] == ds[i]['Genre'];
        //        //    });
        //        //    var ChannelHtml = new Array();
        //        //    ChannelHtml = htmlArray[0].Html;
        //        //    ChannelHtml.push(' <div class="channelsmain">' +
        //        //                                '<span>' +
        //        //                                    '<img src="' + ImgpathNew + '" alt="' + ds[i]['ProductName'] + '" style="height: 60px; width: 90px;" />' +
        //        //                                    '<br />' +
        //        //                                    '<span style="color: rgb(0, 0, 0); font-weight: 300; text-decoration: none; font-size: 15px;"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp' + parseFloat(ds[i]['MSOMRP']).toFixed(2) + '</span>' +
        //        //                                '</span>' +
        //        //                                 '<p>' +
        //        //                                ds[i]['ProductName'] +
        //        //                                '</p>' +
        //        //                               // '<div class="pack_select selected">' +
        //        //                               //'<a target="_blank"   href="' + PortalUrl + '">Select' +
        //        //                               //'</a>' +
        //        //                               // '</div>' +
        //        //                            '</div>');
        //        //    $('#contGnr' + ds[i]['GenreID']).html(ChannelHtml)
        //        //    Channels[ds[i]['Genre']] = ChannelHtml;
        //        //}
        //    }
        //}
        var ConnectionDataTable1 = $.grep(ds, function (items) {
            return (items['ProductType'] == "Major" || items['ProductType'] == "AddOn") && items['IsBroadcasterBq'] == 0;
        });

        var ConnectionDataTable2 = $.grep(ds, function (items) {
            return (items['ProductType'] == "Major" || items['ProductType'] == "AddOn") && items['IsBroadcasterBq'] == 1;
        });

        var RecomondedPacksMajor = RecomondedPacksAddon = BroadcasterMajor = BroadcasterAddon = '';

        //Imagepath = ds[0]['ImgPath'];

        //var imagename = ds[i]["ImgName"] == "" ? ds[i]["ChannelName"] : ds[i]["ImgName"];

        var jaiho = ''
        //parseFloat(PackageDataTable[j]["ChMSOMRP"]).toFixed(2);


        for (var i = 0; i < ConnectionDataTable1.length; i++) {

            if (ConnectionDataTable1[i]['ProductType'] == 'Major') {
                //$('#RecomondedPacksMajor').append

                RecomondedPacksMajor += '<div class="col-xs-12 col-sm-6 col-md-5 col-lg-4">' +
                        '<div class="card pricing mt--md shadow--long-light state">' +
                            '<div class="card__head">' +
                                '<h3 class="plan-name">' + ConnectionDataTable1[i]['ProductName'] + '</h3>' +

                                '<h3 class="plan-pricing numbers__figure--large color--kale"><i class="fa fa-inr" aria-hidden="true"></i> ' + parseFloat(ConnectionDataTable1[i]['MSOMRP']).toFixed(2) +
                                    //'<input type="radio" checked="checked" name="radio" />' +
                                    //'<span class="checkmark"></span>' +
                                '</h3>' +
                                 '<p class="mb-10">' +
                                    '<span style="color: #212835;">Channels :&nbsp; ' + ConnectionDataTable1[i]['ChannelCount'] + '</span>' +

                                '</p>' +
                                '<p class="mb--0">' +
                                    '<span style="color: #212835;">Per Month</span>' +

                                '</p>' +
                                '<div class="card__body">' +
                                    '<a class="button signup-link start-trial-button mt--sm modal-toggle" onclick="javascript:GetMainChannelList(this,' + ConnectionDataTable1[i]["ProductID"] + ')">View Channels</a>' +
                                    '<a target="_blank"  class="button signup-link start-trial-button mt--sm"  href="' + PortalUrl + '">Select ' + ConnectionDataTable1[i]['ProductType'] + '</a>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
            }
            if (ConnectionDataTable1[i]['ProductType'] == 'AddOn') {
                //$('#RecomondedPacksAddon').append(

                RecomondedPacksAddon += '<div class="col-xs-12 col-sm-6 col-md-5 col-lg-4">' +
                     '<div class="card pricing mt--md shadow--long-light state">' +
                         '<div class="card__head">' +
                             '<h3 class="plan-name">' + ConnectionDataTable1[i]['ProductName'] + ' </h3>' +
                             '<h3 class="plan-pricing numbers__figure--large color--kale"><i class="fa fa-inr" aria-hidden="true"></i> ' + parseFloat(ConnectionDataTable1[i]['MSOMRP']).toFixed(2) +
                                 //'<input type="radio" checked="checked" name="radio" />' +
                                 //'<span class="checkmark"></span>' +
                             '</h3>' +
                                  '<p class="mb-10">' +
                                 '<span style="color: #212835;">Channels :&nbsp; ' + ConnectionDataTable1[i]['ChannelCount'] + '</span>' +

                             '</p>' +
                             '<p class="mb--0">' +
                                 '<span style="color: #212835;">Per Month</span>' +

                             '</p>' +
                             '<div class="card__body">' +
                                 '<a class="button signup-link start-trial-button mt--sm modal-toggle" onclick="javascript:GetMainChannelList(this,' + ConnectionDataTable1[i]["ProductID"] + ')">View Channels</a>' +
                                 '<a target="_blank"  class="button signup-link start-trial-button mt--sm"  href="' + PortalUrl + '">Select ' + ConnectionDataTable1[i]['ProductType'] + '</a>' +
                             '</div>' +
                         '</div>' +
                     '</div>' +
                 '</div>';
            }
        }
        for (var i = 0; i < ConnectionDataTable2.length; i++) {
            if (ConnectionDataTable2[i]['ProductType'] == 'Major') {
                //$('#BroadcasterMajor').append(

                BroadcasterMajor += '<div class="col-xs-12 col-sm-6 col-md-5 col-lg-4">' +
                        '<div class="card pricing mt--md shadow--long-light state">' +
                            '<div class="card__head">' +
                                '<h3 class="plan-name">' + ConnectionDataTable2[i]['ProductName'] + ' </h3>' +
                                '<h3 class="plan-pricing numbers__figure--large color--kale"><i class="fa fa-inr" aria-hidden="true"></i> ' + parseFloat(ConnectionDataTable2[i]['MSOMRP']).toFixed(2) +
                                    //'<input type="radio" checked="checked" name="radio" />' +
                                    //'<span class="checkmark"></span>' +
                                '</h3>' +
                                 '<p class="mb-10">' +
                                    '<span style="color: #212835;">Channels :&nbsp; ' + ConnectionDataTable2[i]['ChannelCount'] + '</span>' +

                                '</p>' +
                                '<p class="mb--0">' +
                                    '<span style="color: #212835;">Per Month</span>' +

                                '</p>' +
                                '<div class="card__body">' +
                                    '<a class="button signup-link start-trial-button mt--sm modal-toggle" onclick="javascript:GetMainChannelList(this,' + ConnectionDataTable2[i]["ProductID"] + ')">View Channels</a>' +
                                    '<a target="_blank"  class="button signup-link start-trial-button mt--sm"  href="' + PortalUrl + '">Select ' + ConnectionDataTable2[i]['ProductType'] + '</a>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
            }
            if (ConnectionDataTable2[i]['ProductType'] == 'AddOn') {
                //$('#BroadcasterAddon').append(

                BroadcasterAddon += '<div class="col-xs-12 col-sm-6 col-md-5 col-lg-4">' +
                        '<div class="card pricing mt--md shadow--long-light state">' +
                            '<div class="card__head">' +
                                '<h3 class="plan-name">' + ConnectionDataTable2[i]['ProductName'] + '</h3>' +
                                '<h3 class="plan-pricing numbers__figure--large color--kale"><i class="fa fa-inr" aria-hidden="true"></i> ' + parseFloat(ConnectionDataTable2[i]['MSOMRP']).toFixed(2) +
                                    //'<input type="radio" checked="checked" name="radio" />' +
                                    //'<span class="checkmark"></span>' +
                                '</h3>' +
                                 '<p class="mb-10">' +
                                    '<span style="color: #212835;">Channels :&nbsp; ' + ConnectionDataTable2[i]['ChannelCount'] + '</span>' +
                                '</p>' +

                                '<p class="mb--0">' +
                                    '<span style="color: #212835;">Per Month</span>' +

                                '</p>' +
                                '<div class="card__body">' +
                                    '<a class="button signup-link start-trial-button mt--sm modal-toggle" onclick="javascript:GetMainChannelList(this,' + ConnectionDataTable2[i]["ProductID"] + ')">View Channels</a>' +
                                    '<a target="_blank"  class="button signup-link start-trial-button mt--sm"  href="' + PortalUrl + '">Select ' + ConnectionDataTable2[i]['ProductType'] + '</a>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
            }

        }
        var MainMajorMesg = MainAddonMesg = MainAlaCarteMesg = ""
        if (RecomondedPacksMajor == "" || RecomondedPacksAddon == "" || BroadcasterMajor == "") {
            MainMajorMesg = "No Bouquet subscribed.";
            MainAddonMesg = "No addon subscribed.";
            MainAlaCarteMesg = "No a-la-carte subscribed .";
        }
        $("#RecomondedPacksMajor").append(RecomondedPacksMajor == "" ? +$("#RecomondedMJMain").css('display', 'none') : RecomondedPacksMajor);
        $("#RecomondedPacksAddon").append(RecomondedPacksAddon == "" ? +$("#RecomondedAddMain").css('display', 'none') : RecomondedPacksAddon);
        $("#BroadcasterMajor").append(BroadcasterMajor == "" ? +$("#BroadCastMJMain").css('display', 'none') : BroadcasterMajor);
        $("#BroadcasterAddon").append(BroadcasterAddon == "" ? +$("#BroadCastAddMain").css('display', 'none') : BroadcasterAddon);
    }
    $("#Loadingbg").hide();
}

function OnFailGetPakegesList(r) {

}
// Quick & dirty toggle to demonstrate modal toggle behavior
function GetMainChannelList(ctrl, id) {
    var BouquetID = "";
    var PolicyID = "";
    var SendCriteria = id;
    $("#Loadingbg").show();
    //PushData('OPID', OpratorID);
    PushData('Criteria', SendCriteria);
    CallPublicAPI('packages.aspx/GetChannelList', '', OnPassChannelList, OnFailChannelList);
}
function OnPassChannelList(result) {
    result = result.d;
    ds = JSON.parse(result).Description;
    if (ds["NewDataSet"]["Package"][0]["Channel"] !== null && ds["NewDataSet"]["Package"][0]["Channel"] !== undefined) {
        $('html,body').scrollTop(0);
        $("#AllChanels").show();
        $("#modalChanels").css('visibility', 'visible');
        $('html, body').css('overflowY', 'hidden');
        var Channels = new Array();
        for (var i = 0; i < ds["NewDataSet"]["Package"][0]["Channel"].length; i++) {

            var data = $.grep(Channels, function (itm, p) {
                return itm['Genre'] == ds["NewDataSet"]["Package"][0]["Channel"][i]['Genre'];
            });

            var ImgpathNew = 'images/imagenotavailable.png';
            if (ds["NewDataSet"]["Package"][0]["Channel"][i]['ImgPath'] !== undefined && ds["NewDataSet"]["Package"][0]["Channel"][i]['ImgPath'] != "" && ds["NewDataSet"]["Package"][0]["Channel"][i]['ImgPath'] != null)
                ImgpathNew = ds["NewDataSet"]["Package"][0]["Channel"][i]['ImgPath'];

            if (data.length == 0) {
                var ChannelHtml = new Array();
                ChannelHtml.push(' <div class="channelsmain">' +
                                            '<span>' +
                                                '<img src="' + ImgpathNew + '" alt="' + ds["NewDataSet"]["Package"][0]["Channel"][i]['ProductName'] + '" style="height: 60px; width: 90px;" />' +
                                                '<br />' +
                                                '<span style="color: rgb(0, 0, 0); font-weight: 300; text-decoration: none; font-size: 15px;"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp' + parseFloat(ds["NewDataSet"]["Package"][0]["Channel"][i]['ChMSOMRP']).toFixed(2) + '</span>' +
                                            '</span>' +
                                            '<p>' +
                                            ds["NewDataSet"]["Package"][0]["Channel"][i]['ChannelName'] +
                                            '</p>' +
                                            //'<div class="pack_select selected">' +
                                            //   '<a target="_blank"  href="http://d4u.paytvselfcare.tv/">Select' +
                                            //   '</a>' +
                                            //    '</div>' +
                                        '</div>');
                Channels.push({
                    'Genre': ds["NewDataSet"]["Package"][0]["Channel"][i]['Genre'], 'Html': ChannelHtml
                });
            }
            else {
                var htmlArray = $.grep(Channels, function (itm, p) {
                    return itm['Genre'] == ds["NewDataSet"]["Package"][0]["Channel"][i]['Genre'];
                });
                var ChannelHtml = new Array();
                ChannelHtml = htmlArray[0].Html;



                ChannelHtml.push(' <div class="channelsmain">' +
                                            '<span>' +
                                                '<img src="' + ImgpathNew + '" alt="' + ds["NewDataSet"]["Package"][0]["Channel"][i]['ProductName'] + '" style="height: 60px; width: 90px;" />' +
                                                '<br />' +
                                                '<span style="color: rgb(0, 0, 0); font-weight: 300; text-decoration: none; font-size: 15px;"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp' + parseFloat(ds["NewDataSet"]["Package"][0]["Channel"][i]['ChMSOMRP']).toFixed(2) + '</span>' +
                                            '</span>' +
                                             '<p>' +
                                            ds["NewDataSet"]["Package"][0]["Channel"][i]['ChannelName'] +
                                            '</p>' +
                                            //'<div class="pack_select selected">' +
                                            //   '<a target="_blank"  href="http://d4u.paytvselfcare.tv/">Select' +
                                            //   '</a>' +
                                            //    '</div>' +
                                        '</div>');
                Channels[ds["NewDataSet"]["Package"][0]["Channel"][i]['Genre']] = ChannelHtml;
            }
            var jaiho = ''
            //parseFloat(PackageDataTable[j]["ChMSOMRP"]).toFixed(2);


        }
        if (Channels.length > 0) {
            $('#ChannalsAcc2').html('');
            for (var j = 0; j < Channels.length; j++) {

                var ChannelFinal = '';
                for (var k = 0; k < Channels[j]['Html'].length; k++) {

                    ChannelFinal = ChannelFinal + Channels[j]['Html'][k];
                }

                var GenerHtml = $('  <div class="item">' +
                                     ' <div class="heading" onclick="genreclick(this)">' + Channels[j]['Genre'] + '            ' + Channels[j]['Html'].length + ' Channel(s)' + '</div>' +
                                      '<div class="contents" style="height: auto">' +
                                       //'   <p class="selectall">' +
                                       //'   Select All' +
                                       //'   <input type="checkbox" name="vehicle1" value="Bike" />' +
                                        '  </p>' + ChannelFinal +

              '</div>');

                $('#ChannalsAcc2').append(GenerHtml);
            }
            $("#Loadingbg").hide();
        }
    }
    else {
        $("#Loadingbg").hide();
    }

}
function OnFailChannelList(result) {

}

function CLosePopup() {
    $("#AllChanels").hide();
    $("#modalChanels").css('visibility', 'hidden');
    $('html, body').css('overflowY', 'auto');
}


$(document).ready(function () {
    $('.accordion .item .heading').click(function () {
        var a = $(this).closest('.item');
        var b = $(a).hasClass('open');
        var c = $(a).closest('.accordion').find('.open');

        if (b != true) {
            $(c).find('.contents').slideUp(200);
            $(c).removeClass('open');
        }

        $(a).toggleClass('open');
        $(a).find('.contents').slideToggle(200);

    });
    //PushData('OPID', OpratorID)
    $("#Loadingbg").show();
    CallPublicAPI('packages.aspx/Statelist', '', OnPassStateList, OnFailStateList);
    $("#SelectState").on('change', function () {
        $("#Loadingbg").show();
        PushData('StateId', $(this).val());
        //PushData('OPID', OpratorID)
        CallPublicAPI('packages.aspx/GetCityList', '', OnPassGetCityList, OnFailGetCityList);
    });
    $("#Citylist").on('change', function () {
        $("#Loadingbg").show();
        PushData('CityId', $(this).val());
        //PushData('OPID', OpratorID)
        CallPublicAPI('packages.aspx/getSubOperatorList', '', OnPassGetLCOlist, OnFailGetLCOlist);
    });
    $('.modal-toggle').on('click', function (e) {
        e.preventDefault();
        $('.modal').removeClass('is-hidden');
        $('.modal').addClass('is-visible');
        $('body').css('overflow-y', 'hidden');
        $(window).scrollTop(0);
    });

    $('.ModalClose').on('click', function (e) {
        e.preventDefault();
        $('.modal').removeClass('is-visible');
        $('.modal').addClass('is-hidden');
        $('body').css('overflow-y', 'auto');
        $(window).scrollTop(0);

    });
});
