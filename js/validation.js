function onFormSubmit(){
	//enter validation check here
	document.getElementById('success-message').style.display = "block";
	setTimeout(function(){
	document.getElementById('success-message').style.display = "none";
	},2000 );
}