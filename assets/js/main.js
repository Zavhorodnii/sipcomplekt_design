$(document).ready(function(){
    console.log('ready')

    $('.reviews-build-content-slider').slick({
        slidesToShow: 4,
        variableWidth: true,
        // dots: true,
        // responsive:[
        //     {
        //         breakpoint: 500,
        //         settings: {
        //             slidesToShow: 2
        //         }
        //     }, {
        //         breakpoint: 500,
        //         settings: {
        //             slidesToShow: 2
        //         }
        //     }
        // ]
        appendArrows: $('.control-button-slider2'),
        appendDots: $('.control-button-slider2-dots'),
    });

    $('.ready-build-content-slick-slider').slick({
        slidesToShow: 3,
        variableWidth: true,
        appendArrows: $('.control-button-slider1'),
    })

    $('.js-open-burger').click(function (){
        $(this).closest('.menu-burger').find('.open-menu-burger').addClass('active')
    });
    $('.js-close-burger').click(function (){
        $(this).closest('.open-menu-burger').removeClass('active')
    });

    $('.js-open-filter').click(function (){
        $(this).closest('.project-filter-block').find('.js-shove-filter').removeClass('none')
    });
    $('.js-close-filter').click(function (){
        $(this).closest('.js-shove-filter').addClass('none')
    });
    $('.show-more-content').click(function (){
        $(this).closest('.benefits-build-item').find('.none').removeClass('none').addClass('open')
        $(this).addClass('none')
    });

    function open_popup(name){
        $('.' + name).removeClass('none')
    }
    function close_popup(name){
        $('.' + name).addClass('none')
    }

    $('.open-write-popup').click(function (){
        open_popup('popup-calculate-project-position');
    })
    $('.close-click').click(function (){
        close_popup('popup-calculate-project-position');
    })
    // $('.popup-calculate-project').click(function (){
    //     close_popup('popup-calculate-project-position');
    // })

});