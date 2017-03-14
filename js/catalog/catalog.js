var jsonObject;

$(function(){
  console.log("Catalog Page Loaded");

  // THIS JQUERY REQUEST GET's ALL ITEMS
  $.getJSON( "js/catalog.json", function( data ) {
    jsonObject = data;
    getTodos(0);
  });

});

function getTodos(par){
  $("#catalog-section").empty();
  getPlumas(par);
  getLlaveros(par);
  getTermos(par);
  getTazas(par);
  getUSB(par);
}

function getPlumas(par){
  if(par == 1){
    $("#catalog-section").empty();
  }
  for (var i = 0; i < jsonObject.plumas.length; i++) {
    $("#catalog-section").append(
      "<div class='col-xs-12 col-sm-6 col-md-3 col-lg-3'>"+
      "<div id='"+jsonObject.plumas[i].productoID+"'class='thumbnail'>"+
        "<img src='assets/products/"+jsonObject.plumas[i].url +"'>" +
        "<div class='caption'>"+
          "<p>"+ jsonObject.plumas[i].productoNombre +"</p>"+
          "<p>"+ jsonObject.plumas[i].productoDescripcion +"</p>"+
        "</div>"+
      "</div>"+
      "</div>"
    );
  }
}

function getLlaveros(par) {
  if(par == 1){
    $("#catalog-section").empty();
  }
  for (var i = 0; i < jsonObject.llaveros.length; i++) {
    $("#catalog-section").append(
      "<div class='col-xs-12 col-sm-6 col-md-3 col-lg-3'>"+
      "<div class='thumbnail'>"+
        "<img src='assets/products/"+jsonObject.llaveros[i].url +"'>" +
        "<div class='caption'>"+
          "<p>...</p>"+
        "</div>"+
      "</div>"+
      "</div>"
    );
  }
}

function getTermos(par) {
  if(par == 1){
    $("#catalog-section").empty();
  }
  for (var i = 0; i < jsonObject.termos.length; i++) {
    $("#catalog-section").append(
      "<div class='col-xs-12 col-sm-6 col-md-3 col-lg-3'>"+
      "<div class='thumbnail'>"+
        "<img src='assets/products/"+jsonObject.termos[i].url +"'>" +
        "<div class='caption'>"+
          "<p>...</p>"+
        "</div>"+
      "</div>"+
      "</div>"
    );
  }
}

function getTazas(par) {
  if(par == 1){
    $("#catalog-section").empty();
  }
  for (var i = 0; i < jsonObject.tazas.length; i++) {
    $("#catalog-section").append(
      "<div class='col-xs-12 col-sm-6 col-md-3 col-lg-3'>"+
      "<div class='thumbnail'>"+
        "<img src='assets/products/"+jsonObject.tazas[i].url +"'>" +
        "<div class='caption'>"+
          "<p>...</p>"+
        "</div>"+
      "</div>"+
      "</div>"
    );
  }
}

function getUSB(par) {
  if(par == 1){
    $("#catalog-section").empty();
  }
  for (var i = 0; i < jsonObject.usb.length; i++) {
    $("#catalog-section").append(
      "<div class='col-xs-12 col-sm-6 col-md-3 col-lg-3'>"+
      "<div class='thumbnail'>"+
        "<img src='assets/products/"+jsonObject.usb[i].url +"'>" +
        "<div class='caption'>"+
          "<p>...</p>"+
        "</div>"+
      "</div>"+
      "</div>"
    );
  }
}

function setActiveTab(val){
  console.log(val);
  $(".option").removeClass("active");
  $("#"+val.id).addClass("active");
  // if($("#"+val.id).hasClass("active") == true){
  //   console.log(true);
  // }
}
