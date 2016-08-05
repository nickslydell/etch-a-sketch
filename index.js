$(document).ready(function() {
	$('body').append("<div></div>");
	$('div').addClass("container");

	/*for (var j = 1; j <= 16; j++){
		$('.container').append("<div class='col-"+j+"'></div>");
		for (var i = 0; i < 16; i++){
			$("'col-"+j+"'").append("<div class='cell'></div>");
		}
	}*/

	$('.container').append("<div class='col-1'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-1').append("<div class='cell'></div>");
	}

	$('.container').append("<div class='col-2'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-2').append("<div class='cell'></div>");
	}

	$('.container').append("<div class='col-3'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-3').append("<div class='cell'></div>");
	}

	$('.container').append("<div class='col-4'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-4').append("<div class='cell'></div>");
	}

	$('.container').append("<div class='col-5'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-5').append("<div class='cell'></div>");
	}

	$('.container').append("<div class='col-6'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-6').append("<div class='cell'></div>");
	}

	$('.container').append("<div class='col-7'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-7').append("<div class='cell'></div>");
	}

	$('.container').append("<div class='col-8'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-8').append("<div class='cell'></div>");
	}

	$('.container').append("<div class='col-9'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-9').append("<div class='cell'></div>");
	}

	$('.container').append("<div class='col-10'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-10').append("<div class='cell'></div>");
	}

	$('.container').append("<div class='col-11'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-11').append("<div class='cell'></div>");
	}

	$('.container').append("<div class='col-12'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-12').append("<div class='cell'></div>");
	}

	$('.container').append("<div class='col-13'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-13').append("<div class='cell'></div>");
	}

	$('.container').append("<div class='col-14'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-14').append("<div class='cell'></div>");
	}

	$('.container').append("<div class='col-15'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-15').append("<div class='cell'></div>");
	}

	$('.container').append("<div class='col-16'></div>");
	for (var i = 0; i < 16; i++){
		$('.col-16').append("<div class='cell'></div>");
	}

	$('.cell').hover(function (){
		$(this).addClass("highlight");
	});

	$('body').append("<button>Clear Grid</button>")

	$('button').click(function () {
		$('.cell').removeClass('highlight');
	});
	//$('body').append("<p>Test</p>");*/
});