/**
* @license 
* cmix.js


jQuery.noConflict();
(function($) {
$(function(){

$('.site_1414721835012 #menuMapaWeb').find('ul.nivel3').css('display','none');
$('.site_1414721835012 #menuMapaWeb ul.nivel2').find('li').has('ul').addClass('padre');
$('.site_1414721835012 #menuMapaWeb ul.nivel2').find('li').has('ul').on("click", function (){
	$(this).toggleClass('abierto');
	$(this).children('ul').slideToggle(); 
});	

});
})(jQuery);
*/
