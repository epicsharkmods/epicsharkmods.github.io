function submitContactForm() {
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;
	var re = /\S+@\S+\.\S+/;
	if (re.test(email)) {
		if (message.length > 100) {
			//send
			document.getElementById('messageSent').style.display = 'block';
			console.log("Sent");
			setTimeout(function() {
				document.getElementById('messageSent').style.display = 'none';
			}, 2000);
		} else {
			document.getElementById('messageNotSent').style.display = 'block';
			console.log("Not sent");
			setTimeout(function() {
				document.getElementById('messageNotSent').style.display = 'none';
			}, 2000);
		}
	} else {
		document.getElementById('messageNotSent').style.display = 'block';
		console.log("Wrong email");
		setTimeout(function() {
			document.getElementById('messageNotSent').style.display = 'none';
		}, 2000);
	}
}