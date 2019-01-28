$(function () {
	
	// DOCUMENT READY
    $(document).ready(function () {    
	    // PRELOADER ROTATER
	    window.onload = function () {
	        // Site Preloader
	        $('#preloader').fadeOut('slow', function () {
	            $(this).remove();
	        });
	    }
		
		// ON CLICK - MENU - SCROLLING TO SECTION
		$(document).on('click', 'a#deals', function (e) { 
			var thisEvent = $(this).attr("id");	
			//console.log('target: '+thisEvent);
		
			e.preventDefault();
			$("div.plants").not(".deal").hide();
		});
		// ON CLICK - MENU - SCROLLING TO SECTION
		$(document).on('click', 'a#home', function (e) { 
			var thisEvent = $(this).attr("id");	
			//console.log('target: '+thisEvent);
		
			e.preventDefault();
			$("div.plants").not(".deal").show();
		});
		// ON CLICK - AFTER SENDINMG EMAIL
		$(document).on('click', '#fire_email', function (e) { 
			var thisEvent = $(this).attr("id");	
			console.log('target: '+thisEvent);
		
			e.preventDefault();
			if(document.getElementsByName('name')[0].value == '' || document.getElementsByName('email')[0].value == '' || document.getElementsByName('phone')[0].value == '' || document.getElementsByName('message')[0].value == ''){
				$('#msg_fired').html('There was a problem sending the message, please try again.').show();
			} else {
				$('#msg_fired').html('Your message has been sent. Thank You!').show();
			}
// 			$("#ContactUs").delay("slow").fadeOut('slow');
		});

	});
});