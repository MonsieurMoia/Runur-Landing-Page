//Main Js Build File

var sendEmail = require('./sendEmail.js');
var wow = require('./libs/wow.min.js');
var bootstrap = require('./libs/bootstrap.js');

function init (){

	wow();
	bootstrap();

	var btnSendEmail1 = document.getElementById('btn-send-email1');
	var btnSendEmail2 = document.getElementById('btn-send-email2');

	var emailUsers = 'users@runur.com';
	var emailDriver = 'drivers@runur.com';

	btnSendEmail1.onclick = function(e){
		var fromEmail = document.getElementById('email1').value;
		var typeOfRunur = document.querySelector('input[name="runur-type1"]:checked').value;
		
		var toEmail;

		if (fromEmail == "") {
			alert("Please enter your email");
		}else {
			if (typeOfRunur == 'use Runur') {
				toEmail = emailUsers;
			}else if(typeOfRunur == 'be a Runur'){
				toEmail = emailDriver;
			};
			sendEmail(fromEmail,typeOfRunur,toEmail);
		};
		return false;
	};

	btnSendEmail2.onclick = function(e){
		var fromEmail = document.getElementById('email2').value;
		var typeOfRunur = document.querySelector('input[name="runur-type2"]:checked').value;
		
		var toEmail;

		if (fromEmail == "") {
			alert("Please enter your email");
		}else {
			if (typeOfRunur == 'use Runur') {
				toEmail = emailUsers;
			}else if(typeOfRunur == 'be a Runur'){
				toEmail = emailDriver;
			};
			sendEmail(fromEmail,typeOfRunur,toEmail);
		};
		return false;
	};


	
}

init();