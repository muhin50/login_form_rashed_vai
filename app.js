$(document).ready(function(){

	//login form validation


	$("#reset").click(function(){
		$("#username").val("");
		$("#password").val("");
	});


	//validation

	var username;
	var password;

	$("#login").click(function(){

		username = $("#username").val();
		password = $("#password").val();

		if(username == '' || password == '' ){
			$("#common-alert").css("display", "block");
		}else if(username.length <4){
			$("#name-alert").css("display", "block");
		}else if(password.length < 5){
			$("#pass-alert").css("display", "block");
		}


		else{
			$(".alert-success").css("display", "block");
			window.location.href = "profile.html";
		}

	});

	//change background

	$("#changebg").click(function(){
		$(".profile-area").css({
			"background-color" : "coral"
		});
	});

	//datepicker

	$("#datepicker").datepicker();

	//textarea 

	var counterDefault = 160;

	$("#counter").text(counterDefault);
	

	$("#textarea").keyup(function(){
	//get textarea character number
	var textareaChar = $("#textarea").val().length;
	var remainingChar = counterDefault - textareaChar;

	$("#counter").text(remainingChar).addClass("green").re;

	if (remainingChar < 0) {
		$("#counter").addClass("red").removeClass("green");
	}else{
		$("#counter").addClass("green").removeClass("red");
	}

	
});


	//parallax

	$('.parallax-window').parallax();

	//gallery

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});

	//tabs

	$("#tabs").tabs();

});