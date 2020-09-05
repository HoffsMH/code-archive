$( document ).ready(function() {

	var mhlogoshown = false;
	var mhtitleshown = false;

    //=======================================================
	//testing to see if our big background image is loaded
	$(".bgimage").ready(function() {
		$(".headerbginner").css("background-image", "url('images/headerbg.jpg')");
		
	});
	


    //=======================================================
	// scrolling animations
	function ScrollingAnimation() {
		// =======================================
		// parallax
		// =======================================
		var parallaxController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

		
		new ScrollMagic.Scene({triggerElement: "#parallax1"})
						.setTween(".headerbg", {y: "88%", ease: Linear.easeNone})
						// .setTween(".mylogosvg", {paddingTop:0, ease: Linear.easeNone})
						// .addIndicators()
						.addTo(parallaxController);
		// =============================================
		//
		// ===========================================
		var controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

		
		//blur 
		var blurElement = {a:0};
		//blur effect
		new ScrollMagic.Scene({duration: 250, triggerElement: ".spacer.s1", offset: 200})
						.setTween(blurElement, {a:1, ease: Linear.easeNone, onUpdate:applyBlur})
						// addIndicators()
						.addTo(controller2)
		
		
		function applyBlur()
		{
		    //TweenMax.set($('.headerbg'), {webkitFilter:"blur(" + blurElement.a + "px)", filter:"blur(" + blurElement.a + "px)"}); 
		    if (blurElement.a === 1) {
		    	//TweenMax.set($('.headerbg'), {webkitFilter:"blur(" + 15 + "px)", filter:"blur(" + 15 + "px)"}); 
		    	$('.headerbg').css("webkitFilter" ,"blur(15px)");
				$('.headerbg').css("filter","blur(15px)"); 
		    } else if (blurElement.a === 0) {
		    	//TweenMax.set($('.headerbg'), {webkitFilter:"blur(" + 0 + "px)", filter:"blur(" + 0 + "px)"}); 
		    	$('.headerbg').css("webkitFilter" ,"blur(0px)");
				$('.headerbg').css("filter","blur(0px)"); 

		    }
		};
		
		//rising gradient
		var gradient = {a:100};
		new ScrollMagic.Scene({duration: "100%", triggerElement: "#MyInterest", triggerHook: "onEnter", offset: 70})
						.setTween(gradient, {a:0, ease: Linear.easeNone, onUpdate:applyGradient})
						.addTo(controller2)
		function applyGradient () {
			
			//w3c
			TweenMax.set($('.container-full'), {backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1)" + Math.round(gradient.a) +"%,rgba(255,255,255,1) 100%)"});
			//moz
			TweenMax.set($('.container-full'), {backgroundImage: "-moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) " + Math.round(gradient.a) +"%, rgba(255,255,255,1) 100%)"});
			//webkit 4
			TweenMax.set($('.container-full'), {backgroundImage: "-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop("+ Math.round(gradient.a)+"%,rgba(255,255,255,1)), color-stop(100%,rgba(255,255,255,1)))"});
			
			// webkit
			TweenMax.set($('.container-full'), {backgroundImage: "-webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,1) "+ Math.round(gradient.a) +"%,rgba(255,255,255,1) 100%)"});

			// opera
			TweenMax.set($('.container-full'), {backgroundImage: "-o-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,1) "+ Math.round(gradient.a) +"%,rgba(255,255,255,1) 100%)"});

			// IE
			TweenMax.set($('.container-full'), {backgroundImage: "-ms-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,1) "+ Math.round(gradient.a) +"%,rgba(255,255,255,1) 100%)"});


		}

		
		
		var fadein = TweenMax.from(".fadein", 1, {opacity:0});
		var leftslideinabout = TweenMax.from(".leftslidein.himynameis", 1, {opacity:0, x:-100});
		//sliding in links
		var linkslide = TweenMax.staggerFrom(".mhlilink img, .mhmylinkh2", 1, {opacity:0, x:100}, 1);
		new ScrollMagic.Scene({duration: "50%", triggerElement: ".spacer.s1", triggerHook:"onEnter", offset: 150})
						.setTween(linkslide)
						// addIndicators()
						.addTo(controller2)
		
		//sliding in about
		new ScrollMagic.Scene({duration: "50%", triggerElement: ".himynameis", triggerHook:"onEnter" , offset:20})
						.setTween(leftslideinabout)
						// addIndicators()
						.addTo(controller2)
		new ScrollMagic.Scene({duration: "50%", triggerElement: ".imlernin", triggerHook:"onEnter" , offset:20})
						.setTween(fadein)
						// addIndicators()
						.addTo(controller2)


				
		var rightslideinkn = TweenMax.from(".rightslidein.knpslidein", 1, {opacity:0, x:100});
		var leftslideinkn = TweenMax.from(".leftslidein.knpslidein", 1, {opacity:0, x:-100});

		var rightslideinwp = TweenMax.from(".rightslidein.wpslidein", 1, {opacity:0, x:100});
		var leftslideinwp = TweenMax.from(".leftslidein.wpslidein", 1, {opacity:0, x:-100});


		var rightslideinmhc = TweenMax.from(".rightslidein.mhcslidein", 1, {opacity:0, x:100});
		var leftslideinmhc = TweenMax.from(".leftslidein.mhcslidein", 1, {opacity:0, x:-100});


		var rightslideinbc = TweenMax.from(".rightslidein.bcslidein", 1, {opacity:0, x:100});
		var leftslideinbc = TweenMax.from(".leftslidein.bcslidein", 1, {opacity:0, x:-100});
		
		
		
		


		
		new ScrollMagic.Scene({duration: "35%", triggerElement: ".rightslidein.knpslidein", triggerHook:"onEnter", offset:70})
						.setTween(rightslideinkn)
						// addIndicators()
						.addTo(controller2)
		new ScrollMagic.Scene({duration: "35%", triggerElement: ".leftslidein.knpslidein", triggerHook:"onEnter", offset:200})
						.setTween(leftslideinkn)
						// addIndicators()
						.addTo(controller2)



		



		new ScrollMagic.Scene({duration: "35%", triggerElement: ".rightslidein.wpslidein", triggerHook:"onEnter" , offset:70})
						.setTween(rightslideinwp)
						// addIndicators()
						.addTo(controller2)
		new ScrollMagic.Scene({duration: "35%", triggerElement: ".leftslidein.wpslidein", triggerHook:"onEnter" , offset:70})
						.setTween(leftslideinwp)
						// addIndicators()
						.addTo(controller2)



		new ScrollMagic.Scene({duration: "35%", triggerElement: ".rightslidein.mhcslidein", triggerHook:"onEnter" , offset:70})
						.setTween(rightslideinmhc)
						// addIndicators()
						.addTo(controller2)
		new ScrollMagic.Scene({duration: "35%", triggerElement: ".leftslidein.mhcslidein", triggerHook:"onEnter" , offset:70})
						.setTween(leftslideinmhc)
						// addIndicators()
						.addTo(controller2)



		new ScrollMagic.Scene({duration: "35%", triggerElement: ".rightslidein.bcslidein", triggerHook:"onEnter" , offset:70})
						.setTween(rightslideinbc)
						// addIndicators()
						.addTo(controller2)
		new ScrollMagic.Scene({duration: "35%", triggerElement: ".leftslidein.bcslidein", triggerHook:"onEnter" , offset:70})
						.setTween(leftslideinbc)
						// addIndicators()
						.addTo(controller2)
	}
	//http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
	function internlinkAnimation() {
		$('a[href^="#"]:not(.carousel-control)').on('click',function (e) {
		    e.preventDefault();

		    var target = this.hash;
		    var $target = $(target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 1500, 'swing', function () {
		        window.location.hash = target;
		    });
		});
	}
	//non mobile version of headerbg
	function loadbgAnimation () {
		$(".headerbg").css("top", "-80%");
		TweenMax.to(".headerbginner", 1, {opacity:1, ease: Linear.easeNone, onComplete:logoAnimation})
		$('.headerbg').css("webkitFilter" ,"blur(15px)");
		$('.headerbg').css("filter","blur(15px)"); 

		$('.headerbg').css("webkitFilter" ,"blur(0px)");
		$('.headerbg').css("filter","blur(0px)"); 

	}
	// mobile version of headerbg
	function loadbgAnimationmobile () {
		$(".headerbg").css("top", "-8%")
		TweenMax.to(".headerbginner", 1, {opacity:1, ease: Linear.easeNone, onComplete:logoAnimation});

	}

	
	function logoAnimation() {
		
		if (!mhlogoshown) {
			var controller1 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});
			
			var logotween = TweenMax.from(".mylogosvg", 1, {opacity:1, ease: Linear.easeNone});
			//disappear logo
			new ScrollMagic.Scene({duration: 200, triggerElement: ".spacer.s1"})
							.setTween(logotween)
							// addIndicators()
							.addTo(controller1)

			if (!(TweenMax.isTweening(".mylogosubtitle")) && !(TweenMax.isTweening(".mylogosubsubtitle"))) {
				//disapper sub title
				new ScrollMagic.Scene({duration: 200, triggerElement: ".spacer.s1", offset: 200})
								.setTween(".mylogosubtitle", {opacity: 0, ease: Linear.easeNone})
								// addIndicators()
								.addTo(controller1)
				//disappear sub sub title
				new ScrollMagic.Scene({duration: 250, triggerElement: ".spacer.s1", offset: 150})
								.setTween(".mylogosubsubtitle", {opacity: 0, ease: Linear.easeNone})
								// addIndicators()
								.addTo(controller1)
				new ScrollMagic.Scene({duration: 200, triggerElement: ".spacer.s1", offset: 150})
								.setTween(".mychevrondiv", {opacity: 0, ease: Linear.easeNone})
								// addIndicators()
								.addTo(controller1)
			}
		}
		
		if ((TweenMax.isTweening(".mylogopathcircle") === false) && (TweenMax.isTweening(".mylogosvgouter") === false)) {

			//====
			//logo
			//===
			if (!mhtitleshown  && !(TweenMax.isTweening(".mylogosubtitle")) && !(TweenMax.isTweening(".mylogosubsubtitle"))) {
				TweenMax.to(".mylogosubtitle", .6, {opacity:1});
				TweenMax.to(".mylogosubsubtitle", .6, {opacity:1, delay: .5});
				TweenMax.to("#mainnav", .6, {opacity:1});
				TweenMax.to(".mychevrondiv", .6, {opacity:1, delay: 2.8})

				mhtitleshown = true;
			}

			
			 $(".mylogosvgouter").css("opacity", "0");
			TweenMax.to(".mylogosvgouter", .6, {opacity:1, delay: .4})
			
			TweenMax.from(".mylogopathcircle", 2.3, {strokeDashoffset:1512})

			TweenMax.from(".mylogopathline1", 2, {strokeDashoffset:353.888})
			
			TweenMax.from(".mylogopathline2", 2, {strokeDashoffset:197.705})

			TweenMax.from(".mylogopathline3", 2, {strokeDashoffset:248.66})

			TweenMax.from(".mylogopathline4", 2, {strokeDashoffset:480})

			TweenMax.from(".mylogopathline5", 2, {strokeDashoffset:370.26})

			TweenMax.from(".mylogopathline6", 2, {strokeDashoffset:239})
			mhlogoshown = true;
		}
	}
	
	//=======================================================
	//this is where we make our calls
	
	
	//let the user play with the logo animation
	$(".mylogosvg").on("click", logoAnimation);

	//style we only want to load after page load  that messes with page load
		$("#mainnav").css("position", "relative")

	//check for mobile
	if((jQuery.browser.mobile) || (isiPad()))
	{
		loadbgAnimationmobile();

		
	}
	else
	{
		loadbgAnimation();
		internlinkAnimation();
		ScrollingAnimation();
	}
	
	function isiPad(){
    return (navigator.platform.indexOf("iPad") != -1);
	}
	
	



});