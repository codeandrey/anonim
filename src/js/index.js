import jQuery from 'jquery';
import slick from 'slick-carousel';

jQuery(function() {
    jQuery(".slider").slick({
    	dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		nextArrow: '<button type="button" class="slick-next"><img src="img/group-5.svg" class="nextArrow"></button>',
		prevArrow: '<button type="button" class="slick-prev"><img src="img/group-5.svg" class="prevArrow"></button>'
	});

	  jQuery(".dropdown-toggle").click(function(){
	  	jQuery(".dropdown-menu").toggle();

	  });

});