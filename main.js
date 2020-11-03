//creo funzione epr bottone next
$(".next").click(function(){
  var imgActiveEl = $("img.active");
  imgActiveEl.removeClass("active");

  if(imgActiveEl.hasClass("last")){
    $(".first").addClass("active");
  }else{
    imgActiveEl.next().addClass("active");
  }
})
//creo funzione per bottone prev
$(".prev").click(function(){
  var imgActiveEl = $("img.active");
  imgActiveEl.removeClass("active");

  if(imgActiveEl.hasClass("first")){
    $(".last").addClass("active");
  }else{
    imgActiveEl.prev().addClass("active");
  }
})
