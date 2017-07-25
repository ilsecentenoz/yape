var inputCode= $('#input-code');
var userPhone = localStorage.phoneUser;
var userCode= localStorage.codeUser;


function cargarPagina(){
	inputCode.keyup(validCode);
	timeOut();
}

function validCode(){
  var valueCode = inputCode.val();
  console.log(valueCode);
  if(valueCode === localStorage.codeUser && valueCode.length === 6){
     location.href = 'createUser.html';
 	}
}



function newCode(){
	$.post("http://localhost:3000/api/resendCode",{
    'phone':userPhone,
  	}).then(function(dataCode){
      	console.log(dataCode);
   })
 }

function timeOut(){
    setInterval(function(){
    	newCode();
    },21000);
}


$(document).ready(cargarPagina);