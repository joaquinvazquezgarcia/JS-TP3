function validar(numero) {
    if (numero % 2 == 0) {
        return "El numero es par";
    } else {
        return "El numero es impar";
    }
}

let input = parseInt(prompt("Ingrese un numero"));
document.write(validar(input));
