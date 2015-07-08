//Main Js Build File

var sendEmail = require('./sendEmail.js');
var wow = require('./libs/wow.min.js');

function init (){
	var btnSendEmail1 = document.getElementById('btn-send-email1');
	var btnSendEmail2 = document.getElementById('btn-send-email2');

	btnSendEmail1.onclick = function(e){
		var fromEmail = document.getElementById('email1').value;
		console.log(fromEmail);
		var typeOfRunur = document.querySelector('input[name="runur-type1"]:checked').value;
		console.log(typeOfRunur);
		if (fromEmail == "") {
			alert("Please enter your email");
		}else {
			sendEmail(fromEmail,typeOfRunur);
		};
		return false;
	};

	btnSendEmail2.onclick = function(e){
		var fromEmail = document.getElementById('email2').value;
		console.log(fromEmail);
		var typeOfRunur = document.querySelector('input[name="runur-type2"]:checked').value;
		console.log(typeOfRunur);
		if (fromEmail == "") {
			alert("Please enter your email");
		}else {
			sendEmail(fromEmail,typeOfRunur);
		};
		return false;
	};

	wow();
}

init();