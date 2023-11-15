let continuar = true;
const ciudades = [];

while (continuar) {
    const input = prompt("Introduzca una ciudad");
    ciudades.push(input);
    continuar = confirm("¿Desea seguir añadiendo ciudades?");
}

function output() {
    document.write(
        "<p>El arreglo de ciudades tiene " + ciudades.length + " elementos</p>"
    );
    document.write("<ul>");
    document.write(
        "<li>Elemento 1er posición: " +
            ciudades[0] +
            "</li>" +
            "<li>Elemento 3er posición: " +
            ciudades[2] +
            "</li>" +
            "<li>Elemento última posición: " +
            ciudades.slice(-1) +
            "</li>"
    );
    //Agregamos París
    ciudades.push("París");
    document.write(
        "<li>Elemento última posición: " +
            ciudades.slice(-1) +
            "</li>" +
            "<li>Elemento 2da posición: " +
            ciudades[1] +
            "</li>"
    );
    document.write("</ul>");
    //Sustituyendo el segundo elemento por Barcelona
    ciudades.splice(1, 1, "Barcelona");

    document.write("<h1>Arreglo de ciudades</h1>");
    document.write("<ul>");
    ciudades.forEach(ciudad => {
        document.write("<li>Elemento: " + ciudad + "</li>");
    });
    document.write("</ul>");
}
output();
