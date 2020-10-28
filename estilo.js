
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

 
 






//   // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
//   var iguales = true;
//   for(i in letras) {
//     if(letras[i] == letrasReves[i]) {
//       // Todo bien
//     }
//     else {
//       // Alguna letra es distinta, por lo que ya no es un palindromo
//       iguales = false;
//     }
//   }

//   if(iguales) {
//     resultado += " es un palíndromo";
//   }
//   else {
//     resultado += " no es un palíndromo";
//   }

//   return resultado;
// }

// alert(palindromo("La ruta nos aporto otro paso natural"));
// alert(palindromo("Esta frase no se parece a ningun palindromo"));
//  }

