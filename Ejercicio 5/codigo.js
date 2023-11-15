let input = prompt("Ingrese una palabra");

function verificar(cadena) {
    let mayusculas;
    let minusculas;

    for (let i = 0; i < cadena.length; i++) {
        let letra = cadena.charAt(i);
        if (letra === letra.toUpperCase()) {
            mayusculas = true;
        } else {
            minusculas = true;
        }
    }
    if (mayusculas && minusculas) {
        return "La palabra contiene mayusculas y minusculas";
    } else if (mayusculas) {
        return "La palabra solo contiene mayusculas";
    } else {
        return "La palabra solo contiene minusculas";
    }
}
document.write(verificar(input));
