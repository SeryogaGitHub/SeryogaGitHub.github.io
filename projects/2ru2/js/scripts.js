'use strict';

$(document).ready(function() {

  // якір
  $(".to-go").on('click',function(e){

    e.preventDefault();

    var anchor = $(this).attr("href");

    if ($(anchor).length) {
      var run = $(anchor).offset().top;
      $('body,html').stop().animate({scrollTop: run}, 1500);
    } else {
      console.warn("ID don't search!")
    }
  });

  $("#menu_label").on("click", function(){
    $(".mobile-menu").stop().slideToggle(function(){
      if ($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
    });
  });

  $('.slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    responsive: [
        {
          breakpoint: 1050,
          settings: {
            arrows: false,
            adaptiveHeight: true,
            dots: true
          }
        }
      ]
  });

  new WOW().init();

  var clone1 = $('.main-nav').clone(),
      clone2 = $('.header-right').clone(),
      clone3 = $('.logo').clone();

  $('.main-footer .container').append(clone3);
  $('.mobile-menu, .main-footer .container').append(clone1).append(clone2);

  $('.tabs').on("click", ".btn", function(){
    var $this = $(this),
        id = $this.data('id');

    $this.parents('.btns').removeClass('active');
    $this.parents('.item').find('.active').removeClass('active');

    $this.parents('.item').find(id).addClass('active');
    $this.addClass('active');
  });

  $('.popup').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,
      
      midClick: true,
      removalDelay: 300,
      mainClass: 'mfp-zoom-in'
  });
});
