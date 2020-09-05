function logoAnimation() {
  var mhLogoShown = false;
  var mhTitleIsShown = false;
  var logoController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});
  var svgLineLengths = [353.888, 197.705, 248.66, 480, 370.26, 239];

  if (!mhLogoShown) {
    var logoTween = TweenMax.from(".mylogosvg", 1, {opacity:1, ease: Linear.easeNone});
    //disappear logo
    new ScrollMagic.Scene({duration: 200, triggerElement: ".spacer.s1"})
            .setTween(logoTween)
            .addTo(logoController);
  }

  if (!mhTitleIsShown  && !subtitleIsTweening() ) {
    TweenMax.to(".mylogosubtitle", 0.6, {opacity:1});
    TweenMax.to("#mainnav", 0.6, {opacity:1});
    TweenMax.to(".mychevrondiv", 0.6, {opacity:1, delay: 2.8});
    mhTitleIsShown = true;
  }
  if (!logoIsTweening()) {
     $(".mylogosvgouter").css("opacity", "0");
    TweenMax.to(".mylogosvgouter", 0.6, {opacity:1, delay: 0.4});

    TweenMax.from(".mylogopathcircle", 2.3, {strokeDashoffset:1512});

    $.each(svgLineLengths, function(index, length){
      var suffix = index + 1;
      TweenMax.from(".mylogopathline" + suffix, 2, {strokeDashoffset: length});
    });
    mhLogoShown = true;
  }
}

function logoIsTweening() {
  return ( TweenMax.isTweening(".mylogopathcircle") &&
           TweenMax.isTweening(".mylogosvgouter")   );
}

function subtitleIsTweening() {
  return ( TweenMax.isTweening(".mylogosubtitle") );
}
