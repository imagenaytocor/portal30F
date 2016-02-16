jQuery(document).ready(function() {
var icMenu = '<a href="#" class="toggle-nav"><i class="fa fa-bars"></i></a>';
jQuery('#menuMapaWeb').after('<div class="menuPrincipal"><ul><li>'+ icMenu + '</li></ul></div>');

jQuery('.toggle-nav').click(function() {
	jQuery('#menuMapaWeb ul.nivel1').toggleClass('menuAbierto');

});
jQuery('#menuMapaWeb').find('.nivel1 > li > a').each(function() 
	{
		jQuery(this).clone().appendTo('.menuPrincipal ul').wrap('<li></li>');
	});
	
function calculoAltura() {
	var altura = jQuery(".current .interiorPromocion").height();
 	jQuery(".promocionContenido").height(altura + 40);
}

jQuery(".interiorPromocion").first().css({
		      "display": "block",
		      "width": "520px"
		    });
 jQuery("#accordion").tabs(".interiorPromocion", {
       tabs: '#accordion img',
       effect: 'horizontal',
       onClick: calculoAltura
});

calculoAltura();

jQuery(".cajaTu .imagenPromocion").on("click", function () {
	//calculoAltura();
	jQuery("#contenidoCentralSuperior").css({"background-image": "url('images/fondoFoto.png')", "background-position": "center top"});
	jQuery(".interiorPromocion li > ul").css("display", "none");
});
jQuery(".cajaOcio .imagenPromocion").on("click", function () {
	//calculoAltura();
	jQuery("#contenidoCentralSuperior").css({"background-image": "url('images/fondoFotoOcio2.png')", "background-position": "center top"});
	jQuery(".interiorPromocion li > ul").css("display", "none");
});
jQuery(".cajaCiudad .imagenPromocion").on("click", function () {
	//calculoAltura();
	jQuery("#contenidoCentralSuperior").css({"background-image": "url('images/fondoFotoCiudad.png')", "background-position": "center bottom"});
	jQuery(".interiorPromocion li > ul").css("display", "none");
});
jQuery(".cajaAyto .imagenPromocion").on("click", function () {
	//calculoAltura();
	jQuery("#contenidoCentralSuperior").css({"background-image": "url('images/fondoFotoAyto.png')", "background-position": "center top"});
	jQuery(".interiorPromocion li > ul").css("display", "none");
});
jQuery(".interiorPromocion ul > li").has("ul").addClass("cerrado");

jQuery(".interiorPromocion ul > li").click (function (event) {
  
	     
	jQuery(this).has("ul").children().slideToggle({
		progress: calculoAltura
		});
	 
	jQuery(this).has("ul").removeClass(function () {
		if (jQuery(this).is(".cerrado")) {
			jQuery(this).removeClass("cerrado").addClass("abierto");
			jQuery(this).siblings().removeClass("abierto").addClass("cerrado");
			jQuery(this).siblings().children().attr("style","");
			} else if (jQuery(this).is(".abierto")) {
				jQuery(this).removeClass("abierto").addClass("cerrado");
			}
	});
	event.stopPropagation();
});  

});