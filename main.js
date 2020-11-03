//creo funzione epr bottone next
$(".next").click(function(){
  var imgActiveEl = $("img.active");
  imgActiveEl.removeClass("active");

  if(imgActiveEl.hasClass("last")){
    $(".first").addClass("active");
  }else{
    imgActiveEl.next().addClass("active");
  }
  var dotActiveEl = $("i.active");
  dotActiveEl.removeClass("active");

  if(dotActiveEl.hasClass("last")){
    $(".first").addClass("active");
  }else{
    dotActiveEl.next().addClass("active");
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
  var dotActiveEl = $("i.active");
  dotActiveEl.removeClass("active");

  if(dotActiveEl.hasClass("first")){
    $(".last").addClass("active");
  }else{
    dotActiveEl.prev().addClass("active");
  }
})

// $("i").click(function(){
//
//   $("i").removeClass("active")
//   $(this).addClass("active");


//
// })
