$(document).ready(function () {
  var parallaxController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

  new ScrollMagic.Scene({triggerElement: "#parallax1"})
  .setTween(".headerbg", {y: "88%", ease: Linear.easeNone})
  .addTo(parallaxController);
});
