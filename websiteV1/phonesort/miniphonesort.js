function largest_phone_number (phonenums) {
			var largest_index = 0
			var output_string = ""

			if (phonenums === false) { return "Invalid Input"}
			
			if (phonenums.length > 0) {
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