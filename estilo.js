
// var numero = prompt("Dame el numero ");
 
// var resultado =1;

// for (var i = 1; i <=numero; i++) {
	
// resultado*=i;
// }
// alert(resultado);

// js8

var cadena = prompt("Dame la frase");


function palindromo(cadena){


var cadenaar = cadena.split(" ").join("").toLowerCase();


var cadenarevez = cadenaar.split("").reverse().join("");


if (cadenaar==cadenarevez) {
	alert("es palindromo")

} else {
	alert ("no es palindromo ")
}
	
alert(cadenaar)
alert(cadenarevez)


}

palindromo(cadena);

 
 




