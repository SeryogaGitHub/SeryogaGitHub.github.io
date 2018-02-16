$(function () {

	// слайдер
	$('.slider').slick({
		dots: true,
		arrows: false
	});

	 $('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		focusOnSelect: true,
		arrows: false
	});

	// випадаюче меню
	$(".dropdown").on('click',function(e){
		e.preventDefault();

		if($(this).hasClass("show")){
			$(this).removeClass("show");
			$(this).find(".dropdown-menu").stop().slideUp();
			
		} else {
			$(this).find(".dropdown-menu").stop().slideDown();
			$(this).addClass("show");
		}
	});

	$(".mobile-menu").on("click", function(){
		$(this).toggleClass("active");

		if($(this).hasClass("active")){
			$(".toggle-nav").stop().slideDown();
		} else {
			$(".toggle-nav").stop().slideUp();
		}
		
	});

	// випадаючий блок
	$(".dropdown-container .toggle").on('click',function(e){
		e.preventDefault();
		$(this).parents('.dropdown-container').toggleClass("show");
	});
	
	// таби
	$(".nav-tabs a").on('click',function(e){
		e.preventDefault();

		$(".tab-panel").removeClass("show");
		$(".nav-tabs a").removeClass("active");

		var id = $(this).attr("href");

		$(this).addClass("active");
		$(this).parents('.tabpanel').find(id).addClass("show");
	});

	// вибір пункта в випадаючому меню
	$(".dropdown-menu a").on("click", function(){
		var val = $(this).text(),
			input = $(this).parents(".dropdown"),
			inputTrue = input.attr("data-input");

			// добавляємо значення в прихований input
			if(inputTrue !== undefined){
				if(inputTrue.length > 0){
					$("body").find(inputTrue).val(val);
				}
			}

		$(this).parents(".dropdown").children(".button").text(val);
	});

	// popap
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});