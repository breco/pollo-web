function validate(){
	email = document.getElementById("username").value;
	if (email){
		window.location = "game.html";
		window.localStorage.setItem('email',email);
	}
	else{
		alert("Ingresa un email valido");
	}
}

