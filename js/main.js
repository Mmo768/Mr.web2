$(window,document).scroll(function(){

  if($(window,document).scrollTop()>40){
    $("nav").addClass("scro");
  }else{
    $("nav").removeClass("scro"); 
  };


});


$(".nav-link").click(function(e){
  e.preventDefault();
  $("body,html").animate({"scrollTop":$($(this).attr("href")).offset().top},200);
})