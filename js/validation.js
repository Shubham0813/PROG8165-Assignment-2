window.onload = function() {
  	new WOW().init();
	validateRegistrationForm();
};

function validateRegistrationForm()
{
	var form = document.getElementById("registrationForm");

	if(!form)
		return;

	form.addEventListener('submit',function(e) {
		e.preventDefault();

		var emailID = document.getElementById("signupEmailID").value;
		var username = document.getElementById("signupUsername").value;
		
		var emailOk = validateEmail(emailID) 
		var usernameOK = validateSignupUsername(username);

		if (emailOk && usernameOK)
			alert("Success");
	});
}


function validateEmail(email) {
	
    var errorElement = document.getElementById("emailError");
	
	if(!errorElement) 
		return;

	var regExpEmail = new RegExp("(.+)@(.+){2,}\.(.+){2,}");

	if(!regExpEmail.test(email)) {
		errorElement.innerHTML = "Error Bruh!";
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

	var regExpUsername = new RegExp("([A-Z]$)");

	if(!regExpUsername.test(username)) {
		errorElement.innerHTML = "Error Bruh!";
		return false;
	} else {
		errorElement.innerHTML = "";
		return true;
	}
} 

function validateAddTransactionForm()
{
	var form = document.getElementById("form-horizontal");
	form.addEventListener('submit',function(e) {
		e.preventDefault();
		var description = document.getElementById("inputDescription");
		var val = document.getElementById("inputValue");
		if(description && val){
			var descriptionOk = validateEmail(description.value);
			var valueOk = validateSignupUsername(val.value);
		if(descriptionOk && valueOk) {
				alert("Success");
			}
		}
	});
}

function validateDescription(description) {
	
    var errorElement = document.getElementById("descriptionError");

	if(!descriptionError) 
		return;

	var regDescripton = new RegExp("[A-Za-z0-9_\\- ]{10,}$");

	if(!regDescripton.test(description)) {
		errorElement.innerHTML = "Minimum 10 characters and can only include characters,numbers,spaces,-,_";
		return false;
	} else {
		errorElement.innerHTML = "";
		return true;
	}	
}

function validateDate() {
    var date = document.forms["form-horizontal"]["inputDate"].value;
    if (date == "") {
        dateError.innerHTML = "Enter the Date";
        return false;
    }
}

function validateValue(value) {
	
	var errorElement = document.getElementById("ValueError");
    
    if(!errorElement) 
    	return false;

	var regValue = new RegExp("[+,-](\\.?[0-9]+\\.?)");

	if(!regValue.test(value)) {
		errorElement.innerHTML = "Amount requires +/- prefix.";
		return false;
	} else {
		errorElement.innerHTML = "";
	}

	
	var amount = 0;
	
	try {
		var amount = Number.parseFloat(value.substr(1)).toFixed(2);	
	} catch(e) {
		errorElement.innerHTML = "Invalid amount.";
		return false;
	}

	if(amount > 10000){
		errorElement.innerHTML = "Amount exceeds +/- 10,000.00";
		return false;
	}

	errorElement.innerHTML = "";

} 

