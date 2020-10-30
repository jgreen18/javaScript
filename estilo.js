
// var numero = prompt("Dame el numero ");
 
// var resultado =1;

// for (var i = 1; i <=numero; i++) {
	
// resultado*=i;
// }
// alert(resultado);

// js8

// ejercicio 8
// var cadena = prompt("Dame la frase");


// function palindromo(cadena){


// var cadenaar = cadena.split(" ").join("").toLowerCase();


// var cadenarevez = cadenaar.split("").reverse().join("");


// if (cadenaar==cadenarevez) {
// 	alert("es palindromo")

// } else {
// 	alert ("no es palindromo ")
// }
	
// alert(cadenaar)
// alert(cadenarevez)


// }

// palindromo(cadena);

 
 
// // // JS9 

// var numero = prompt("Dame un numero");

// function parOimpar(numero){
// 		if(numero%2!=0){
// 			alert("El numero "+ numero +" es impar")
// 		}
// 		else{
// 			alert("El numero "+ numero +"  par")
// 		}
	
// }

// parOimpar(numero);


// JS10

 var cadena = prompt("ingresa una cadena");

 function caps (cadena){

 	
	

	if(cadena==cadena.toLowerCase){
		alert("La cadena esta en minusculas")
	} else{
		if(cadena==cadena.toUpperCase()){
			alert("La cadena esta en Mayusculas")
		}else{
			alert("La cadena esta combinada entre mayusculas y minusculas")
		}
	}


 }
caps(cadena);
