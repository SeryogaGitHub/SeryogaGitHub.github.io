'use strict';

$(document).ready(function() {

  $('.slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.82 21.18L5.66 12L14.82 2.82L12 0L0 12L12 24L14.82 21.18Z" fill="currentColor"/> </svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.180002 2.82L9.34 12L0.180001 21.18L3 24L15 12L3 -1.04907e-06L0.180002 2.82Z" fill="currentColor"/> </svg></button>',
    responsive: [
      {
        breakpoint: 530,
        settings: {
          arrows: false,
          dots: true
        }
      },
  ]
  });

  $('.accordion').on('click', '.link', function () {
    $(this).parents('.accordion').find('.active').removeClass('active');
    $(this).parents('.item').toggleClass('active');
  });

  // якір
  $(".go-to").on('click',function(e){

    e.preventDefault();

    var anchor = $(this).attr("href");

    if ($(anchor).length) {
      var run = $(anchor).offset().top;

      if($('body').find(".article-container .nav").length > 0 && $(window).width() > 1024){
        $('body,html').stop().animate({scrollTop: run}, 1500);
      } else {
        let mobileLinks = $('.main-article .nav').height();
        $('body,html').stop().animate({scrollTop: run - mobileLinks - 10}, 1500);
      }


    } else {
      console.warn("ID don't search!")
    }
  });

  $('.toggle-button').on('click', function () {
    $(this).toggleClass('active');

    $('.nav .links').stop().slideToggle();
  });

  $.fn.forceNumbericOnly = function () {
    return this.each(function () {
      $(this).keydown(function (e) {
        var key = e.charCode || e.keyCode || 0;
        return (key == 8 || key == 9 || key == 46 || (key >= 37 && key <= 40) || (key >=
          48 && key <= 57) || (key >= 96 && key <= 105) || key == 107 || key ==
          109 || key == 173 || key == 61);
      });
    });
  };

  $('input[type=tel]').forceNumbericOnly();
});
