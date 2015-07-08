function sendEmail (fromEmail,typeOfRunur){
	$.ajax({
		  type: 'POST',
		  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		  data: {
		    'key': 'SgYf2M9qVBRYJVSR_ibkRw',
		    'message': {
		      'from_email': fromEmail,
		      'to': [
		          {
		            'email': 'moiacr@gmail.com',
		            'name': 'Runur',
		            'type': 'to'
		          }
		        ],
		      'autotext': 'true',
		      'subject': fromEmail + ' wants to ' + typeOfRunur,
		      'html': fromEmail + ' selected on Runur Landing Page to ' + typeOfRunur
		    }
		  }
		 }).done(function(response) {
		   console.log(response); // if you're into that sorta thing
		 });
}

module.exports = sendEmail;
