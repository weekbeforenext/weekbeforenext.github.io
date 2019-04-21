//VALIDATION JS (from http://developer.apple.com/internet/webcontent/validation.html)
//overall checker fcn
function formchecker(theForm){
  /*if (theForm.Name.value == ""){
    alert("Please enter your name.");
    theForm.Name.focus();
    return (false);
  }*/
	var why = "";
	if (theForm.firstName.value == "" || theForm.lastName.value == ""){
		why += "Please enter your full name. \n";
	}
	why += checkEmail(theForm.email.value);
	why += checkPhone(theForm.phoneMobile.value);
	if (theForm.address.value == "" || theForm.city.value == "" || theForm.zipCode.value == ""){
		why += "Please include a full mailing address. \n";
	}
	why += checkDropdown(theForm.fiftyStatesAbb.value);
	why += checkUsername(theForm.userName.value);
    if (why != "") {
       alert(why);
       return false;
    }
	return true;
}

// email
function checkEmail (strng) {
	var error="";
	if (strng == "") {
		error = "You didn't enter an email address.\n";
	}

    var emailFilter=/^.+@.+\..{2,3}$/;
    if (!(emailFilter.test(strng))) { //check format
       error = "Please enter a valid email address.\n";
    } else { //test email for illegal characters
       var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/
         if (strng.match(illegalChars)) {
          error = "The email address contains illegal characters.\n";
       }
    }
	return error;
}

// phone number - strip out delimiters and check for 9 digits
function checkPhone (strng) {
	var error = "";
	if (strng == "") {
		error = "You didn't enter a phone number.\n";
	}

	var stripped = strng.replace(/[\(\)\.\-\ ]/g, ''); //strip out acceptable non-numeric characters
    if (isNaN(parseInt(stripped))) {
       error = "The phone number contains illegal characters.";
    }
    if (!(stripped.length == 10)) {
		error = "The phone number is the wrong length. Make sure you included an area code.\n";
    } 
	return error;
}

// name
function checkName (strng) {
	var error = "";
	if (strng == "") {
	   error = "You didn't enter a full name.\n";
	}
	return error;
}

// username - 4-10 chars, uc, lc, and underscore only.
function checkUsername (strng) {
	var error = "";
	if (strng == "") {
		error = "You didn't enter a username.\n";
	}

    var illegalChars = /\W/; // allow letters, numbers, and underscores
    if ((strng.length < 4) || (strng.length > 10)) {
       error = "The username is the wrong length.\n";
    } else if (illegalChars.test(strng)) {
    	error = "The username contains illegal characters.\n";
    }
	return error;
}

// valid selector from dropdown list
function checkDropdown(choice) {
	var error = "";
    if (choice == 0) {
    	error = "Please select a State from the dropdown list.\n";
    }    
	return error;
}