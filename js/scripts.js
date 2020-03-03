var activeButton = function() {
  $(this).toggleClass("active").siblings().removeClass('active');
};

var shopColor = function() {
  var shop = "ajino okayama aoyama koenji osaka kyoto web momoshop";
  var fontShop = "font-ajino font-okayama font-aoyama font-koenji font-osaka font-kyoto font-web font-momoshop";
  var shopActiveValue = $("#shops button.active").val();
  var shopActiveText = $("#shops button.active").html();
  var shopActive = $("#shops button").hasClass("active");

  if (shopActive) {
    $("header").removeClass("w3-black " + shop).addClass(shopActiveValue);
    $("#shopText").html(shopActiveText);
    $("#shopText").removeClass("font-black "+fontShop).addClass("font-"+shopActiveValue);
  } else {
    $("header").removeClass(shop).addClass("w3-black");
    $("#shopText").html("店舗");
    $("#shopText").removeClass(fontShop).addClass("font-black");
  }

  if ($("#shops button.active").val() == "ajino") {
    $("#jeans button.ajinolimited").show();
    $("#jeans button.ajinolimited").show();
  } else {
    $("#jeans .ajinolimited").hide();
    $("#jeans .ajinolimited").hide();
  }

};

var buttonColor = function() {
  var shop = "ajino okayama aoyama koenji osaka kyoto web momoshop";
  var shopActive = $("#shops button.active").val();
  var color = "white red pink pearl gold black";
  var colorActive = $("#color button.active").val();

  $("#pocket button, #layer button, #pattern button").removeClass(shop);
  $("#shopColor").removeClass(shop);
  $("#color button").removeClass(color);
  $("#pocket button.active, #layer button.active, #pattern button.active").addClass(shopActive);
  $("#shopColor.active").addClass(shopActive);
  $("#color button.active").addClass(colorActive);
};

var jeans = function() {
  var jeansActive = $("#jeans button.active").val();

  if (jeansActive == "shutsujin") {
    $("#labelText").html("出陣");
    $("#locksp, #locksp .lockspup, #locksp .lockspdwn").show().css("fill","#fff");
    $(".stitchdoutan").hide();
    $(".pocket").show().css("fill","#01060C");
    $("#rP, #lP").css("padding","16px");
  } else if (jeansActive == "blkshutsujin") {
    $("#labelText").html("ブラック出陣");
    $("#locksp, #locksp .lockspup, #locksp .lockspdwn").show().css("fill","#fff");
    $(".stitchdoutan").hide();
    $(".pocket").show().css("fill","#000");
    $("#rP, #lP").css("padding","16px");
  } else if (jeansActive == "pnkshutsujin") {
    $("#labelText").html("ピンク出陣");
    $("#locksp, #locksp .lockspup, #locksp .lockspdwn").show().css("fill","#F26284");
    $(".stitchdoutan").hide();
    $(".pocket").show().css("fill","#14203b");
    $("#rP, #lP").css("padding","16px");
  } else if (jeansActive == "deepdotan") {
    $("#labelText").html("特濃銅丹");
    $("#locksp, .lockspup, .lockspdwn").hide();
    $(".stitchdoutan").show();
    $(".pocket").show().css("fill","#01060C");
    $("#rP, #lP").css("padding","16px");
  } else if (jeansActive == "dotan") {
    $("#labelText").html("銅丹");
    $("#locksp, .lockspup, .lockspdwn").hide();
    $(".stitchdoutan").show();
    $(".pocket").show().css("fill","#14203b");
    $("#rP, #lP").css("padding","16px");
  } else if (jeansActive == "ladiesdotan") {
    $("#labelText").html("レディース銅丹");
    $("#locksp, .lockspup, .lockspdwn").hide();
    $(".stitchdoutan").show();
    $(".pocket").show().css("fill","#19312d");
    $("#rP, #lP").css("padding","16px");
  } else if (jeansActive == "vintage") {
    $("#labelText").html("ヴィンテージ");
    $("#locksp, .lockspup, .lockspdwn, .stitchdoutan").hide();
    $(".pocket").show().css("fill","#01060C");
    $("#rP, #lP").css("padding","16px");
  } else if (jeansActive == "kidsshutsujin") {
    $("#labelText").html("キッズ出陣");
    $("#locksp, #locksp .lockspup, #locksp .lockspdwn").show().css("fill","#fff");
    $(".stitchdoutan").hide();
    $(".pocket").show().css("fill","#01060C");
    $("#rP, #lP").css("padding","48px");
  } else if (jeansActive == "kidsdotan") {
    $("#labelText").html("キッズ銅丹");
    $("#locksp, .lockspup, .lockspdwn").hide();
    $(".stitchdoutan").show();
    $("#rP, #lP").css("padding","48px");
  } else if (jeansActive == "ajinoup") {
    $("#labelText").html("味野上");
    $("#locksp").show();
    $("#locksp .lockspup").show().css("fill","#0072BC");
    $("#locksp .lockspdwn").show().css("fill","#fff");
    $(".stitchdoutan").hide();
    $(".pocket").show().css("fill","#01060C");
    $("#rP, #lP").css("padding","16px");
  } else if (jeansActive == "ajinodwn") {
    $("#labelText").html("味野下");
    $("#locksp").show();
    $("#locksp .lockspup").show().css("fill","#fff");
    $("#locksp .lockspdwn").show().css("fill","#0072BC");
    $(".stitchdoutan").hide();
    $(".pocket").show().css("fill","#01060C");
    $("#rP, #lP").css("padding","16px");
  }
};

