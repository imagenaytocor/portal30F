jQuery.noConflict();
(function($) {
$(function(){
	/*
	https://github.com/CSS-Tricks/AnythingSlider/issues/414
	IF browser width is more or equal to 320, I want my slider to showMultiple: 1 & changeBy: 1 
	IF browser width is more or equal to 640, I want my slider to showMultiple: 2 & changeBy: 1 
	IF browser width is more or equal to 960, I want my slider to showMultiple: 3 & changeBy: 1
	*/
	
	var multi, w, timer, slider = jQuery('#S1322783534817'),
	    win = $(window),
	    checkWidth = function() {
	        multi = 3;
	        w = win.width();
	        if (w <= 480) {
	        	multi = 3;
	        } else if (w >= 481 && w < 640) {
	        	multi = 5;
	        } else {
	        	multi = 6;
	        }
	      	                
	      	// update AnythingSlider
	        slider.data('AnythingSlider').options.showMultiple = multi;
	        slider.anythingSlider();
	
	        // show width for demo
	        $('#S1322783534817').addClass('multi'+multi);
	    };
	
		checkWidth();
	
	win.resize(function() {
	    clearTimeout(timer);
	    // throttle the resize check
	    timer = setTimeout(function() {
	        checkWidth();
	    }, 200);
	});
		});
		})(jQuery);