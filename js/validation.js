window.onload = function() {
  	new WOW().init();
	validateRegistrationForm();
};

function validateRegistrationForm()
{
	var form = document.getElementById("registrationForm");
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


