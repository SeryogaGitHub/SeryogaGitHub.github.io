'use strict';

$(document).ready(function() {

  // якір
  var mainHeader = $('.main-header'),
      mainHeaderH = mainHeader.outerHeight();

  $(".go-to").on('click',function(e){

    e.preventDefault();

    var anchor = $(this).attr("href");

    if ($(anchor).length) {
      var run = $(anchor).offset().top;
      $('body,html').stop().animate({scrollTop: run - mainHeaderH}, 1500);
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

  var $slickElement = $('.reviews-slider');

  $slickElement.after("<p class='reviews-slider-count'></p>");

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.reviews-slider-count').text(i + '/' + slick.slideCount);
  });

  $slickElement.slick({
    slide: '.item',
    fade: true,
    infinite: true,
    // speed: 300,
    slidesToShow: 1
  });

  $('.our-cars-slider').slick({
    fade: true,
    infinite: true,
    // speed: 300,
    slidesToShow: 1,
    dots: true
  });

  $('.selectmenu').selectmenu();

  var idAuto = 0,
      itemAuto = [];

  $('.our-cars-slider .item').each(function(){
    itemAuto.push($(this).attr('data-model'));
  });

  $('.our-cars-slider .slick-dots li').each(function(){
    $(this).prepend("<p>" + itemAuto[idAuto] + "</p>");
    idAuto = idAuto + 1;
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
