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

  $('.tabs').on('click', '.tab', function(e){
    e.preventDefault();
    var id = $(this).attr('href');

    $(this).parents('.nav').find(".active").removeClass('active');
    $(this).parents('.tabs').find(".active").removeClass('active');
    $(this).addClass('active');
    $(this).parents('.tabs').find(id).addClass('active');
  });

  document.cookie = "username=John Doe";
  var username = getCookie("username");

  console.log($.cookie('username'))
});
