/*Function to validate the first name. It should contain atleast 2 characters and atmost 15 characters.*/
function validateFirstName() {
	var firstName = document.getElementById("firstName").value;
	var rel = /^[a-zA-Z\s\'\-]{2,15}$/;
	
	if(rel.test(firstName))
	{
		document.getElementById("msg1").style.color = "green";
	    document.getElementById("msg1").innerHTML = "<strong>Valid</strong>";
		return true;
	}
	else
	{
		document.getElementById("msg1").style.color = "red";
		document.getElementById("msg1").innerHTML = "<strong>Enter 2&ndash;15 characters</strong>";
		return false;
	}
		
}

/*Function to validate the last name. It should contain atleast 2 characters and atmost 15 characters.*/
function validateLastName() {
	var lastName = document.getElementById("lastName").value;
	var rel = /^[a-zA-Z\s\'\-]{2,15}$/;
	
	if(rel.test(lastName))
	{
		document.getElementById("msg2").style.color = "green";
	    document.getElementById("msg2").innerHTML = "<strong>Valid</strong>";
		return true;
	}
	else
	{
		document.getElementById("msg2").style.color = "red";
		document.getElementById("msg2").innerHTML = "<strong>Enter 2&ndash;15 characters</strong>";
		return false;
	}
}

/*Function to validate the phone number. It must be in the format xxx-xxx-xxxx.*/
function validatePhoneNumber() {
	var phoneNumber = document.getElementById("phoneNumber").value;
	var rel = /^\d{3}-\d{3}-\d{4}$/;
	
	if(rel.test(phoneNumber))
	{
		document.getElementById("msg3").style.color = "green";
	    document.getElementById("msg3").innerHTML = "<strong>Valid</strong>";
		return true;
	}
	else
	{
		document.getElementById("msg3").style.color = "red";
		document.getElementById("msg3").innerHTML = "<strong>Use xxx-xxx-xxxx format.</strong>";
		return false;
	}
		
}

/*Function to validate the Date of Joining. It must be filled and less than the today's date.*/
function validateDateOfJoining() {
        var dateString = document.getElementById('dateOfJoining').value;
        var myDate = new Date(dateString);
        var today = new Date();
        if ( myDate > today ) { 
		   document.getElementById("msg4").style.color = "red";
		   document.getElementById("msg4").innerHTML = "<strong>You cannot enter a date in the future!</strong>";
            return false;
        }
		else if( myDate == "Invalid Date")
		{
           document.getElementById("msg4").style.color = "red";
		   document.getElementById("msg4").innerHTML = "<strong>Please enter your Date of Joining!</strong>";
		}
		else
		{
			console.log(myDate);
			document.getElementById("msg4").style.color = "green";
	        document.getElementById("msg4").innerHTML = "<strong>Valid</strong>";
            return true;
		}
    }

/*Function to validate the radio button options. Any one option must be selected.*/
function radioCheck() {
	if(( !document.getElementById('remoteTime').checked && !document.getElementById('remoteTime1').checked 
	&& !document.getElementById('remoteTime2').checked && !document.getElementById('remoteTime3').checked)
	|| (!document.getElementById('rating1').checked && !document.getElementById('rating2').checked 
	&& !document.getElementById('rating3').checked && !document.getElementById('rating4').checked 
	&& !document.getElementById('rating5').checked ))
	{
	 alert("Please select any option!");
	 return false;
	}
	else{
		return true;
	}
	 	 
}

/*Function to validate the Location. Any one city must be selected from dropdown menu.*/
function dropdownCheck() {
var ddl = document.getElementById("city");
 var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "selectcity")
   {
    alert("Please select a city.");
	return false;
   }
   else{
	   console.log(selectedValue);
   return true;
   }
}

/*Function to validate the full form. This checks if all the validations above return true, if yes, than redirect to dummy submit page.
 If not, than stay on the form. */
function validateForm(){
	if(validateFirstName() && validateLastName() && validatePhoneNumber() && validateDateOfJoining() 
		&& radioCheck() && dropdownCheck())
	return true;
	
	else 
		return false;
	
}