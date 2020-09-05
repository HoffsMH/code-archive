$( document ).ready(function() {
  var mhlogoshown = false;
  var mhtitleshown = false;

  //let the user play with the logo animation
  $(".mylogosvg").on("click", logoAnimation);

    loadbgAnimation();
    ScrollingAnimation();
});
