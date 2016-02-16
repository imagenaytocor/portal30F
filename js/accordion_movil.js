/**
* @license 
* accordion_movil.js
*/
jQuery.noConflict();
(function($) {
$(function(){
$("#accordion .interiorPromocion").first().css({
			      "display": "block",
			      "width": "280px"
			    });
	 $("#accordion").tabs(".interiorPromocion", {
	       tabs: '#accordion .imagenPromocion',
	       effect: 'slide',
	       initialIndex: 5
	});
	
	
	
	$("#accordion .imagenPromocion").each(function () {
		var capaTitulo = $(this).next("div");
		$(capaTitulo).find("p.linea1cajaPromocion").appendTo($(this));
	});

	$("#contenido_1421201680243 .imagenPromocion").on("click", function () {
		$("#contenidoCentralSuperior").css("background-image", "url('//estaticos.coruna.es/imagesdu/fondoFoto_2.jpg')");		
	});
	$("#contenido_1421201704903 .imagenPromocion").on("click", function () {
		$("#contenidoCentralSuperior").css("background-image", "url('//estaticos.coruna.es/imagesdu/fondoFotoOcioMovil.jpg')");
	});
	$("#contenido_1421201707469 .imagenPromocion").on("click", function () {
		$("#contenidoCentralSuperior").css("background-image", "url('//estaticos.coruna.es/imagesdu/fondoFotoCiudadMovil.jpg')");
			});
	$("#contenido_1421201708910 .imagenPromocion").on("click", function () {
		$("#contenidoCentralSuperior").css("background-image", "url('//estaticos.coruna.es/imagesdu/fondoFotoAytoMovil.jpg')");
			});
	
	$("#accordion .interiorPromocion ul > li").has("ul").addClass("cerrado");
	
	$("#accordion .interiorPromocion ul > li").click (function (event) {     
		$(this).has("ul").children().slideToggle();
		 
		$(this).has("ul").removeClass(function () {
			if ($(this).is(".cerrado")) {
				$(this).removeClass("cerrado").addClass("abierto");
				$(this).siblings().removeClass("abierto").addClass("cerrado");
				$(this).siblings().children().attr("style","");
				} else if ($(this).is(".abierto")) {
					$(this).removeClass("abierto").addClass("cerrado");
				}
		});
		event.stopPropagation();
	});  
	
	});
	})(jQuery);
