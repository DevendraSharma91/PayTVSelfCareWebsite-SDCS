<%@ Page Title="" Language="C#" MasterPageFile="~/MainMaster.Master" AutoEventWireup="true" CodeBehind="packages.aspx.cs" Inherits="WebApplication1.packages" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/packeges.css" rel="stylesheet" />
    <script src="js/jquery-1.12.3.min.js"></script>
    <script src="js/fromjs/Packeges.js?ver=0.0.3"></script>

    <style>
        .ModalPopupNew { position: absolute; z-index: 99999; top: 15%; left: 0; margin: auto; bottom: 0; right: 0; }
        .pack_select a { color: #fff; }
            .pack_select a:hover { color: #fff; text-decoration: none; }
        #AllChanels { width: 46%; }

        @media screen and (max-width: 600px) {
            .card.pricing .button { width: 100% !important; margin: 4px 3px; }
            .ModalPopupNew { }
        }

        @media screen and (max-width: 360px) {
            .ModalPopupNew { top: 5%; }
            .accordion .item .heading { font-size: 11px; }
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section class="wrapper-lg bg-custom-home">
        <div class="container" style="margin-bottom: 80px;">
            <div class="row">
                <div class="col-sm-12">
                    <div class="widget padding-lg bg-dark">
                        <h1 class="heading-lg text-center text-light mb-20">PACKS & CHANNELS</h1>
                        <div class="row">
                            <div class="col-md-3">
                                <label for="">Select State</label>
                                <select class="form-control selectpicker show-tick" title="Choose One" data-style="btn-primary" id="SelectState">
                                    <option>Select State</option>
                                </select>
                                <p id="ErrorTxt" class="Error" style="display: none"></p>
                            </div>
                            <!-- /.col -->
                            <div class="col-md-3">
                                <label for="">Select City</label>
                                <select class="form-control selectpicker show-tick" id="Citylist" title="Choose One" data-style="btn-primary">
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label for="">Select LCO</label>
                                <select class="form-control selectpicker show-tick" id="LCOlist" title="Choose One" data-style="btn-primary">
                                </select>
                            </div>
                            <div class="col-md-2">
                                <label for="">Ready?</label>
                                <a class="btn btn-primary btn-block" onclick="GetPacks()">Search</a>
                            </div>

                        </div>

                    </div>
                    <!-- /.widget -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </section>
    <br />
    <section class="sec-cards">
        <div class="container" style="margin-bottom: 67px;">
            <div class="row">
                <div class="col-md-12">
                    <div class="tabs-style-2">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" role="tablist">
                            <li id="ReccPack" class="active"><a id="RecomPack" href="#Major" role="tab" data-toggle="tab" aria-expanded="true" onclick="GetPacks1()">Recommended Packs</a></li>
                            <li id="AddonsLi" class=""><a id="Addons" style="pointer-events: none" href="#Addon" role="tab" data-toggle="tab" aria-expanded="false" onclick="GetPacks3()">Broadcaster Packs</a></li>
                            <li id="ChannelsLi" class=""><a id="Chanels" style="pointer-events: none" href="#Channals" role="tab" data-toggle="tab" aria-expanded="false" onclick="GetPacks2(0)">Channels</a></li>
                        </ul>
                        <!-- Tab panes -->

                        <div class="tab-content">
                            <div class="tab-pane fade active in" id="Major" style="display: none">
                                <div class="PackgMianDiv" id="RecomondedMJMain">
                                    <div class="PackgHeading">Basic Pack</div>
                                    <div id="RecomondedPacksMajor" style="text-align: center">
                                    </div>
                                </div>
                                <div class="PackgMianDiv" id="RecomondedAddMain">
                                    <div class="PackgHeading">AddOn Pack</div>
                                    <div id="RecomondedPacksAddon" style="text-align: center">
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="Channals" style="display: none">
                                <div class="accordion ScrolFix" id="ChannalsAcc">
                                </div>
                            </div>
                            <div class="tab-pane fade" id="Addon" style="display: none">
                                <div class="PackgMianDiv" id="BroadCastMJMain">
                                    <div class="PackgHeading">Basic Pack</div>
                                    <div id="BroadcasterMajor" style="text-align: center">
                                    </div>
                                </div>
                                <div class="PackgMianDiv" id="BroadCastAddMain">
                                    <div class="PackgHeading">AddOn Pack</div>
                                    <div id="BroadcasterAddon" style="text-align: center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <br />
        <br />
    </section>

    <div class="modal show" id="modalChanels" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-modal="true" style="padding-right: 17px; display: block; position: fixed; background: #000; opacity: .5;">
    </div>
    <div class="modal-dialog ModalPopupNew" role="document" style="display: none;" id="AllChanels">
        <div class="modal-content" style="padding: 0px !important;">
            <p style="color: #f00; display: none; font-size: 16px"></p>

            <div style="padding: 14px;"><span class="AllChannels">All Chanels</span> <span style="float: right; cursor: pointer;" onclick="CLosePopup();"><i class="fa fa-times" aria-hidden="true"></i></span></div>
            <div class="tab-pane " id="Channals2" style="overflow: auto; max-height: 400px;">

                <div class="accordion" id="ChannalsAcc2" style="margin: 0px !important">
                </div>
            </div>
        </div>
    </div>


</asp:Content>
