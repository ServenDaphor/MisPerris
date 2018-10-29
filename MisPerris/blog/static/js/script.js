$(document).ready(function(){

    $('[data-fancybox]').fancybox({
        protect: true,
        loop: true,
        toolbar: false,
        transitionEffect: "tube",
        transitionDuration: 500,
        mobile: {
            arrows: false,
        }
    });

    $.fancybox.defaults.i18n.es = {
        CLOSE: 'Cerrar',
        NEXT: 'Siguiente',
        PREV: 'Anterior',
        ERROR: 'No se puede cargar el contenido solicitado. <br/> Por favor intente de nuevo.',
        PLAY_START: 'Inicias diapositivas',
        PLAY_STOP: 'Pausar diapositivas',
        FULL_SCREEN: 'Pantalla completa',
        THUMBS: 'Miniaturas',
        DOWNLOAD: 'Descargar',
        SHARE: 'Compartir',
        ZOOM: 'Zoom'
    };

    $.fancybox.defaults.lang = 'es';

});