$(document).ready( function () {	
		
	var debug_string = ""
	function debug_output() {
		if ($('.debug_check').is(':checked')) {$('.debug').html(debug_string)} 
			else {$('.debug').html("")};

	}


	//event handlers
	$(document).on("keyup", ".phonenums", function () {
		//calls largest_phone number on the result of
		$('.output').html(largest_phone_number(load_array($('.phonenums').val())));
		debug_output()
	});
	$(document).on("click", ".debug_check", function () {
		debug_output()
	})
	


	//Alright so first LARGE task is to load the array
	// I am aware that that I can use string.split() but I want to do all
	// of this as primitively as possible
	function load_array (input_string) {

		var phonenums = new Array();
		
		//this records how many characters between seperators.
		// I want to account for bad input too.
		var chars_b4_comma = 0;
		
		// here we begin to iterate through the input string
		debug_string = ""
		debug_string += "<br>START INPUT STRING LOOP: "
		for (i = 0; i < input_string.length -1; i++) { 
    		debug_string += "<br>iteration("+ i+") "
    		
    		
    		if (input_string.substring(i, i+2) == ", ") {
    			
    			
    			debug_string += "<br>chars b4 comma: " + chars_b4_comma
    			debug_string += "<br>String Length: " + input_string.length
    			if (chars_b4_comma !== 12 ) {
    				//we immeadiately stop evaluating the string here once we hit bad input
    				return false;
    				
    			} else {
    				//note that the task of ensuring correct input is split between 
    				//our load array function and our largest phone number function
    				//I realize this is bad design
    				debug_string += "<br>correct substring is: " + input_string.substring(i-13, i)
    				phonenums.push(input_string.substring(i-12, i));

    			}
    			
    			//the reason this is not reinitialized to 0 is that
    			// we can only reinitialize when we are on the character slot 
    			// that contains the comma
    			// if we reinitialize to 0 when we are on the comma then 
    			// the space is counted as part of the preceeding string
    			// which skews chars_b4_comma after the first correct input
    			chars_b4_comma = -1;

    		} else {
    		chars_b4_comma += 1;
    		
    		}
		}
		return phonenums;
	}



	function largest_phone_number (phonenums) {
		var largest_index = 0
		var output_string = ""

		if (phonenums === false) { return "Invalid Input"}
		
		if (phonenums.length > 0) {
			display_array(phonenums)
			display_sums(phonenums);
			display_largest(phonenums)	
			}
			
		
		
			
		
		function sum (phonenum) {
			var sum = 0;
			var digit = 0;
			for (j=0; j < phonenum.length; j++) {
				// here is where we finish making sure that it is 
				// a properly formatted phone number
				// we know that the 3rd and 7th element of the string 
				// array needs to be a '-', and that every other element 
				// needs to be numeric
				if ((j == 3) || ( j == 7)) {
						debug_string += "<br>j = " + j;
						debug_string += "<br>phonenums[i].substring(j)= " + phonenum[i].substring(j, j+1)
						if (( phonenum.substring(j, j+1) != "-" )) { return "Invalid Input" }
						
				} else if ( Number.parseInt(phonenum.substring(j, j+1)) != NaN ) {
						digit = Number.parseInt(phonenum.substring(j, j+1))
						sum += digit;
				}
			}


			return sum
		}

		function display_array (arr) {
			output_string += "<hr><br>Given Array: <br>"
			
			for (i = 0; i < arr.length; i++) {
				output_string += " '"+ arr[i] + "', ";
			}
		}
		function display_sums (arr) {
			output_string += "<br>Sums: <br> ";
			for (i=0; i< arr.length; i++) {
				output_string += sum(arr[i]) + ", "
			}
		}

		function display_largest (arr) {
			

			for (i = 0; i < arr.length; i++) {
				if ( (sum(arr[i])) >= (sum(arr[largest_index]))  ) {
					largest_index = i
					
				}
				}
				output_string += "<br><br>largest summed number: '" + arr[largest_index] + "' "
				output_string += "<br>Sum of largest: " + sum(arr[largest_index]) +" "
		}


		
		return output_string;
	}
});