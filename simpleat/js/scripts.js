'use strict';

$(document).ready(function() {

  // якір
  $(".go-to").on('click',function(e){
    e.preventDefault();

    var top = document.documentElement.scrollTop;

    if(top > 10){
      $('body,html').stop().animate({scrollTop: 0}, 1500);
    }
  });

  $('.selectmenu').selectmenu();

  var contentRadionChange = $('.content-radion-change');

  contentRadionChange.on('click', '.change-btn', function(){
    var id = $(this).data('id'),
        priceBtn = $('.price-btn');

    priceBtn.find('.active').removeClass('active');
    priceBtn.find(id).addClass("active");
  });

  contentRadionChange.on('click', '.more-info', function(){
    $(this).parents('.info').find('.content').slideToggle();
  });

  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  $('.popup').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: false,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'mfp-zoom-in'
  });

  $('.btn-cookie').on('click', function(){
    $.magnificPopup.close({
      items: {src: '#cookie-popup'},
      mainClass: 'mfp-zoom-out'
    });

    document.cookie = "agree=true";
  });

  function getCookie(name) {
    var cookie = " " + document.cookie,
        search = " " + name + "=",
        setStr = null,
        offset = 0,
        end = 0;

    if (cookie.length > 0) {
      offset = cookie.indexOf(search);
      if (offset != -1) {
        offset += search.length;
        end = cookie.indexOf(";", offset)
        if (end == -1) {
          end = cookie.length;
        }
        setStr = unescape(cookie.substring(offset, end));
      }
    }
    return(setStr);
    }

  if (getCookie('agree') === null) {
    $.magnificPopup.open({
      items: {src: '#cookie-popup'},
      mainClass: 'mfp-zoom-in'
    });
  }

  $('.tabs').on('click', '.tab', function(e){
    e.preventDefault();
    var id = $(this).attr('href');

    $(this).parents('.nav').find(".active").removeClass('active');
    $(this).parents('.tabs').find(".active").removeClass('active');
    $(this).addClass('active');
    $(this).parents('.tabs').find(id).addClass('active');
  });

  function headerHeight(){
    var headerHeight = $('.main-header .container').height();
    $('body').css({"padding-top": headerHeight});
  }

  headerHeight();

  $( window ).resize(function() {
    headerHeight();
  });

  $('.language').on('click', '.item', function(){
    var item = $(this).html();
    $(this).parents('.language').find('.menu').slideToggle();
    $(this).parents('.language').find('.btn-menu').html(item);
  });

  $('.language').on('click', '.btn-menu', function(){
    $(this).parents('.language').find('.menu').slideToggle();
  });
});
