'use strict';


$(document).ready(function() {
  // півдключити футер і хедер
  var mainHeader = $("#main-header");

  mainHeader.load("header.html");
  $("#main-footer").load("footer.html");

  // активна сторінка 
  var linkPage = mainHeader.data('page');

  $(window).load(function (){
    $('.navigation a').each(function(){
      var href = $(this).attr('href');

      if(href.indexOf(linkPage) > 0){
        $(this).addClass('active');
        return;
      }
    });
  });

  // анімації
  // new WOW().init();

  var wow = new WOW({
    mobile: false,
  })

  wow.init();

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
});