function ScrollingAnimation() {
  var controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});
  var slideInCard = TweenMax.from("#main-card", 1, {opacity:0, x:-100});
  
  new ScrollMagic.Scene({duration: "30%", triggerElement: "#main-card", triggerHook:"onEnter", offset:70})
  .setTween(slideInCard)
  .addTo(controller2);
}
