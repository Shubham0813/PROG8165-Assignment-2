window.onload = function() {
  	new WOW().init();
	validateLoginForm();
	validateRegistrationForm();
};

function validateLoginForm() {
	
	var form = document.getElementById("loginForm");
	
	form.addEventListener('submit', function(e) {
		e.preventDefault();

		var username = document.getElementById("loginUsername").value;
		var password = document.getElementById("loginPassword").value;

		var usernameOk = validateUsername(username);
		var passwordOk = validatePassword(password);

		if (usernameOk && passwordOk)
			location.href="dashboard.html";
	});
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


