'use strict';

$(document).ready(function() {

  // якір
  var mainHeader = $('.main-header');

  $(".go-to").on('click',function(e){

    e.preventDefault();

    var anchor = $(this).attr("href"),
        height = mainHeader.height();

    if ($(anchor).length) {
      var run = $(anchor).offset().top - height;
          
      $('body,html').stop().animate({scrollTop: run}, 1500);
    } else {
      console.warn("ID don't search!")
    }
    console.log(run)
  });

  $(".hamburger").on("click", function(){
    $(this).toggleClass('active');
    $('.menu-vs-left').toggleClass('open');
  });

  $('.our-cars-slider').slick({
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>'
  });

  $('.btn-order-form').on('click', function(){
    $(this).toggleClass('active');
    $(this).next('.form').slideToggle();
    $('.slider-fade').slick('refresh');
  });

  var counter = $('.counter');

  counter.on('click', '.num', function(){
    var valInput = $(this).parents('.counter').find('input'),
        valCounter = valInput.val();

    if($(this).hasClass('plus')){
      valCounter++;
    } else {
      if(valCounter >=1 ){
        valCounter--;
      }
    }

    valInput.val(valCounter);
  });

  $( ".datepicker" ).datepicker( {
    dateFormat: 'dd.mm.yy',
    beforeShow: function(input) {

      var field = $(this),
          left = field.offset().left,
          top = field.offset().top + 48;

      setTimeout(function(){
          $('#ui-datepicker-div').css({'top':top + 'px', 'left': left + 'px'});
      },1);
    }
  });

  var language = $('.language'),
      languageList = language.find('.list');

  language.on('click', '.switch', function(){
    $(this).parents(language).find(languageList).slideToggle();
  });

  language.on('click', '.item', function(){
    var $this = $(this),
        text = $this.text();

    $this.parents('.language .list').find('.active').removeClass('active');
    $this.addClass('active');
    $this.parents(language).find('.switch').text(text);
    $this.parents(language).find(languageList).slideToggle();
  });

  var windowScroll = $(window).scrollTop();

  if(windowScroll > 10){
    mainHeader.addClass("scroll");
  } else {
    mainHeader.removeClass("scroll");
  }

  $(window).scroll(function(){
    windowScroll = $(window).scrollTop();

    if(windowScroll > 10){
      mainHeader.addClass("scroll");
    } else {
      mainHeader.removeClass("scroll");
    }
  });

  $('.slider-fade').slick({
    fade: true,
    infinite: true,
    // speed: 300,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></button>'
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
    slidesToShow: 1,
    swipe: false,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            swipe: true
          }
        }
      ]
  });

  $('.selectmenu').selectmenu();
  $('.info').tooltip({
    track: true
  });

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

  $('.input').on('click focus', function(){
    $(this).find('label').addClass('active');
  });

  $('.input input').blur(function(){
    var langth = $(this).val().length;
    
    if(!langth){
      $(this).parents('.input').find('.placeholder').removeClass('active');
    }
  });

  // валідація в попапі

  $('.white-popup form').validate({
    rules: {
      name: {
        minlength: 3
      },
      phone: {
        matches: /\d/g,
        minlength:8,
        maxlength:10,
      }
    },
    messages: {
      phone: "Введите правильный номер телефона",
      name: {
        required: "Введите имя"
      }
    }
  });
    
  // лічильник для годин і хвилин
  var clockCounter = $('.clock-counter');

  clockCounter.on('click', '.timepicker', function(){
    var dataHour = $(this).attr('data-hour'),
        dataMinutes = $(this).attr('data-minutes');

    $(this).parents('.clock-counter').prepend('<div class="time-popup"><div class="hour"><button class="btn-plus btn-time" type="button"></button><div class="time">'+ dataHour +'</div><button class="btn-minus btn-time" type="button"></button></div><div class="dots">:</div><div class="minutes"><button class="btn-plus btn-time" type="button"></button><div class="time">'+ dataMinutes +'</div><button class="btn-minus btn-time" type="button"></button></div></div>');

    $('body').prepend('<div class="time-overlay"></div>');
  });

  $('body').on('click', '.time-overlay', function(){
    $(this).remove();
    $('.time-popup').remove();
  });

  $('body').on('click', '.hour .btn-time', function(){
    var timeH = $(this).parents('.hour').find('.time'),
        timeHC = timeH.html(),
        thisInput = $(this).parents('.clock-counter').find('input'),
        minutesHC = $(this).parents('.time-popup').find('.minutes .time').html();

    if($(this).hasClass('btn-plus')){
      timeHC++;
      if(timeHC === 24){
        timeHC = '0';
      }
    } else {
      if(timeHC == '00'){
        timeHC = 24;
      }
      timeHC--;
    }

    if(timeHC < 10){
      timeHC = "0" + timeHC
    }

    timeH.html(timeHC);
    $(this).parents('.clock-counter').find('input').val(timeHC +" : " + minutesHC);
    thisInput.attr("data-hour", timeHC);
  });

  $('body').on('click', '.minutes .btn-time', function(){
    var timeH = $(this).parents('.minutes').find('.time'),
        timeHC = timeH.html(),
        thisInput = $(this).parents('.clock-counter').find('input'),
        hourHC = $(this).parents('.time-popup').find('.hour .time').html();

    if($(this).hasClass('btn-plus')){
      timeHC = +timeHC + 5;
      if(timeHC === 60){
        timeHC = 0;
      }
    } else {
      if(timeHC == '00'){
        timeHC = 60;
      }
      timeHC = timeHC - 5;
    }

    if(timeHC < 10){
      timeHC = "0" + timeHC
    }

    timeH.html(timeHC);
    $(this).parents('.clock-counter').find('input').val(hourHC +" : " + timeHC);
    thisInput.attr("data-minutes", timeHC);
  });
});
