/**
* @license 
* accordion_desktop.js
*/

jQuery.noConflict();
(function($) {
$(function(){
function calculoAltura() {
	var altura = $(".current .interiorPromocion").height();
 	$("#accordion .promocionContenido").height(altura + 40);
}

$("#accordion .interiorPromocion").first().css({
		      "display": "block",
		      "width": "520px"
		    });
 $("#accordion").tabs(".interiorPromocion", {
       tabs: '#accordion img',
       effect: 'horizontal',
       onClick: calculoAltura
});
$(".interiorPromocion ul > li").has("ul").addClass("cerrado");
calculoAltura();

$("#contenido_1421201680243 .imagenPromocion").on("click", function () {
	$("#contenidoCentralSuperior").css("background-image", "url('//estaticos.coruna.es/imagesdu/fondoFoto_2.jpg')");
});
$("#contenido_1421201704903 .imagenPromocion").on("click", function () {
	$("#contenidoCentralSuperior").css("background-image", "url('//estaticos.coruna.es/imagesdu/fondoFotoOcio_2.jpg')");
});
$("#contenido_1421201707469 .imagenPromocion").on("click", function () {
	$("#contenidoCentralSuperior").css("background-image", "url('//estaticos.coruna.es/imagesdu/fondoFotoCiudad_2.jpg')");
});
$("#contenido_1421201708910 .imagenPromocion").on("click", function () {
	$("#contenidoCentralSuperior").css("background-image", "url('//estaticos.coruna.es/imagesdu/fondoFotoAyto_2.jpg')");
});


$(".interiorPromocion ul > li").click (function (event) {
  
	     
	$(this).has("ul").children().slideToggle({
		progress: calculoAltura
		});
	 
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