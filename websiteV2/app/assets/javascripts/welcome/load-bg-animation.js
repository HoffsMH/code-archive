function loadbgAnimation () {
  $(".headerbg").css("top", "-80%");
  TweenMax.to(".headerbginner", 1, {opacity:1, ease: Linear.easeNone, onComplete:logoAnimation});
  $('.headerbg').css("webkitFilter" ,"blur(15px)");
  $('.headerbg').css("filter","blur(15px)");
  $('.headerbg').css("webkitFilter" ,"blur(0px)");
  $('.headerbg').css("filter","blur(0px)");
}
