(function($) {
  $.fn.invisible = function() {
      return this.each(function() {
          $(this).css("visibility", "hidden");
      });
  };
  $.fn.visible = function() {
      return this.each(function() {
          $(this).css("visibility", "visible");
      });
  };
}(jQuery));

function activeButton() {
  $(this).toggleClass("active").siblings().removeClass('active')
}

function shopColor() {
  var shop = "ajino okayama aoyama koenji osaka kyoto web momoshop"
  var fontShop = "font-ajino font-okayama font-aoyama font-koenji font-osaka font-kyoto font-web font-momoshop"
  var shopActiveValue = $("#shops button.active").val()
  var shopActiveText = $("#shops button.active").html()
  var shopActive = $("#shops button").hasClass("active")

  if (shopActive) {
    $("header").removeClass("w3-black " + shop).addClass(shopActiveValue)
    $("#shopText").html(shopActiveText)
    $("#shopText").removeClass("font-black "+fontShop).addClass("font-"+shopActiveValue)
  } else {
    $("header").removeClass(shop).addClass("w3-black")
    $("#shopText").html("店舗")
    $("#shopText").removeClass(fontShop).addClass("font-black")
  }

  if ($("#shops button.active").val() == "ajino") {
    $("#jeans button.ajinolimited").show()
    $("#jeans button.ajinolimited").show()
  } else {
    $("#jeans .ajinolimited").hide()
    $("#jeans .ajinolimited").hide()
  }

}

function buttonColor() {
  var shop = "ajino okayama aoyama koenji osaka kyoto web momoshop"
  var shopActive = $("#shops button.active").val()
  var color = "white red pink pearl gold black"
  var colorActive = $("#color button.active").val()

  $("#pocket button, #layer button, #pattern button").removeClass(shop)
  $("#shopColor").removeClass(shop)
  $("#color button").removeClass(color)
  $("#pocket button.active, #layer button.active, #pattern button.active").addClass(shopActive)
  $("#shopColor.active").addClass(shopActive)
  $("#color button.active").addClass(colorActive)
}

function jeans() {
  var jeansActive = $("#jeans button.active").val()

  if (jeansActive == "shutsujin") {
    $("#labelText").html("出陣")
    $("#locksp, #locksp .lockspup, #locksp .lockspdwn").show().css("fill","#fff")
    $(".stitchdoutan").hide()
    $(".pocket").show().css("fill","#01060C")
    $("#rP, #lP").css("padding","16px")
  } else if (jeansActive == "blkshutsujin") {
    $("#labelText").html("ブラック出陣")
    $("#locksp, #locksp .lockspup, #locksp .lockspdwn").show().css("fill","#fff")
    $(".stitchdoutan").hide()
    $(".pocket").show().css("fill","#000")
    $("#rP, #lP").css("padding","16px")
  } else if (jeansActive == "pnkshutsujin") {
    $("#labelText").html("ピンク出陣")
    $("#locksp, #locksp .lockspup, #locksp .lockspdwn").show().css("fill","#F26284")
    $(".stitchdoutan").hide()
    $(".pocket").show().css("fill","#14203b")
    $("#rP, #lP").css("padding","16px")
  } else if (jeansActive == "deepdotan") {
    $("#labelText").html("特濃銅丹")
    $("#locksp, .lockspup, .lockspdwn").hide()
    $(".stitchdoutan").show()
    $(".pocket").show().css("fill","#01060C")
    $("#rP, #lP").css("padding","16px")
  } else if (jeansActive == "dotan") {
    $("#labelText").html("銅丹")
    $("#locksp, .lockspup, .lockspdwn").hide()
    $(".stitchdoutan").show()
    $(".pocket").show().css("fill","#14203b")
    $("#rP, #lP").css("padding","16px")
  } else if (jeansActive == "ladiesdotan") {
    $("#labelText").html("レディース銅丹")
    $("#locksp, .lockspup, .lockspdwn").hide()
    $(".stitchdoutan").show()
    $(".pocket").show().css("fill","#19312d")
    $("#rP, #lP").css("padding","16px")
  } else if (jeansActive == "vintage") {
    $("#labelText").html("ヴィンテージ")
    $("#locksp, .lockspup, .lockspdwn, .stitchdoutan").hide()
    $(".pocket").show().css("fill","#01060C")
    $("#rP, #lP").css("padding","16px")
  } else if (jeansActive == "kidsshutsujin") {
    $("#labelText").html("キッズ出陣")
    $("#locksp, #locksp .lockspup, #locksp .lockspdwn").show().css("fill","#fff")
    $(".stitchdoutan").hide()
    $(".pocket").show().css("fill","#01060C")
    $("#rP, #lP").css("padding","48px")
  } else if (jeansActive == "kidsdotan") {
    $("#labelText").html("キッズ銅丹")
    $("#locksp, .lockspup, .lockspdwn").hide()
    $(".stitchdoutan").show()
    $("#rP, #lP").css("padding","48px")
  } else if (jeansActive == "ajinoup") {
    $("#labelText").html("AJ-SK")
    $("#locksp").show()
    $("#locksp .lockspup").show().css("fill","#0072BC")
    $("#locksp .lockspdwn").show().css("fill","#fff")
    $(".stitchdoutan").hide()
    $(".pocket").show().css("fill","#01060C")
    $("#rP, #lP").css("padding","16px")
  } else if (jeansActive == "ajinodwn") {
    $("#labelText").html("AJ0205")
    $("#locksp").show()
    $("#locksp .lockspup").show().css("fill","#fff")
    $("#locksp .lockspdwn").show().css("fill","#0072BC")
    $(".stitchdoutan").hide()
    $(".pocket").show().css("fill","#01060C")
    $("#rP, #lP").css("padding","16px")
  }
}

