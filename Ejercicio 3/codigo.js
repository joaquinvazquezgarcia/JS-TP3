let dado1;
let dado2;
const resultados = [];

function suma(dado1, dado2) {
    const resultado = dado1 + dado2;
    resultados.push(resultado);
}

//Creamos trabla
document.write(
    "<table>" +
        "<tr>" +
        "<td/> Suma 🎲 <td/>" +
        "<td/> Apariciones <td/>" +
        "</tr>"
);
//Tiramos el dado 50 veces
for (let i = 0; i < 50; i++) {
    dado1 = parseInt(Math.random() * 6 + 1);
    dado2 = parseInt(Math.random() * 6 + 1);
    suma(dado1, dado2);
}
//Creamos las 12 filas
for (let i = 2; i <= 12; i++) {
    let apariciones = 0;
    for (let h = 0; h < resultados.length; h++) {
        if (resultados[h] == i) {
            apariciones += 1;
        }
    }
    document.write("<tr>");
    document.write("<td/>" + i + "<td/>");

    document.write("<td/>" + apariciones + "<td/>");
    document.write("</tr>");
}
document.write("</table>");
