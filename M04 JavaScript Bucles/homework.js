/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   if (x < y){
      return y;
   } else if (x > y){
      return x;
   } else {
      return x || y;
   }
}

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if (edad < 18){
      return "Not allowed";
   } else {
      return "Allowed";
   }
}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   switch (status) {
      case 1:
         status = "Online";
         break;
      case 2:
         status = "Away";
         break;
      default:
         status = "Offline";
         break;
   }

   return status;
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   let saludo = "";
   switch (idioma) {
      case "aleman":
         saludo = "Guten Tag!"
         break;

      case "mandarin":
         saludo = "Ni Hao!"
         break;

      case "ingles":
         saludo = "Hello!"
         break;
   
      default:
         saludo = "Hola!"
         break;
   }
   return saludo;
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   let resp = "";
   switch (color) {
      case "blue":
         resp = "This is blue";
         break;

      case "red":
         resp = "This is red";
         break;

      case "green":
         resp = "This is green";
         break;

      case "orange":
         resp = "This is orange";
         break;

      default:
         resp = "Color not found";
         break;
   }
   return resp;
}

function esDiezOCinco(num) {
   // Retornar "true" si "num" es 10 o 5.
   // De lo contrario, retornar "false".
   // Tu código:
   if (num === 10 || num === 5){
      return true;
   } return false;
}

function estaEnRango(num) {
   // Retornar "true" si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar "false".
   // Tu código:
   if(20 < num && num < 50){
      return true;
   } return false
}

function esEntero(num) {
   // Retornar "true" si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna "false".
   // Tu código:
   if(Number.isInteger(num)){
      return true;
   } return false;
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // De lo contrario, retorna el número.
   // Tu código:
   if(num % 3 == 0 && num % 5 == 0){
      return "fizzbuzz";
   } else if (num % 3 == 0){
      return "fizz";
   } else if (num % 5 == 0){
      return "buzz";
   } return num;
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si alguno de los argumentos es cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   if (num2 < num1 && num3 < num1 && 0 < num1){
      return "Numero 1 es mayor y positivo";
   } else if (num1 < 0 || num2 < 0 || num3 < 0){
      return "Hay negativos";
   } else if (num1 < num3 && num2 < num3){
      return num3 + 1;
   } else if (num1 === 0 || num2 === 0 || num3 === 0){
      return "Error";
   } return false;
}

function esPrimo(num) {
   // Retornar True si "num" es primo.
   // De lo contrario retorna False.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   let contador = 0;
   for (let i = 1; i <= num; i++){
      if (num % i == 0){
         contador ++;
      } 
   }
   if (contador == 2){
      return true;
   } return false;
}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if(valor == true){
      return "Soy verdadero";
   } return "Soy falso";
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar True.
   // Caso contrario, retornar False.
   // Tu código:
   if (num.toString().length === 3){
      return true;
   } return false;
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   let contador = 0;
   do {
      num += 5;
      contador ++;
   } while (contador < 8);
   return num;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
