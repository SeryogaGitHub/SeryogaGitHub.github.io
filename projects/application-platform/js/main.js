"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

$(function () {
  //  more block
  var newShowElements = 0;
  $('.content-more').each(function () {
    var $this = $(this);
    var allWrapMore = $this.find('.wrap-more');
    var countWrapMores = allWrapMore.length;
    var showMoreBtn = $this.find('.show-more');
    var showElementsCount = Number($this.attr('data-show'));

    for (var i = 0; i < showElementsCount; i++) {
      allWrapMore.eq(i).addClass('fadeIn');
    }

    var fadeIn = $this.find('.fadeIn').length;
    showMoreBtn.find(".count-more").text(countWrapMores - fadeIn);
  });
  $('.show-more').on('click', function () {
    var $this = $(this).parents('.content-more');
    var allWrapMore = $this.find('.wrap-more');
    var countWrapMores = allWrapMore.length;
    var showMoreBtn = $this.find('.wrap-more').length;
    var fadeIn = $this.find('.fadeIn').length;
    var showElementsCount = Number($this.attr('data-show'));
    newShowElements = fadeIn + showElementsCount;

    for (showElementsCount; showElementsCount < newShowElements; showElementsCount++) {
      allWrapMore.eq(showElementsCount).addClass('fadeIn');
    }

    var fadeInCount = $this.find('.fadeIn').length;
    $(this).find(".count-more").text(showMoreBtn - fadeInCount);

    if (countWrapMores <= newShowElements) {
      $(this).hide();
      $(this).after('<button class="btn line less-more">View Less</button>');
    }
  });
  $('body').on('click', '.less-more', function () {
    var $this = $(this).parents('.content-more');
    var showElementsCount = Number($this.attr('data-show'));
    var allWrapMore = $this.find('.wrap-more');
    var showMoreBtn = allWrapMore.length;
    $this.find('.show-more').show();
    allWrapMore.removeClass("fadeIn");

    for (var i = 0; i < showElementsCount; i++) {
      allWrapMore.eq(i).addClass('fadeIn');
    }

    $(this).remove();
    $this.find(".count-more").text(showMoreBtn - showElementsCount);
  }); // end more block
  // tabs

  var $tabsContainer = $('.tabs-container');
  $tabsContainer.on("click", '.tab-link', function (e) {
    e.preventDefault();
    var $this = $(this);
    var id = $this.attr("href");
    var $parents = $this.parents('.tabs-container');
    $parents.find('.tab-link').removeClass("active");
    $this.addClass('active');
    $parents.find('.tabs-content .tab-item').removeClass("active");
    $parents.find(id).addClass("active");
  }); // end tabs
  // view grid toggle

  $('.state-view-link').on('click', '.view', function (e) {
    e.preventDefault();
    var $this = $(this);
    var id = $this.attr('data-view');
    var $parent = $this.parents('.state-view-container');
    $parent.find('.state-view-content').removeClass("active");
    $("body").find(id).addClass("active");
  });
  $('.input-file').on('change', "input", function (event) {
    var $parent = $(this).parents(".input-file");
    $parent.find(".input-file__name").remove();
    $parent.append('<div class="input-file__name">' + event.target.files[0].name + '</div>');
  });
});

function handleFiles(files) {
  var files = _toConsumableArray(files);

  var filesHtml = "";

  for (var i = 0; files.length > i; i++) {
    filesHtml += '<div class="name">' + files[i].name + '</div>';
  }

  $(this).before(filesHtml);
}