'use strict';


$(document).ready(function() {

    // анімації
    new WOW().init();

    // перевірка чи тачпад прилад
    var touchSupport = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;
    
    if (touchSupport){
        $('.item').each(function(){
            var pages = $(this).find('.pages').length;

            if(pages){

                $(this).children('a').addClass('disabled');
                $(this).addClass('click');
            }
        });
    }

    $('.grid').on('click', '.item.click', function(){
        var pages = $(this).find('.pages').length;

        $('.item.click').not(this).removeClass('open');
        if(pages){

            $(this).toggleClass('open');
        }
    });

    // відключаємо стандартні дії зсилки яка має .disabled
    $('body').on('click', 'a.disabled', function(e){
        e.preventDefault();
    });

    //дата зміни сайта
    var datetime = '2018-05-15 18:00';
    $('#datetime').attr('datetime', datetime).attr('title', datetime);
});


function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + (Math.round(n * k) / k)
                    .toFixed(prec);
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
        .split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '')
            .length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1)
            .join('0');
    }
    return s.join(dec);
}
