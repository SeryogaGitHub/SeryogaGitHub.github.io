'use strict';

$(document).ready(function() {

  // якір
  $(".go-to").on('click',function(e){

    e.preventDefault();

    var anchor = $(this).attr("href");

    if ($(anchor).length) {
      var run = $(anchor).offset().top;
      $('body,html').stop().animate({scrollTop: run}, 1500);
    } else {
      console.warn("ID don't search!")
    }
  });

  $(".mobile-menu").on("click", function(){
    $("header nav > ul").stop().slideToggle(function(){
      if ($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
    });
  });

  var language = $('.language'),
      languageList = language.find('.list');

  language.on('click', '.switch', function(){
    $(this).parents(language).find(languageList).slideToggle();
  });

  language.on('click', '.item', function(){
    var $this = $(this),
        text = $this.text();

    $this.parents(languageList).find('.active').removeClass('active');
    $this.addClass('active');
    $this.parents(language).find('.switch').text(text);
    $this.parents(language).find(languageList).slideToggle();
  });

  var mainHeader = $('.main-header');

  $(window).scroll(function(){
    var windowScroll = $(window).scrollTop();

    if(windowScroll > 10){
      mainHeader.addClass("scroll");
    } else {
      mainHeader.removeClass("scroll");
    }
  });

  $('.slider').slick({
    infinite: true,
    // speed: 300,
    slidesToShow: 1
  });

  $('.slider-fade').slick({
    fade: true,
    infinite: true,
    // speed: 300,
    slidesToShow: 1
  });

  $('.our-cars-slider').slick({
    fade: true,
    infinite: true,
    // speed: 300,
    slidesToShow: 1
  });

  $('.selectmenu').selectmenu();
});
