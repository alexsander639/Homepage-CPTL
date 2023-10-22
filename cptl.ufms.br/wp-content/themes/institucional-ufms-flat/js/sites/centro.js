jQuery(document).ready(function($) {
	jQuery("#destaques").show();
	jQuery('#destaques').flexslider({					// slider settings
		animation: "slide",								// animation style
	
		slideshow: true,								// enable automatic sliding
		directionNav: true,								// disable nav arrows
		slideshowSpeed: 6000,   						// slider speed
		smoothHeight: false,
		nextText: '',
		prevText: '' 
		
	});
});