/**
* @license
* portal30.js - dgenerico
*/

jQuery.noConflict();
(function($) {
$(function(){

	$("#idiomas li:has(a)").addClass("activo");
	$('#buscadorCabecera').find('.botonEnviarBuscador').attr('value','');
	//$('.accesosPortada .imagen').each(function () {
		//$(this).next().prepend(this);
	//});
	$('.cajaDesplegable').find('h3').nextAll().not('div').wrapAll('<div class="relacionadosItem" />');

	$(".cajaDesplegable").find(".imagen").on("click", function (){
	$(this).next().find(".relacionadosItem").slideToggle();
	});
	$(".cajaDesplegable").find("h3").on("click", function (){
	$(this).nextAll("div.relacionadosItem").slideToggle();
	});
	$(".cajaDesplegable").find("h3").on("click", function (){
	$(this).nextAll("ul.listaCategorias").slideToggle();
	});
	$(".cajaDesplegable").find("img").on("click", function (){
	$(this).next().find(".listadoResultados").slideToggle();
	});
	$(".cajaDesplegable").find("h2").on("click", function (){
	$(this).nextAll("dl.relacionadosItem").slideToggle();
	});
	$(".cajaDesplegable").find("img").on("click", function (){
	$(this).addClass("imagenDesplegable");
	$(this).next("dl").slideToggle();
	});
	$(".cajaDesplegable").find("h2").on("click", function (){
	$(this).nextAll("dl").addClass("dlDesplegar");
	$(this).nextAll("dl").slideToggle();
	});
	$('.cajaDesplegable').find('h3').nextAll().not('div').wrapAll('<div class="relacionadosItem" />');


	$('#buscadorFormularioFechas').find('p').toggleClass('abierto');
	$('#buscadorFormularioFechas').find('p').on("click", function (){
		$(this).next("fieldset").slideToggle();
		$(this).toggleClass('abierto');
	});

	$('.buscadorCategoriasComplejo ul.cat1nivel > li > input').on("click", function (){
		$('li.catMarcada').removeClass('catMarcada');
		$('label.abierto').removeClass('abierto').nextAll('ul').slideToggle();
	});

	$('.buscadorCategoriasComplejo ul.cat2nivel > li').has('ul').children('label').addClass('padrecito');

	$('.buscadorCategoriasComplejo ul.cat2nivel > li').find('.padrecito').on("click", function (){
		$(this).toggleClass('abierto');
		$(this).parent('li').children('ul').slideToggle();
		return false;
	});

	$('.buscadorCategoriasComplejo ul.cat2nivel > li > input').on("click", function (){
		$('li.catMarcada').removeClass('catMarcada');
		$('label.abierto').removeClass('abierto').nextAll('ul').slideToggle();
		$(this).parentsUntil('ul.cat1nivel > li', 'li').addClass('catMarcada');
		$(this).next('label').toggleClass('abierto');
		$(this).nextAll('ul').slideToggle();
	});

	//barraCompartir
	$('#barraCompartir').find('li.compartir > a').on("click", function (){
		$(this).toggleClass('abierto');
		$(this).next('ul').slideToggle();
		return false;
	});

	//relacionados conc
	$('.concDesplegable').find('.desConTitulo').each(function () {
		$(this).find('p.tituloAcordeon').removeClass('tituloAcordeon').addClass('bio').prependTo($(this).find('.relacionados'));
	});
	$('.concDesplegable').find('.desConTitulo').append('<span class="fa fa-arrow-circle-o-down"></span>');
	$('.concDesplegable').find('span.fa').on("click", function (){
		$(this).toggleClass('abierto');
		$(this).prev('div').slideToggle();
	});

	//meter masInfo en buscadorResultado//

	$('p.masInfo').each(function () {
		var listaHermana = $(this).prev();
		$(this).appendTo(listaHermana);
	});

	//colores duplicados
	//Cultura -> Agora, EMM
	$('.site_1300351791176').addClass('site_1322782055091');
	$('.site_1300351501660').addClass('site_1322782055091');
	//MA -> Red de energia, Infoambiental
	$('.site_1327566821900').addClass('site_1322782134412');
	$('.site_1332838419278').addClass('site_1322782134412');
	//ServSoc -> COF, Drogas, Participacion
	$('.site_1408670153087').addClass('site_1280301855095');
	$('.site_1237944294200').addClass('site_1280301855095');
	//Empleo -> CME, OMIC, Rede
	$('.site_1346721380160').addClass('site_1352255804703');
	$('.site_1270542954892').addClass('site_1352255804703');
	$('.site_1266187561771').addClass('site_1352255804703');
	//Participacion -> CMIX, EIDUS
	$('.site_1414721835012').addClass('site_1240016856326');
	$('.site_1312153719867').addClass('site_1240016856326');

	$('.mason > div').addClass('brick');
	$('.mason > div:first-of-type').removeClass('brick');

	var $container = $('.mason');
	// initialize
	$container.masonry({
	  columnWidth: '.anchoBrick',
	  gutter: 1,
	  itemSelector: '.brick'
	});

	var msnry = $container.data('masonry');

	});
	})(jQuery);
