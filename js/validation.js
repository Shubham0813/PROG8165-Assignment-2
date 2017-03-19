window.onload = function() {
  	new WOW().init();
	validateRegistrationForm();
};

function validateRegistrationForm()
{
	var form = document.getElementById("registrationForm");
	form.addEventListener('submit',function(e) {
		e.preventDefault();

		var emailID = document.getElementById("emailID");
		var username = document.getElementById("signupUsername");
		var firstName = document.getElementById("firstName");
		var lastName = document.getElementById("lastName");
		var password = document.getElementById("signupPassword");
		var confirmPassword = document.getElementById("confirmPassword");
		
		if(emailID && username && firstName && lastName && password && confirmPassword) {

			var emailIDOk = validateEmail(emailID.value);
			var usernameOK = validateSignupUsername(username.value);
			var firstNameOk = validateFirstName(firstName.value); 
			var lastNameOk = validateLastName(lastName.value);
			var signUpPasswordOk = validateSignupPassword(signupPassword.value); 
			var confirmPasswordOk = validateConfirmPassword(confirmPassword.value);

			if(emailIDOk && usernameOk && firstnameOk && lastNameOk && signupPasswordOk && confirmPassword) {
				alert("Success");
			}
		}
	});
}

function validateEmail(email) {
	
    var errorElement = document.getElementById("emailError");
	
	if(!errorElement) 
		return;

	var regExpEmail = new RegExp("(.+)@(.+){2,}\.(.+){2,}");

	if(!regExpEmail.test(email)) {
		errorElement.innerHTML = "Please enter correct Email ID";
		return false;
	} else {
		errorElement.innerHTML = "";
		return true;
	}	
}

function validateSignupUsername(username) {

	var errorElement = document.getElementById("signupUsernameError");
    
    if(!errorElement) 
    	return false;

	var regExpUsername = new RegExp("[A-z0-9_\\- ]{5,}$");

	if(!regExpUsername.test(username)) {
		errorElement.innerHTML = "Username must be of minimum 5 characters and can include A-z, 0-9, _, - and spaces(no comma)";
		return false;
	} else {
		errorElement.innerHTML = "";
		return true;
	}
}

function validateFirstName(firstName) {
	
	var errorElement = document.getElementById("firstNameError");
    
    if(!errorElement) 
    	return false;

	var regExpFirstName = new RegExp("[A-Z][a-z0-9 ]+");

	if(!regExpFirstName.test(firstName)) {
		errorElement.innerHTML = "First name can consist of only A-z, 0-9 and spaces." +
		 "It should start with first letter capital and rest must be lowercase";
		return false;
	} else {
		errorElement.innerHTML = "";
		return true;
	}
}

function validateLastName(lastName) {
	
	var errorElement = document.getElementById("lastNameError");
    
    if(!errorElement) 
    	return false;

	var regExpLastName = new RegExp("[A-Z][a-z0-9 ]+");

	if(!regExpLastName.test(lastName)) {
		errorElement.innerHTML = "Last name can consist of only A-z, 0-9 and spaces." +
		 "It should start with first letter capital and rest must be lowercase";
		return false;
	} else {
		errorElement.innerHTML = "";
		return true;
	}
}

function validateSignupPassword(password) {
	
	var errorElement = document.getElementById("signupPasswordError");
    
    if(!errorElement) 
    	return false;

	var regExpPassword = new RegExp("(.){4,}");

	if(!regExpPassword.test(password)) {
		errorElement.innerHTML = "Password must be minimum 4 characters long";
		return false;
	} else {
		errorElement.innerHTML = "";
		return true;
	}
}

function validateConfirmPassword(confirmPassword) {
	
	var errorElement = document.getElementById("confirmPasswordError");
    
    if(!errorElement) 
    	return false;

	var passwordField = document.getElementById("signupPassword");
	if(passwordField) {
		if(confirmPassword !== passwordField.value) {
			errorElement.innerHTML = "Passwords do not match";
			return false;	
		}
		else {
			errorElement.innerHTML = "";	
			return true;
		}
	}
}