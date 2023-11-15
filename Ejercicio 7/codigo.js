const numero = parseInt(prompt("Ingrese un numero"));

function calcular(numero) {
    document.write("<table>");
    for (let i = 0; i <= 10; i++) {
        document.write(
            "<tr><td>" + numero + " x " + i + " = " + numero * i + "</td></tr>"
        );
    }
    document.write("</table>");
}

calcular(numero);
