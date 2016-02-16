/**
* @license 
* menuGr.js - dgenerico
*/
jQuery.noConflict();
(function($) {
$(function(){
var icMenu = '<a href="#" class="toggle-nav"><i class="fa fa-bars"></i></a>';
$('<div class="menuPrincipal"><ul class="nivel1"><li>'+ icMenu + '</li></ul></div>').appendTo('#cabecera');

$('.toggle-nav').click(function() {
	$('#menuMapaWeb ul.nivel1').toggleClass('menuAbierto');

});

$('#menuMapaWeb').find('.nivel1 > li').each(function() 
	{
		$(this).clone().appendTo('.menuPrincipal ul.nivel1');
	});
$('.menuPrincipal').find('ul.nivel2').wrap( "<div class='subMenu'><div class='wrapper'></div>");

$('#menuMapaWeb').find('ul.nivel3').css('display','none');
$('#menuMapaWeb ul.nivel2').find('li').has('ul').addClass('padre');
$('#menuMapaWeb ul.nivel2').find('li').has('ul').on("click", function (){
	$(this).toggleClass('abierto');
	$(this).children('ul').slideToggle(); 
});	

$('.menuPrincipal .subMenu').css({
  display: "none",
  //left: "auto"
});

var icMenuPrin = '<a href="#" class="toggle-sub"><i class="fa fa-angle-down"></i></a>';
$('.menuPrincipal .nivel1 > li').has('div').append(icMenuPrin);

$('.toggle-sub').click(function() {
	$(this).parents('ul.nivel1').find('div.subMenu').fadeOut('slow');
   var $this=$(this).parent().find('.subMenu');        
   if($this.is(':visible'))
    {
      $this.fadeOut('slow');
    } else{
    	$this.slideDown('slow');
    }
 });

/*$('.toggle-sub').hover(function() {
  $(this).parent()
    .find('.subMenu')
    .toggleClass('menuAbierto')
    .stop(true, true)
    .delay(400)
    .slideDown('slow');
    }, function() {
      $(this).parent()
        .find('.subMenu')
        .toggleClass('menuAbierto')
        .stop(true,true)
        .fadeOut('slow');
});*/


// no funciona el enlace de segundo nivel en Bibliotecas
/*$('.site_1382936859765 .menuPrincipal').find('ul.nivel2 > li > a').click(function( event ) {
  event.preventDefault();
  });
$('.site_1382936859765 #menuMapaWeb').find('ul.nivel > li > a').click(function( event ) {
  event.preventDefault();
  });
 */ 
 $('.site_1382936859765').find('ul.nivel2 > li > a').attr('href','#');
 $('.site_1382936859765').find('li.hilo2nivel > a').attr('href','#');

});

})(jQuery);