function jeansReset(){
  if ($("#jeans button.active").hasClass("ajinolimited")){
    $("#jeans button.active").toggleClass("active")
    $(":button[value=shutsujin]").toggleClass("active")
    $("#labelText").html("出陣")
  }
}

function svgChange() {
  var shopActive = $("#shops button.active").val()
  var pocketActive = $("#pocket button.active").val()
  var layerActive = $("#layer button.active").val()
  var patternActive = $("#pattern button.active").val()
  var colorActive = $("#color button.active").val()
  var svgLayer = layerActive - 1
  var color = ["white", "red", "pink", "pearl", "gold", "black", "ajino", "okayama", "aoyama", "koenji", "osaka", "kyoto", "web", "momoshop"]

  for(var i=0; i<color.length; i++){
    $("#"+pocketActive+" .z"+layerActive).removeClass("svg"+color[i])
  }

  $("#"+pocketActive+" .z"+layerActive).removeClass("z"+layerActive).hide()

  if ($(":button[value=ichimatsu]").hasClass("active") && !$("#color button.ichim").hasClass("active")){
    $("#color button.active").removeClass("active")
    $(":button[value=black]").addClass("active")
    $("#"+pocketActive+" ."+patternActive).addClass("z"+layerActive+" svgblack").show()
    buttonColor()
  } else if (!$("#pattern :button[value=ichimatsu]").hasClass("active") && $("button.blk").hasClass("active")){
    $("#color button.active").removeClass("active")
    $(":button[value=white]").addClass("active white")
    $("#"+pocketActive+" ."+patternActive).addClass("z"+layerActive+" svgwhite").show()
    buttonColor()
  } else {
    $("#"+pocketActive+" ."+patternActive).addClass("z"+layerActive+" svg"+colorActive).show()
  };

  if ($("#"+pocketActive+" ."+patternActive).hasClass("svgshopColor")) {
    $("#"+pocketActive+" .z"+layerActive).removeClass("svgshopColor")
    $("#"+pocketActive+" .z"+layerActive).addClass("svg"+shopActive)
  }

  $("#"+pocketActive+" .z"+layerActive).insertAfter($("#"+pocketActive+" .z"+svgLayer)).show()

}

