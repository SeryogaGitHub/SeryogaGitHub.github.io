$(function () {
  $(".mobile-menu-btn").on('click', function () {
    $('.main-header, body').toggleClass('show');
  });

  $("body").on('click', '.page-pilling__item, .anchor',function(e){
    e.preventDefault();

    let anchor = $(this).attr("href");
    let $this = $(this);

    if ($(anchor).length) {
      let run = $(anchor).offset().top;
      $('body,html').stop().animate({scrollTop: run}, 1500);
    } else {
      console.warn("ID don't search!")
    }
  });

  $('.main-nav').on("click", function () {
    $("body, .main-header").removeClass("show");
  });

  let mainContentHeight = $('.main-content').height();

  let positionElements = () => {
    let $pagePilling = $('.page-pilling');
    $pagePilling.empty();

    $('.position-element').each(function() {
      let $this = $(this);
      let topPosition = $this.offset().top;
      let id = $this.attr("id");

      $pagePilling.append(`<li><a href="#${id}" data-top="${topPosition}" class="page-pilling__item"></a></li>`);
    });
  };

  let scrollPage = () => {
    let scrollTop = $(window).scrollTop() + 100;

    $('.page-pilling__item').each(function () {
      let $this = $(this);
      let topPositionElement = $this.attr("data-top");

      if(scrollTop >= topPositionElement){
        $('.page-pilling__item').removeClass("active");
        $this.addClass("active");
        return true;
      }
    });
  };

  positionElements();
  scrollPage();
  $('.page-pilling li:eq(0) .page-pilling__item').addClass("active");

  $(window).scroll(scrollPage);

  $(window).resize(() => {
    let newMainContentHeight = $('.main-content').height();
    if(mainContentHeight !== newMainContentHeight){
      mainContentHeight = newMainContentHeight;
      positionElements();
      scrollPage();
    }
  });

});
