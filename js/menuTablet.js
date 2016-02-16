/**
* @license 
* menuTablet.js
*/

jQuery.noConflict();
(function($) {
$(function(){
		var icMenu = '<a href="#" class="toggle-nav"><i class="fa fa-bars"></i></a>';
	$('#menuMapaWeb').after('<div class="menuPrincipal"><ul class="nivel1"><li>'+ icMenu + '</li></ul></div>');
	$('#menuMapaWeb').find('.nivel1 > li > a').each(function() 
		{
			$(this).clone().appendTo('.menuPrincipal ul').wrap('<li></li>');
		});
    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
            if ($('#marco').hasClass('show-nav')) {
                // Do things on Nav Close
                $('#marco').removeClass('show-nav');
            } else {
                // Do things on Nav Open
                $('#marco').addClass('show-nav');
            }
            //$('#site-wrapper').toggleClass('show-nav');
     var enlaceNivel1 = '<a href="#" class="toggle-subNav"><i class="fa fa-angle-right"></i></a>';       
     $('.nivel1').find('li:has(ul) > a').after(enlaceNivel1);
     $('.nivel1').find('li > a.toggle-subNav').click(function(){     
     $(this).next().slideToggle().css('display','flex');
     $(this).toggleClass('abierto');
     });
    });

$('.site_1382936859765').find('ul.nivel2 > li > a').attr('href','#');   
     
});
})(jQuery);