function svgShop() {
  var shopActive = $("#shops button.active").val()
  var layerActive = $("#layer button.active").val()
  var shopColor = ["ajino", "okayama", "aoyama", "koenji", "osaka", "kyoto", "web", "momoshop"]

  for (var i=1; i<4; i++){
    for (var j=0; j<shopColor.length; j++){
      if ($(".z"+ i ).hasClass("svg"+shopColor[j])){
        $(".z"+ i ).removeClass("svg"+shopColor[j]).addClass("svg"+shopActive)
      }
    }
  }
}

function reset() {
  var shop = "ajino okayama aoyama koenji osaka kyoto web momoshop"
  var color = "white red pink pearl gold black"
  var active = "#pocket button, #layer button, #pattern button, #color button"
  var btn1 = "#pattern button, #color button"
  var btn0 = "#pocket button, #layer button"
  var c = ["white", "red", "pink", "pearl", "gold", "ajino", "okayama", "aoyama", "koenji", "osaka", "kyoto", "web", "momoshop"]

  for(var j=1; j<4; j++){
    for(var i=0; i<c.length; i++){
      $(".z"+[j]).removeClass("svg"+c[i])
    }

    $(".z"+[j]).hide().removeClass(this)
  }
  $(".spup").css("display", "")
  $(".spdwn").css("display", "")
  $(btn0, btn1).removeClass("active")
  $(btn1).prop('disabled', true)
  $("#pocket button, #layer button, #pattern button").removeClass(shop+" active")
  $("#color button").removeClass(color+" active")
}

function button0Disabled(){
  var btn0 = "#pocket button, #layer button"
  var shopsActive = $("#shops button").hasClass("active")

  if (shopsActive) {
    $(btn0).prop('disabled', false)
  } else {
    $(btn0).prop('disabled', true)
  }
}

function button1Disabled(){
  var btn1 = "#pattern button, #color button"
  var shopsActive = $("#shops button").hasClass("active")
  var pocketActive = $("#pocket button").hasClass("active")
  var layerActive = $("#layer button").hasClass("active")
  var jeansActive = $("#jeans button.active").val()

  if (pocketActive && layerActive){
    $(btn1).prop('disabled', false)
  } else {
    $(btn1).prop('disabled', true)
  }

  if (jeansActive == "kidsdotan"){
    $("#pattern button.nokids").hide()
    $("#pattern button.kids").show()
  } else if (jeansActive == "kidsshutsujin"){
    $("#pattern button.nokids").hide()
    $("#pattern button.kids").show()
  } else {
    $("#pattern button").show()
  }

  if (pocketActive && layerActive && $("#pattern button.ic").hasClass("active")){
    $("#color button.noic").hide()
    $("#color button.blk").show()
    $("#color button.ic").show()
  } else {
    $("#color button.noic").show()
    $("#color button.blk").hide()
    $("#color button.ic").show()
  }
}

function setShopCookie(){
  var shopActive = $("#shops button.active").val()
  Cookies.set('shop', shopActive, { expires: 7 })
}

function getShopCookie(){
  var shopCookie = Cookies.get('shop')

  $("button.font-"+shopCookie).toggleClass("active")

  shopColor()

}

function printFormShow(){
  $("header").hide()
  $(".pocketmenu").hide()
  $("#pattern").hide()
  $("#color").hide()
  $(".svgContainer").hide()
  $("#printForm").show()
}

function resetPrint() {
  var LR = ["l", "r"]
  var pattern = ["sp", "ichimatsu", "spka", "spmo", "momotaro", "oni", "kanji", "kamon", "momochan"]
  var patternText = ["#SP　出陣ライン", "#IC　出陣市松", "#SK　出陣家紋", "#SM　出陣桃", "#MO　写楽桃太郎", "#ON　写楽鬼", "#MJ　桃太郎文字", "#KP　家紋", "#MT　桃太郎"]
  var color = ["white", "red", "pink", "pearl", "gold", "ajino", "okayama", "aoyama", "koenji", "osaka", "kyoto", "web", "momoshop"]
  var colorText = ["ホワイト", "レッド", "ピンク", "ピンクパール", "ゴールド", "味野ブルー", "マスカットグリーン", "ダークグレー", "パープル", "イエロー", "ブラウン", "オレンジ", "サンドベージュ"]
  var shop = $("#shopText").html();

  $(".printFromShop").html("");
  $(".paintCounter").html("");

  for (var j = 0; j < LR.length; j++) {
    for (var i = 1; i < 4; i++) {
      for (var h = 0; h < pattern.length; h++) {
        if ($("#"+LR[j]+"P .z"+[i]).hasClass(pattern[h])) {
          $("#"+LR[j]+"Pockets .zshow"+[i]+" .patternCode").html("")
        }
      }
      for (var g = 0; g < color.length; g++) {
        if ($("#"+LR[j]+"P .z"+[i]).hasClass("svg"+color[g])) {
          $("#"+LR[j]+"Pockets .zshow"+[i]+" .colorCode").html("")
        }
      }
    }
  }
}

