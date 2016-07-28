$(document).ready(function(){
	// add a listener for the form submission... when we want validation to happen
	$('.sign-up-form').submit(function(){
		event.preventDefault();
		// console.log("Submitted!");

		// 1. Fields must be non-empty // require fill in for each boxva

		$('input').each(function(){
		var currentElemClass = ($(this).attr('class'));
		var errorClass = '.' +currentElemClass + '-error';
		if($(this).val() == ""){	
			$(errorClass).html("This information is required to submit the form.")
			}else{
				$(errorClass).html("")
			}
		})

		// 2. Password must be 6 characters
		var password = $('.password').val();
		if(password.length < 6){
			$('.password').focus();
			$('.pass-error').html("Your password must be at least 6 characters.")
		}else{
			$('.pass-error').html('')
		}
		// 3. Agree to terms and conditions
		var terms = $('.privacy');
		if(terms.prop('checked') !== true){
			$('.privacy').focus();
			$('.checkbox-error').html("Please agree to the terms and conditions.")
		}else{
			$('.checkbox-error').html('')
		}
		// 4. Valid email address
		var email = $('.email').val();
		if(email != "@"){
			$('.email-error').html("Please enter a valid email address.")
		}else{
			$('.email-error').html('')
		}
		// 5. Make sure phone number is a number, or follows format you could specify
		var phone = $('.phone').val();
		var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		if((phone != nums) && (phone.length < 10)){
			$('.phone-error').html("Please enter a valid, 10-digit phone number.")
		}else{
			$('.phone-error').html("")
		}
		// 6. Passwords must be the same
		var pass1 = $('.password').val();
		var pass2 = $('.password2').val();
		if(pass1 !== pass2 || pass2 == ""){
			$('.pass-error-two').html("Passwords are case-sensitive, must be 6 characters long, and must match.")
		}else{
			$('.pass-error-two').html('')	
		}

	});
});