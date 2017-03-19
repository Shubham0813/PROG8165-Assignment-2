window.onload = function() {
  	new WOW().init();
	validateLoginForm();
	validateRegistrationForm();
	validateAddTransactionForm();
};

function validateLoginForm() {
	
	var form = document.getElementById("loginForm");

	if(form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();

			var username = document.getElementById("loginUsername");
			var password = document.getElementById("loginPassword");

			if(username && password) {
				var usernameOk = validateUsername(username.value);
				var passwordOk = validatePassword(password.value);

				if (usernameOk && passwordOk)
					location.href="dashboard.html";
			}
		});
	}
}

function validateUsername(username) {
    var errorElement = document.getElementById("usernameError");
	
	if(!errorElement) 
		return;

	var regExpEmail = new RegExp("^.{5,}$");

	if(!regExpEmail.test(username)) {
		errorElement.innerHTML = "Username must be at least 5 characters.";
		return false;
	} else {
		errorElement.innerHTML = "";
		return true;
	}	
}

function validatePassword(password) {
    var errorElement = document.getElementById("passwordError");
	
	if(!errorElement) 
		return;

	var regExpEmail = new RegExp("^.{4,}$");

	if(!regExpEmail.test(password)) {
		errorElement.innerHTML = "Password must be at least 4 characters.";
		return false;
	} else {
		errorElement.innerHTML = "";
		return true;
	}	
}

function validateRegistrationForm() {
	var form = document.getElementById("registrationForm");

	if(!form)
		return;

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

function validateAddTransactionForm() {
	var form = document.getElementById("addTransactionForm");

	if(form) {
		
		form.addEventListener('submit',function(e) {
			e.preventDefault();

			var inputDate = document.getElementById("inputDate");
			var description = document.getElementById("inputDescription");
			var val = document.getElementById("inputValue");

			if(inputDate && description && val){
				var inputDateOk = validateDate(inputDate.value);
				var descriptionOk = validateDescription(description.value);
				var valueOk = validateValue(val.value);
					
				if(inputDateOk && descriptionOk && valueOk) {
						alert("Success");
				}
			}
		 });
	}
}

function validateDate(dateValue) {
    
    var dateError = document.getElementById("dateError");
    
    if(!dateError)
    	return;

    var regDate = new RegExp("^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$");

    if (!regDate.test(dateValue)) {
        dateError.innerHTML = "Please enter the Date (in correct format)";
        return false;
    }
    else {
    	dateError.innerHTML = "";
    	return true;
    }
}

function validateDescription(description) {
	
    var errorElement = document.getElementById("descriptionError");

	if(!descriptionError) 
		return;

	var regDescription = new RegExp("^[A-Za-z0-9_\\- ]{10,}$");
	
	if(!regDescription.test(description)) {
		errorElement.innerHTML = "Minimum 10 characters and can only include characters,numbers,spaces,-,_";
		return false;
	} else {
		errorElement.innerHTML = "";
		return true;
	}	
}

function validateValue(inputValue) {
	
	var errorElement = document.getElementById("valueError");
    
    if(!errorElement) 
    	return false;

	var regValue = new RegExp("^[+,-]\\.?[0-9]+(\\.[0-9]+)?$");

	if(!regValue.test(inputValue)) {
		errorElement.innerHTML = "Amount requires +/- prefix.";
		return false;
	} else {
		errorElement.innerHTML = "";
	}

	
	var amount = 0;
	
	try {
		var amount = Number.parseFloat(inputValue.substr(1)).toFixed(2);	
	} catch(e) {
		errorElement.innerHTML = "Invalid amount.";
		return false;
	}

	if(amount > 10000){
		errorElement.innerHTML = "Amount exceeds +/- 10,000.00";
		return false;
	}

	errorElement.innerHTML = "";
	return true;
}