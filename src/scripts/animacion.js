//tiempo de spam de los textos
$(document).ready(function () {
    var navbar = $('.navbar');
    var headerHeight = $('#inicio').outerHeight();

    $(window).scroll(function () {
        if ($(this).scrollTop() > headerHeight) {
            navbar.addClass('fixed-top');
        } else {
            navbar.removeClass('fixed-top');
        }
    });

    // Animación para los textos en los carruseles
    $('.carousel').on('slide.bs.carousel', function () {
        $(this).find('.fade-in').removeClass('visible');
    }).on('slid.bs.carousel', function () {
        $(this).find('.fade-in').addClass('visible');
    });

    // Hacer visible el texto de todos los elementos de "Sobre Mí" al cargar
    $('.info-section p.fade-in').addClass('visible');

    // Hacer visible el texto de todos los items de los carruseles al cargar
    $('.carousel-inner .carousel-item.active .fade-in').addClass('visible');
    $('#carouselInicio .carousel-item .fade-in').addClass('visible');
    $('#carouselTestimonios .carousel-item .fade-in').addClass('visible');
});