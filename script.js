$(function() {
	$('div#img').height($(window).height());
	// $('img.bg-img').width($(window).width());
})

$(window).on('load', function(){
	$('div#img').css('opacity','1');
})

function delayedIntro() {
	$('div#intro').css({
			opacity:'1'
			// marginTop: '25%'
		});
	
		$('img.logo').delay().css({
			opacity: '1',
			marginTop: '0'
		});
		$('img.tagline').css({
			opacity: '1'
		});
		$('div.info').css({
			opacity:'1'
		});
}

$(window).on('scroll', onScroll);
function onScroll() {
	// var heightImg = $('.fade-in3').height();
	// var initialPos = $('.fade-in3').position().top;
	// var finalPos =  initialPos - heightImg;
	// $('div.D1').css({
	// 	color: 'rgba(55,55,55,0)'
	// });
	// console.log(heightImg, initialPos, finalPos);
	if ($(window).scrollTop() >= $('.last').position().top - $('.last').height()) {
		var timeoutID = setTimeout(delayedIntro, 2000);
	} else {
		$('div#intro').css({
			opacity:'0'
		});
	}
}