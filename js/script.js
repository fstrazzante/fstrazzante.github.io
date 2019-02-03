$(document).ready(function () {
	if (window.location.href.indexOf("#work") > -1) {
		$(".works-container").css("display", "block")
		$("#toggle-works").text("hide works")
		$("#toggle-works").attr('href', '#works')
		$("html, body").animate({ scrollTop: $(".works-container").offset().top }, 1000);
	} else if (window.location.href.indexOf("#we") > -1){
		$("html, body").animate({ scrollTop: $("#we").offset().top }, 1000);
		$(".works-container").css("display", "block")
		$("#toggle-works").text("hide works")
		$("#toggle-works").attr('href', '#works')
	}
});

$("#we-btn").click(()=>{
	$("html, body").animate({ scrollTop: $("#we").offset().top }, 1000);
	$(".works-container").css("display", "block")
	$("#toggle-works").text("hide works")
	$("#toggle-works").attr('href', '#works')
})

$("#edu-btn").click(() => {
	$("html, body").animate({ scrollTop: $("#edu").offset().top }, 1000);
})

$("#toggle-works").click(function() {
	if($(".works-container").css("display")=="none"){
		$(".works-container").css("display", "block")
		$("html, body").animate({ scrollTop: $(".works-container").offset().top }, 1000);
		$("#toggle-works").text("hide works")
		$("#toggle-works").attr('href', '#works')
	}else{
		$(".works-container").css("display", "none");
		$("#toggle-works").text("show works")
		$("#toggle-works").attr('href', '#we')
	}
});

var i = 0;
$("div#box").mousemove(function(e){
	if(i<1){
		i++
	}else{
		i=0
		var parentOffset = $(this).offset(); 
		var relX = e.pageX - parentOffset.left;
		var relY = e.pageY - parentOffset.top;
		var w = $(this).width()+40;
		var h = $(this).height()+40;
		var factor=20;
		var scale = 1.04;
		var degX = -1*((Math.round((relX/(w*scale)*factor)* 100) / 100 ) -(factor/2));
		var degY = (Math.round((relY/(h*scale)*factor)* 100) / 100 ) -(factor/2);
		$(this).css({
			'transform': 'perspective(1000px) scale3d('+scale+','+scale+','+scale+') rotateX('+degY+'deg) rotateY('+degX+'deg)',
			'-webkit-transform': 'perspective(1000px) scale3d('+scale+','+scale+','+scale+') rotateX('+degY+'deg) rotateY('+degX+'deg)',
			'-moz-transform': 'perspective(1000px) scale3d('+scale+','+scale+','+scale+') rotateX('+degY+'deg) rotateY('+degX+'deg)',
			'-o-transform': 'perspective(1000px) scale3d('+scale+','+scale+','+scale+') rotateX('+degY+'deg) rotateY('+degX+'deg)',
			'-ms-transform':'perspective(1000px) scale3d('+scale+','+scale+','+scale+') rotateX('+degY+'deg) rotateY('+degX+'deg)',
			'transform': 'perspective(1000px) scale3d('+scale+','+scale+','+scale+') rotateX('+degY+'deg) rotateY('+degX+'deg)',

			'transition-duration': '50ms'
		})
	}	
});

$('div#box').mouseout(function(event) {
	$(this).css({
		'transform':'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
		'transition-duration': '400ms'
	})
});