$('.carousel.carousel-slider').carousel({fullWidth: true});

var btnIndex= $('#registrarme');
var inputNumber= $('#into-number');
var checkbox= $('check-term');
var btnRegister= $('#register');


var cargarPagina= function(){
	btnIndex.click(registerHtml);
	inputNumber.keyup(validRegister);
	checkbox.click(validRegister);
	btnRegister.click(sendRegister);
	btnRegister.click(registerCode);

}

function registerHtml(){
	location.href= "registerNumber.html";
}

function validRegister(){
	var valueInput= inputNumber.val();
	var largeNumber= valueInput.length;
	var checkValid= checkbox.is(":checked")
	console.log(valueInput);
	
	if (/^([0-9])*$/.test(valueInput) && largeNumber === 9){
		btnRegister.removeClass("btn disabled");
			return checkValid;
		}else {
        	btnRegister.addClass("btn disabled");
    	}
    }


	
// API
function sendRegister(){
	
	$.post("http://localHost:3000/api/registerNumber",{ 
    	phone: inputNumber.val(),
    	terms: true
	}).then(function(response){
		localStorage.setItem("phoneUser", response.data.phone);
		localStorage.setItem("codeUser", response.data.code);
	});
}

function registerCode(){
		location.href= "verificCode.html";

}



$(document).ready(cargarPagina);






