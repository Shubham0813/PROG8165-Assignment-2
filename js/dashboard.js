(function() {
	new WOW().init();
	fillTransactionTable()
})()

function fillTransactionTable() {
	generateRows();
	addDetailButtonListeners();
}

function generateRows() {
    getAllTransactions().forEach(appendTransactionRow);
}

function appendTransactionRow(transaction, index) {
	
    var row = "<tr>" +
		      "<th scope='row'>" + (index+1) + "</th>" +
		      "<td>" + transaction.Date + "</td>" +
		      "<td>" + transaction.Description + "</td>";
	
	if(transaction.Value < 0){
		row += "<td><h4><span class='transaction-value badge red'>-$" + ((transaction.Value) * -1).toFixed(2) + "</span><h4></td>";
	} else {
		row += "<td><h4><span class='transaction-value badge green'>$" + transaction.Value.toFixed(2) + "</span><h4></td>";
	}
		
	row += "<td><button class='btn btn-sm btn-default waves-effect view-detail-button' data-id='" + index + 
		      "' data-toggle='modal' data-target='#viewTransaction'>View</button>" +
          	  "</td>"+
		      "</tr>";

	document.getElementById("tableBody").innerHTML += row;
}

function addDetailButtonListeners() {
	var detailButtons = document.getElementsByClassName("view-detail-button");
	Array.from(detailButtons).forEach(addDetailListener);
}

function addDetailListener(button, index) {

	var showTransactionDetails = function() {
		var trans = getAllTransactions();
    	var id = this.getAttribute("data-id");
    	
    	if(trans[id].Location == null) {
			document.getElementById("details").innerHTML = "<p>Date: " + trans[id].Date + "</p>" + 
    												   	   "<p>Description: " + trans[id].Description + "</p>";
    	}
    	else {
    		document.getElementById("details").innerHTML = "<p>Date: " + trans[id].Date + "</p>" + 
    												   "<p>Location: " + trans[id].Location + "</p>";
    	}
	};

	button.addEventListener('click', showTransactionDetails, false);
}


function getAllTransactions() {
	return [{
		"Date": "20 Jan, 2017",
		"Description": "Salary",
		"Value": 4500,
		"Location": "Kitchener"
	},
	{
		"Date": "21 Jan, 2017",
		"Description": "Grocery",
		"Value": -51.65
	},
	{
		"Date": "22 Jan, 2017",
		"Description": "Grocery",
		"Value": -22.20,
		"Location": "Toronto"
	},
	{
		"Date": "23 Jan, 2017",
		"Description": "Phone Bill",
		"Value": -56.50
	}];
}