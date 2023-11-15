const ladoA = parseInt(prompt("Ingrese (en numeros) el lado A del rectangulo"));
const ladoB = parseInt(prompt("Ingrese (en numeros) el lado B del rectangulo"));

const calcularPerimetro = (ladoA, ladoB) => {
    let p = 2 * (ladoA + ladoB);
    return p;
};

document.write(calcularPerimetro(ladoA, ladoB));
