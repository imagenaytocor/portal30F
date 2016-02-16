/**
* @license
* acordeones.js
*/
jQuery.noConflict();
(function($) {
$(function(){
	$('.acordeon').find('h3').each(function () {
			$(this).nextAll().wrapAll('<div class="contenidoAcordeon"></div>');
			$('<em></em>').appendTo(this);
		});
		$('.acordeon').find('h3').on('click', function () {
			$(this).next('div').slideToggle();
			$(this).toggleClass('abierto');
		});
		$('.acordeon').find('h2').each(function () {
				$(this).nextAll().wrapAll('<div class="contenidoAcordeon"></div>');
				$('<em></em>').appendTo(this);
			});
			$('.acordeon').find('h2').on('click', function () {
				$(this).next('div').slideToggle();
				$(this).toggleClass('abierto');
			});

		$('.detalleAsset').find('p.tituloAcordeon').each(function () {
					$(this).nextUntil('p.tituloInterno').wrapAll('<div class="contenidoAcordeon"></div>');
					$('<em></em>').appendTo(this);
				});
				$('.detalleAsset').find('p.tituloAcordeon').on('click', function () {
					$(this).next('div').slideToggle();
					$(this).toggleClass('abierto');
					//e(this).e("contenidoAcordeon").sliddeToggle();

				});

		$('.textoContenido').find('p.tituloAcordeon').each(function () {
					$(this).nextUntil('p.tituloInterno').wrapAll('<div class="contenidoAcordeon"></div>');
					$('<em></em>').appendTo(this);
				});
				$('.textoContenido').find('p.tituloAcordeon').on('click', function () {
					$(this).next('div').slideToggle();
					$(this).toggleClass('abierto');
					//e(this).e("contenidoAcordeon").sliddeToggle();

				});

		$('.contenidoApartado').find('p.tituloAcordeon').each(function () {
					$(this).nextUntil('p.tituloInterno').wrapAll('<div class="contenidoAcordeon"></div>');
					$('<em></em>').appendTo(this);
				});
				$('.contenidoApartado').find('p.tituloAcordeon').on('click', function () {
					$(this).next('div').slideToggle();
					$(this).toggleClass('abierto');
					//e(this).e("contenidoAcordeon").sliddeToggle();

				});

		$('.acordeon .desSinTitulo').find('p.tituloAcordeon').each(function () {
					$(this).nextUntil('p.tituloInterno').wrapAll('<div class="contenidoAcordeon"></div>');
					$('<em></em>').appendTo(this);
				});
				$('.acordeon .desSinTitulo').find('p.tituloAcordeon').on('click', function () {
					$(this).next('div').slideToggle();
					$(this).toggleClass('abierto');
							//e(this).e("contenidoAcordeon").sliddeToggle();

						});

});
})(jQuery);
