function onFormSubmit(){
	//enter validation check here
	document.getElementById('success-message').style.display = "block";
	setTimeout(function(){
	document.getElementById('success-message').style.display = "none";
	},2000 );
}

(function() {
	fillTransactionTable();
})();

function fillTransactionTable() {
	generateRows();
	//TODO
	//addDetailButtonListeners();
}

function generateRows() {
    getAllTransactions().forEach(appendTransactionRow);
}

function appendTransactionRow(transaction, index) {
	
    var row = "<tr>" +
		      "<th scope='row'>" + (index+1) + "</th>" +
		      "<td>" + transaction.Date + "</td>" +
		      "<td>" + transaction.Description + "</td>" +
		      "<td>" + transaction.Value + "</td>" +
		      "<td><button class='btn btn-sm btn-default modal-button' data-id='" + index + 
		      "' data-toggle='modal' data-target='#myModal'>View</button>" +
          	  "</td>"+
		      "</tr>";

	document.getElementById("tableBody").innerHTML += row;
}

function getAllTransactions() {
	return [{
		"Date": "20 Jan, 2017",
		"Description": "Salary",
		"Value": "$4500"
	},
	{
		"Date": "21 Jan, 2017",
		"Description": "Grocery",
		"Value": "-$4500"
	},
	{
		"Date": "22 Jan, 2017",
		"Description": "Grocery",
		"Value": "-$4500"
	},
	{
		"Date": "23 Jan, 2017",
		"Description": "Grocery",
		"Value": "-$4500"
	}];
}
