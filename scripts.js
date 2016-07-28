console.dir($); // pseudonym for console.dir(jQuery); - they're the same thing 

$(document).ready( // whatever is inside parantheses is the thing you want to target
	function(){
		// This code will only run when the ready event has happened. In other words,
		// the DOM must be fully loaded before this event will run.
		
		// any time, any button is clicked on this palge, run the following code
		$('button').click(function(){
			// console.log($(this).attr('todo'));  // jQuery version of the thing that was acted on, and the value of its todo attribute
			var theTrick = ($(this).attr('todo'));
			if(theTrick == "hide"){
				$('#thing').hide();
			}else if(theTrick == 'show'){
				$('#thing').show();
			}else if(theTrick == 'toggle'){
				$('#thing').toggle();
			}else if(theTrick == 'html'){
				console.log($('#thing').html());
				$('#thing').html('<table border="1"><tr><td>I am a table!</td></tr></table>');
			}else if(theTrick == 'prepend'){
				$('#thing').prepend('<div class="green">I have a friend to my right</div>');
			}else if(theTrick == 'append'){
				$('#thing').append('<div class="green">I have a friend above me</div>');
			}else if(theTrick == 'css'){
				$('#thing').css({	// you can pass a thing a full object of CSS properties and it will apply them
					"color": "orange", // remember to place quotes around property, then value, they each get quotes
					"font-size": "50px"
				});
			}else if(theTrick == 'each'){
				$('button').each(function(){
					console.log($(this).html());
				});
			}else if(theTrick == 'addClass'){
				$('#thing').addClass('fancy');
			}else if(theTrick == 'removeClass'){
				$('#thing').removeClass('fancy');
			}else if(theTrick == 'animate'){
				$('#thing').animate({
					'height': 'toggle',
					'right' : '+=50',
					'opacity' : '0.25'
				}, 5000, function(){
					console.log("I am done!")
				});
			}else if(theTrick == 'delay'){
				$('#thing').delay(5000).fadeTo("fast", 0.5);
			}else if(theTrick == 'slideUp'){
				$('#thing').slideUp('slow', function(){
					console.log("I slid up")
				});
			}else if(theTrick == 'slideDown'){
				$('#thing').slideDown("slow", function(){
					console.log("I slid down")
				});
			}else if(theTrick == 'fadeIn'){
				$('#thing').fadeIn("fast", function(){
					console.log("I faded in")
				});
			}else if(theTrick == 'fadeOut'){
				$('#thing').fadeOut("fast", function(){
					console.log("I faded out")
				});
			}else if(theTrick == 'replace'){
				$('#thing').replaceWith("<button class='bth btn-default' id='thing'>I have a new look and feel</button>");
			}else if(theTrick == 'reset'){
				$('#thing').replaceWith("<button class='btn btn-success thing' id='thing'> Do something to Me</button>");
			}else if(theTrick == 'wrap'){
				$('#thing').wrap("<div class='new'></div>");
				console.log("wrap");
			}
			
		})

		// document.getElementById('thing').style.display = "none";
	}
);

// $('#thing') // accomplishes same thing as document.getElementById('thing'). 
// for ids use '#thing', for classes use '.thing'

// console.log(document.getElementById('thing'));
// document.getElementById('thing').style.display = "none";

// function toggle(){
// 	console.log(document.getElementById('thing'));
// 	var thing = document.getElementById('thing');
// 	if(thing.style.display == "inline-block"){
// 	thing.style.display = "none";
// 	}else{
// 	thing.style.display = "inline-block";
// 	}
// }	