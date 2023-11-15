const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function mostrar() {
    document.write("<h1><ul>Lista de Meses</ul></h1>");
    for (let i = 0; i < meses.length; i++) {
        document.write("<li>" + meses[i] + "</li>");

    }
}
mostrar();