var jeansReset = function(){
  if ($("#jeans button.active").hasClass("ajinolimited")){
    $("#jeans button.active").toggleClass("active");
    $(":button[value=shutsujin]").toggleClass("active");
    $("#labelText").html("出陣");
  }
};

var svgChange = function() {
  var shopActive = $("#shops button.active").val();
  var pocketActive = $("#pocket button.active").val();
  var layerActive = $("#layer button.active").val();
  var patternActive = $("#pattern button.active").val();
  var colorActive = $("#color button.active").val();
  var svgLayer = layerActive - 1;
  var color = ["white", "red", "pink", "pearl", "gold", "black", "ajino", "okayama", "aoyama", "koenji", "osaka", "kyoto", "web", "momoshop"];

  for(var i=0; i<color.length; i++){
    $("#"+pocketActive+" .z"+layerActive).removeClass("svg"+color[i]);
  }

  $("#"+pocketActive+" .z"+layerActive).removeClass("z"+layerActive).hide();

  if ($(":button[value=ichimatsu]").hasClass("active") && $(":button[class=ichim]").hasClass("active")){
    $("#color button.active").removeClass("active");
    $(":button[value=black]").addClass("active");
    $("#"+pocketActive+" ."+patternActive).addClass("z"+layerActive+" svgblack").show();
  } else if (!$(":button[value=ichimatsu]").hasClass("active") && $("button.blk").hasClass("active")){
    $("#color button.active").removeClass("active");
    $(":button[value=white]").addClass("active white");
    $("#"+pocketActive+" ."+patternActive).addClass("z"+layerActive+" svgwhite").show();
  } else {
    $("#"+pocketActive+" ."+patternActive).addClass("z"+layerActive+" svg"+colorActive).show();
  };

  if ($("#"+pocketActive+" ."+patternActive).hasClass("svgshopColor")) {
    $("#"+pocketActive+" .z"+layerActive).removeClass("svgshopColor");
    $("#"+pocketActive+" .z"+layerActive).addClass("svg"+shopActive);
  }

  $("#"+pocketActive+" .z"+layerActive).insertAfter($("#"+pocketActive+" .z"+svgLayer)).show();

};

