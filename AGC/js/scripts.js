$(function () {
	$("body>[data-role='panel']").panel();
});

function SendForm() {
                //отправка файла на сервер
                $$f({
                    formid:'contactform',//id формы
                    url:'http:/www.agc-automotive.com/appmail.php',//адрес на серверный скрипт, такой же как и в форме
                    onstart:function () {//действие при начале отправки
                        $$('result','');
                        $( "#contactform" ).hide();
                        $$('result',$$('result').innerHTML+'<br /><img src="img/ok.png" width="80" /><br/><div class="black1">The request has been successfully sent<br/><br/><a class="backtoform" style="cursor: pointer">Back to form</a></div>');//в элемент с id="result" выводим результ
                        $( '#result' );
                        $(".backtoform").click(function () {
                            $('#contactform').show();
                            $('#result').empty();
                        });
                    }
                });
    
        
    }

$(document).ready(function () {
    
	$(".item").click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});

	$(".rotate_btn_sides").click(function () {
		$('.frside').toggleClass('hide');
		$('.reside').toggleClass('hide');
		$('.in_frside').toggleClass('hide');
		$('.in_reside').toggleClass('hide');
		$(this).toggleClass('clicked');
	});

	$("#windshield .rotate_btn").click(function () {
		$('#windshield .outer').toggleClass('hide');
		$(this).toggleClass('clicked');
	});

	$("#rear .rotate_btn").click(function () {
		$('#rear .outer').toggleClass('hide');
		$(this).toggleClass('clicked');
	});

	$("#sunroof .rotate_btn").click(function () {
		$('#sunroof .outer').toggleClass('hide');
		$(this).toggleClass('clicked');
	});
});


function getFileName(uri) {
	if(uri.indexOf('/') > -1) {
		var t = uri.split('/');
		return t[t.length - 1];
	} else return uri;
}
var cat, sel, outer, inner;
var items = ['#rear .item', '#sunroof .item', '#windshield .item', '#side .item-front', '#side .item-rear'];
var loaded = [];
$('img.outer').each(function(i, elt) {
	loaded.push(getFileName(elt.src));
})
$('img.inner').each(function(i, elt) {
	loaded.push(getFileName(elt.src));
})
function scrollTop() {
	removeEvent(document, 'images:loaded', scrollTop);
	if($('#loader').length) {
		document.getElementById('loader').style.opacity = 0;
		setTimeout(function(){ $('#loader').remove(); }, 300); // timeout should match opacity transition
	}
	if($(document).scrollTop() > 1) {
		$("html, body").animate({
			scrollTop: 0
		}, {
			duration: 900,
			complete: setSrc
		});
	} else {
		setSrc();
	}
}
function setSrc() {
	var inn = '', out = '';
	switch(sel) {
		case '#side .item-front':
			inn = ' .in_reside';
			out = ' .frside';
			break;
		case '#side .item-rear':
			inn = ' .in_frside';
			out = ' .reside';
			break;
	}
	$('#' + cat + inn + ' .inner').attr('src', inner);
	$('#' + cat + out + ' .outer').attr('src', outer);
}
$(items).each(function(i, selector) {
	$(selector).each(function(j, elt) {
		$(elt).click(function () {
			cat = $(this).parents('[data-role=page]').attr('id');
			sel = selector;
			outer = $(this).attr('data-color');
			inner = $(this).attr('data-color-inner');
			if($.inArray(getFileName(outer), loaded) < 0 || $.inArray(getFileName(inner), loaded) < 0) {
				var il = new ImageLoader([outer, inner]);
				addEvent(document, 'images:loaded', scrollTop);
				var loader = document.createElement('div');
				loader.id = 'loader';
				loader.style.position = 'fixed';
				loader.style.zIndex = 9999;
				loader.style.top = 0;
				loader.style.left = 0;
				loader.style.bottom = 0;
				loader.style.right = 0;
				loader.style.backgroundColor = 'rgba(0,0,0,0.5)';
				loader.style.transition = 'opacity 0.3s';
				var loadImg = document.createElement('img');
				loadImg.style.width = '64px';
				loadImg.style.height = '64px';
				loadImg.style.position = 'fixed';
				loadImg.style.top = '50%';
				loadImg.style.left = '50%';
				loadImg.style.margin = '-32px 0 0 -32px';
				loadImg.src = 'img/ajax-loader.gif';
				$(loader).append(loadImg);
				$('body').append(loader);
				loaded.push(getFileName(inner));
				loaded.push(getFileName(outer));
			} else {
				scrollTop();
			}
		});

	})
});


$('.front-navbar a').click(function () {
	$('.front-navbar a.tempbtn').toggleClass('ui-btn-active');
	$('.front-navbar .ui-block-a a').toggleClass('ui-btn-active');
	$('.content_front').hide();
	$('#' + $(this).attr('data-href')).show();
});

$('.side-navbar a').click(function () {
	$('.side-navbar a.tempbtn').toggleClass('ui-btn-active');
	$('.side-navbar .ui-block-a a').toggleClass('ui-btn-active');
	$('.content_side').hide();
	$('#' + $(this).attr('data-href')).show();
});

$("<div class='enter'></div>").insertBefore("#tech-spec a");

$(".windows").wrap("<div class='win-wrap' />");

$("#tech-spec .enter").click(function () {
	$('#auth').removeClass('hide');
});

function login() {
	var password = $('.pass').val();
	var truePassword = 'AGC2016';
	if ((password == truePassword)) {
		$('#auth').remove();
		$('.enter').remove();
	} else {
		alert("Error! Try again");
	}
}