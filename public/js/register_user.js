var $nameUser= $('#name-user');
var $emailUser= $('#email-user');
var $passwordUser= $('#password-user');
var $btnUser= $('#register-user');

function cargarPagina(){
	$nameUser.keyup(validName);
	$emailUser.keyup(validEmail);
	$passwordUser.keyup(validPassword);
}

function validName(){
	if(nameUser.val(), $emailUser.val(), $passwordUser.val() != ""){
		if ($passwordUser.val().length === 6 ) {
			$btnUser.removeClass('disabled');
		}
	}
}

function saveUser(e){
	e.preventDefault();
	var createUser="http://localHost:3000/api/createUser" 

	$.post(createUser,{ 
    	name: $nameUser.val(),
    	email: $emailUser.val(),
    	password: $passwordUser.val()
	}).then(function(response){
		localStorage.setItem("name", response.data.code);
		localStorage.setItem("email", response.data.code);
		localStorage.setItem("password", response.data.code);
	}).then(function(response){
      	if(response.message ==="Usuario creado con éxito"){
        location.href = "index.html";
      }else{
      	alert('Verifica datos ingresados');
      }
	})
}



$(document).ready(cargarPagina);