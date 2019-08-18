var activeButton = function() {
  $(this).toggleClass("active").siblings().removeClass('active');
};

var shopColor = function() {
  var shop = "ajino okayama aoyama koenji hiroshima osaka kyoto";
  var fontShop = "font-ajino font-okayama font-aoyama font-koenji font-hiroshima font-osaka font-kyoto";
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
};

var buttonColor = function() {
  var shop = "ajino okayama aoyama koenji hiroshima osaka kyoto";
  var shopActive = $("#shops button.active").val();
  var color = "white red pink pearl gold";
  var colorActive = $("#color button.active").val();

  $("#pocket button, #layer button, #pattern button").removeClass(shop);
  $("#shopColor").removeClass(shop);
  $("#color button").removeClass(color);
  $("#pocket button.active, #layer button.active, #pattern button.active").addClass(shopActive);
  $("#shopColor.active").addClass(shopActive);
  $("#color button.active").addClass(colorActive);
};

var changeImage = function() {
  var sO = $("#shops button.active").val();
  var pcktO = $("#pocket button.active").val();
  var lO = $("#layer button.active").val();
  var pO = $("#pattern button.active").val();
  var cO = $("#color button.active").val();

  if (cO == "white" || cO == "red" || cO == "pink" || cO == "pearl" || cO == "gold") {
    $("#" + pcktO + lO).attr("src", "img/" + cO + "/" + pO + ".png");
    $("#" + pcktO + lO).attr("name", pcktO + lO + cO + pO);
  } else if ($("#shopColor").hasClass("active")) {
    $("#" + pcktO + lO).attr("src", "img/" + sO + "/" + pO + ".png");
    $("#" + pcktO + lO).attr("name", pcktO + lO + sO + pO);
  }
};

var imgShop = function(){
  var imgID = ["lP","rP"];
  var imgShop = ["ajino", "okayama", "aoyama", "koenji", "hiroshima", "osaka", "kyoto"];
  var imgPattern = ["s", "sk", "sm", "k", "o", "mt", "mi", "ji"];
  var shopOption = $("#shops button.active").val();

  for(var i=0; i<imgID.length; i++){
    for(var j=0;j<4;j++){
      for(var k=0;k<imgShop.length; k++){
        for(var l=0;l<imgPattern.length;l++){
          var imgSrc = $("#" + imgID[i] + j).attr('src');
          if (imgSrc == "img/" + imgShop[k] + "/" + imgPattern[l] + ".png") {
            $("#" + imgID[i] + j).attr("src", "img/" + shopOption + "/" + imgPattern[l] + ".png");
          }
        }
      }
    }
  }
};

var jeans = function() {
  var jeansActive = $("#jeans button.active").val();

  if (jeansActive == "shutsujin") {
    $("#rP1").attr("src", "img/white/s.png");
    $(".dotan, .dotanShadow").css("display", "None");
    $("#labelText").html("出陣");
  } else if (jeansActive == "dotan") {
    $(".dotan, .dotanShadow").css("display", "inline");
    $("#labelText").html("銅丹");
  } else {
    $(".dotan, .dotanShadow").css("display", "None");
    $("#labelText").html("ヴィンテージ");
  }
};

var reset = function() {
  var shop = "ajino okayama aoyama koenji hiroshima osaka kyoto";
  var color = "white red pink pearl gold";
  var active = "#pocket button, #layer button, #pattern button, #color button";

  $(active).removeClass(shop+" active "+color);
  $("#lP1").attr("src", "img/blank.png");
  $("#lP2").attr("src", "img/blank.png");
  $("#lP3").attr("src", "img/blank.png");
  $("#lP4").attr("src", "img/blank.png");
  $("#rP1").attr("src", "img/blank.png");
  $("#rP2").attr("src", "img/blank.png");
  $("#rP3").attr("src", "img/blank.png");
  $("#rP4").attr("src", "img/blank.png");
};

var shutsujinDisabled = function() {
  if ($("#jeans button.active").val() == "shutsujin" && $("#pocket button.active").val() == "rP") {
    $("#l1").prop('disabled', true);
    $("#l1").removeClass('active');
  } else {
    $("#l1").prop('disabled', false);
  };
};

var buttonDisabled = function(){
  var btn1 = "#pocket button, #layer button";
  var btn2 = "#pattern button, #color button";
  var shopsActive = $("#shops button").hasClass("active");
  var pocketActive = $("#pocket button").hasClass("active");
  var layerActive = $("#layer button").hasClass("active");

  if (shopsActive) {
      $(btn1).prop('disabled', false);
  } else {
      $(btn1).prop('disabled', true);
  }
  if (pocketActive && layerActive){
      $(btn2).prop('disabled', false);
  } else {
      $(btn2).prop('disabled', true);
  }
};

var setShopCookie = function(){
  var shopActive = $("#shops button.active").val();
  Cookies.set('shop', shopActive, { expires: 7 });
};

var getShopCookie = function(){
  var shopCookie = Cookies.get('shop');;

  $("button.font-"+shopCookie).trigger(click);

};

$(document)
  .ready(getShopCookie)
  .ready(buttonDisabled)
  .ready(function() {
    var btn = "#shops button, #jeans button, #pocket button, #layer button, #pattern button, #color button";
    var btn1 = "#pocket button, #layer button, #pattern button";
    var btn2 = "#pattern button, #color button";
    var btn3 = "#pocket button, #layer button";

    $(btn)
      .click(activeButton);

    $(btn1)
      .click(buttonColor);

    $(btn2)
      .click(changeImage);

    $(btn3)
      .click(buttonDisabled)
      .click(shutsujinDisabled);

    $("#color button")
      .click(buttonColor);

    $("#pocket button")
      .click(shutsujinDisabled);

    $("#shops button")
      .click(shopColor)
      .click(buttonColor)
      .click(imgShop)
      .click(buttonDisabled)
      .click(shutsujinDisabled)
      .click(setShopCookie);

    $("#jeans button, #reset")
      .click(reset)
      .click(jeans);

    $("#reset")
      .click(shutsujinDisabled)
      .click(buttonDisabled);

  });
