/*
document.writeln("Calculadora: ");
document.writeln("Eliga una opcion: ")
document.writeln("1. Suma: ")
document.writeln("2. Resta: ");
document.writeln("3. Multplicacion: ")
document.writeln("4. Division: ")
document.writeln("5. Raiz Cúbica: ")
document.writeln("6. Factorial: ")
document.writeln("7. Potencia: ")
*/

var x1 = Number(prompt("Ingresar numero 1: "));
var x2 = Number(prompt("Ingresar numero 2: "));
var op = Number(prompt("Ingresar la opcion: "));

/*
if (x1>x2) {
      console.log("Mayor es: ",x1)
} else {
      console.log("Mayor es: ",x2)
}
*/
switch (op) {
    case 1: 
        document.write("La suma en los numeros es: "+suma(x,y));
        break;
    case 2: 
        document.write("La resta de los numeros es: "+resta(x,y));
        break;
    case 3: 
        document.write("El resultado de la multiplicacion es: "+multplicaicon(x,y));
        break;
    case 4: 
        document.write("El resultado de la division es: "+division(x,y));
        break;
    case 5: 
        document.write("La raiz del primer numero numero es: "+raiz_cubica(x,y));
        document.write("La raiz del segundo numero numero es: "+raiz_cubica(x,y));
        break;
    case 6: 
        document.write("El factorial del primer numero es: "+factorial(x,y));
        document.write("El factorial del segundo numero es: "+factorial(x,y));
        break;
    case 7: 
        document.write("El resultado de elevar el primer numero es: "+potencia(x,y));
        break;
    default:
        break;
}

function suma(a,b){
    return a+b;
}

function resta(a,b){
    return a-b;
}

function multiplicacion(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

function raiz_cubica(a,b){
    return raiz_cubica = Math.sqrt(numero);
}

function factorial(numero){
    var total = 1;
    for (i=1; i<=n; i++){
        total = total * i;
    }
    return total;
}

function potencia(a,b){
   var elevado = Math.pow(2, 3);
}