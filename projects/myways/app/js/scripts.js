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

  $("#menu-icon-svg").on("click", function(){
    $(".main-nav").stop().slideToggle(function(){
      if ($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
    });
  });

  ///INITIATION

  var svgIcon = document.getElementById("menu-icon-svg");

  var topLine = document.getElementById("top-line");
  var middleLine = document.getElementById("middle-line");
  var bottomLine = document.getElementById("bottom-line");

  var state = "menu";  // can be "menu" or "arrow"

  var topLineY;
  var middleLineY;
  var bottomLineY;
  var arrowLegY;
  var arrowPointY;
  var hideawayLinesOpacity;



///ANIMATIONS

  var collapseDurationInFrames = 60;
  var arrowAppearDurationInFrames = 20;
  var menuReturnDurationInFrames = 60;
  var fadeInDurationInFrames = 30;

  var collapseComplete = false;
  var arrowAppearComplete = false;
  var menuReturnComplete = true;

  var currentFrame = 1;


//Collapse

  function collapseAnimation( durationInFrames, currentFrame ) {
    currentFrame++;
    if ( currentFrame <= collapseDurationInFrames ) {
      window.requestAnimationFrame( ()=> {
        //top line
        topLineY = AJS.easeInOutBack( 20, 80, collapseDurationInFrames, currentFrame );
        topLine.setAttribute( "points", "7 "+topLineY+" 50 "+topLineY+" 93 "+topLineY );
        //middle line
        middleLineY = AJS.easeInOutBack( 50, 80, collapseDurationInFrames, currentFrame );
        middleLine.setAttribute( "d", "M7,"+middleLineY+" L93,"+middleLineY );
        if ( middleLineY >= 80) middleLine.style.opacity = "0";
        //bottom line
        if ( middleLineY >= 80) bottomLine.style.opacity = "0";
        //recursion
        collapseAnimation( collapseDurationInFrames, currentFrame );
      });
    } else {
      bottomLine.style.opacity = "0";
      currentFrame = 1;
      collapseComplete = true;
      openMenuAnimation();
    }
  }


//Arrow Appear

  function arrowAppearAnimation( durationInFrames, currentFrame ) {
    currentFrame++;
    if ( currentFrame <= arrowAppearDurationInFrames ) {
      window.requestAnimationFrame( ()=> {
        //arrow
        arrowLegY = AJS.easeOutBack( 80, 70, durationInFrames, currentFrame );
        arrowPointY = AJS.easeOutBack( 80, 30, durationInFrames, currentFrame );
        topLine.setAttribute("points", "7 "+arrowLegY+" 50 "+arrowPointY+" 93 "+arrowLegY);
        //recursion
        arrowAppearAnimation( arrowAppearDurationInFrames, currentFrame );
      });
    } else {
      currentFrame = 1;
      arrowAppearComplete = true;
      menuReturnComplete = false;
      openMenuAnimation();
    }
  }


//Combined Open Menu Animation

  function openMenuAnimation() {
    if ( !collapseComplete ) {
      collapseAnimation( collapseDurationInFrames, currentFrame );
    } else if ( !arrowAppearComplete) {
      arrowAppearAnimation( arrowAppearDurationInFrames, currentFrame );
    }
  }


//Menu Return

  function menuReturnAnimation( durationInFrames, currentFrame ) {
    currentFrame++;
    if ( currentFrame <= menuReturnDurationInFrames ) {
      window.requestAnimationFrame( ()=> {
        //arrow to top line
        arrowLegY = AJS.easeOutBounce( 70, 20, durationInFrames, currentFrame );
        arrowPointY = AJS.easeOutBounce( 30, 20, durationInFrames, currentFrame );
        topLine.setAttribute("points", "7 "+arrowLegY+" 50 "+arrowPointY+" 93 "+arrowLegY);
        //middle line
        middleLineY = AJS.easeOutBounce( 80, 50, menuReturnDurationInFrames, currentFrame );
        middleLine.setAttribute( "d", "M7,"+middleLineY+" L93,"+middleLineY );
        //bottom line
        bottomLineY = AJS.easeOutBounce( 94, 80, menuReturnDurationInFrames, currentFrame );
        bottomLine.setAttribute( "d", "M7,"+bottomLineY+" L93,"+bottomLineY );
        //middle and bottom lines opacity
        hideawayLinesOpacity = AJS.linear( 0, 1, fadeInDurationInFrames, currentFrame );
        middleLine.style.opacity = hideawayLinesOpacity;
        bottomLine.style.opacity = hideawayLinesOpacity;
        //recursion
        menuReturnAnimation( menuReturnDurationInFrames, currentFrame );
      });
    } else {
      currentFrame = 1;
      collapseComplete = false;
      arrowAppearComplete = false;
      menuReturnComplete = true;
    }
  }


// Close Menu Animation

  function closeMenuAnimation() {
    if ( !menuReturnComplete ) {
      menuReturnAnimation( menuReturnDurationInFrames, currentFrame );
    }
  }



///EVENTS

  svgIcon.addEventListener( "click", ()=> {
    if ( state === "menu" ) {
      openMenuAnimation();
      state = "arrow"
    } else if ( state === "arrow" ) {
      closeMenuAnimation();
      state = "menu"
    }
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