var svgShop = function() {
  var shopActive = $("#shops button.active").val();
  var layerActive = $("#layer button.active").val();
  var shopColor = ["ajino", "okayama", "aoyama", "koenji", "osaka", "kyoto", "web", "momoshop"]

  for (var i=1; i<5; i++){
    for (var j=0; j<shopColor.length; j++){
      if ($(".z"+ i ).hasClass("svg"+shopColor[j])){
        $(".z"+ i ).removeClass("svg"+shopColor[j]).addClass("svg"+shopActive);
      }
    }
  }
};

var reset = function () {
  var shop = "ajino okayama aoyama koenji osaka kyoto web momoshop";
  var color = "white red pink pearl gold black";
  var active = "#pocket button, #layer button, #pattern button, #color button";
  var btn1 = "#pattern button, #color button";
  var btn0 = "#pocket button, #layer button";
  var c = ["white", "red", "pink", "pearl", "gold", "ajino", "okayama", "aoyama", "koenji", "osaka", "kyoto", "web", "momoshop"];

  for(var j=1; j<5; j++){
    for(var i=0; i<c.length; i++){
      $(".z"+[j]).removeClass("svg"+c[i]);
    }

    $(".z"+[j]).hide().removeClass(this)
  }
  $(".spup").css("display", "");
  $(".spdwn").css("display", "");
  $(btn0, btn1).removeClass("active");
  $(btn1).prop('disabled', true);
  $("#pocket button, #layer button, #pattern button").removeClass(shop+" active");
  $("#color button").removeClass(color+" active");

};

var button0Disabled = function(){
  var btn0 = "#pocket button, #layer button";
  var shopsActive = $("#shops button").hasClass("active");

  if (shopsActive) {
    $(btn0).prop('disabled', false);
  } else {
    $(btn0).prop('disabled', true);
  }
};

var button1Disabled = function(){
  var btn1 = "#pattern button, #color button";
  var shopsActive = $("#shops button").hasClass("active");
  var pocketActive = $("#pocket button").hasClass("active");
  var layerActive = $("#layer button").hasClass("active");
  var jeansActive = $("#jeans button.active").val();

  if (pocketActive && layerActive){
    $(btn1).prop('disabled', false);
  } else {
    $(btn1).prop('disabled', true);
  }

  if (jeansActive == "kidsdotan"){
    $("#pattern button.nokids").hide();
    $("#pattern button.kids").show();
  } else if (jeansActive == "kidsshutsujin"){
    $("#pattern button.nokids").hide();
    $("#pattern button.kids").show();
  } else {
    $("#pattern button").show();
  }

  if (pocketActive && layerActive && $("#pattern button.ic").hasClass("active")){
    $("#color button.noic").hide();
    $("#color button.blk").show();
    $("#color button.ic").show();
  } else {
    $("#color button.noic").show();
    $("#color button.blk").hide();
    $("#color button.ic").show();
  }
};

var setShopCookie = function(){
  var shopActive = $("#shops button.active").val();
  Cookies.set('shop', shopActive, { expires: 7 });
};

var getShopCookie = function(){
  var shopCookie = Cookies.get('shop');

  $("button.font-"+shopCookie).toggleClass("active");

  shopColor();

};

$(document)
  .ready(button0Disabled)
  .ready(button1Disabled)
  .ready(function() {
    var btn = "#shops button, #jeans button, #pocket button, #layer button, #pattern button, #color button";
    var btn1 = "#pocket button, #layer button, #pattern button";
    var btn2 = "#pattern button, #color button";

    $(btn)
      .click(activeButton)
      .click(shopColor)
      .click(button0Disabled)
      .click(button1Disabled);

    $(btn1)
      .click(buttonColor);

    $(btn2)
      .click(svgChange);

    $("#color button")
      .click(buttonColor);

    $("#shops button")
      .click(buttonColor)
      .click(svgShop)
      .click(jeansReset)
      .click(jeans)
      .click(setShopCookie);

    $("#jeans button, #reset")
      .click(jeans);

    $("#reset")
      .click(button0Disabled)
      .click(button1Disabled)
      .click(reset);

    })
  .ready(getShopCookie);