function load() {
  var LR = ["l", "r"]
  var pattern = ["sp", "ichimatsu", "spka", "spmo", "momotaro", "oni", "kanji", "kamon", "momochan"]
  var patternText = ["#SP　出陣ライン", "#IC　出陣市松", "#SK　出陣家紋", "#SM　出陣桃", "#MO　写楽桃太郎", "#ON　写楽鬼", "#MJ　桃太郎文字", "#KP　家紋", "#MT　桃太郎"]
  var color = ["white", "red", "pink", "pearl", "gold", "black", "ajino", "okayama", "aoyama", "koenji", "osaka", "kyoto", "web", "momoshop"]
  var colorText = ["ホワイト", "レッド", "ピンク", "ピンクパール", "ゴールド", "ブラック", "味野ブルー", "マスカットグリーン", "ダークグレー", "パープル", "イエロー", "ブラウン", "オレンジ", "サンドベージュ"]
  var paintCounter = 0
  var shop = $("#shopText").html()

  $(".printFromShop").append(shop+"・")

  for (var j = 0; j < LR.length; j++) {
    for (var i = 1; i < 4; i++) {

      if ($("#"+LR[j]+"P .z"+[i])[0]) {
        $("#"+LR[j]+"P .z"+[i]).clone().appendTo("#"+LR[j]+"Pockets .svgPrint"+[i])
        $("#"+LR[j]+"Pockets .zshow"+[i]).visible()
        paintCounter = paintCounter + 1
      } else {
        $("#"+LR[j]+"Pockets .zshow"+[i]).invisible()
      }

      for (var h = 0; h < pattern.length; h++) {
        if ($("#"+LR[j]+"P .z"+[i]).hasClass(pattern[h])) {
          $("#"+LR[j]+"Pockets .zshow"+[i]+" .patternCode").append("D/"+patternText[h])
        }
      }

      for (var g = 0; g < color.length; g++) {
        if ($("#"+LR[j]+"P .z"+[i]).hasClass("svg"+color[g])) {
          $("#"+LR[j]+"Pockets .zshow"+[i]+" .colorCode").append(colorText[g])
        }
      }
    }
  }

  $(".paintCounter").append(paintCounter)

}

function printIt(){
  setTimeout(function(){
    window.print()
  }, 100)
}

function date() {
  var dateObj = new Date()
  var month = dateObj.getUTCMonth() + 1
  var day = dateObj.getUTCDate()
  var year = dateObj.getUTCFullYear()

  $(".date").append(year + '年　' + month + '月　' + day + '日')
}

function getBack(){
  $("header").show()
  $(".pocketmenu").show()
  $("#pattern").show()
  $("#color").show()
  $(".svgContainer").show()
  $("#printForm").hide()
  resetPrint()
}

$(document)
  .ready(getShopCookie)
  .ready(button0Disabled)
  .ready(button1Disabled)
  .ready(reset)
  .ready(date)
  .ready(function() {
    var btn = "#shops button, #jeans button, #pocket button, #layer button, #pattern button, #color button"
    var btn1 = "#pocket button, #layer button, #pattern button"
    var btn2 = "#pattern button, #color button"

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

    $(":button[id=print]")
      .click(load)
      .click(printFormShow)
      .click(printIt);

    $(":button[id=getBack]")
      .click(getBack)
      .click(getShopCookie);
    });
