// Codigo del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}


function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();


// Codigo del triangulo

console.group("Triangulo");

function perimetroTriangulo(lado1,lado2, base) {
    return (lado1 + lado2 + base);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function alturaTriangulo(lado1, lado2, base) {
    return Math.sqrt((lado1 * lado2) - ((base * base) / 4))
}


console.groupEnd();

// Codigo del circulo

console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}


// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aqui interactuamos con el HTML

// Cuadrado 
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const area = areaCuadrado(value);
    alert(area);
}

// Triangulo

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputTrianguloBase");
    const Lado1 = parseInt(inputLado1.value);
    const Lado2 = parseInt(inputLado2.value);
    const Base = parseInt(inputBase.value);

    const perimetroT = perimetroTriangulo(Lado1, Lado2, Base);
    alert(perimetroT);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputTrianguloBase");
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const Base = parseInt(inputBase.value);
    const Altura = parseInt(inputAltura.value);

    const areaT = areaTriangulo(Base, Altura);
    alert(areaT);
}

function calcularAlturaTriangulo() {
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputTrianguloBase");
    const Lado1 = parseInt(inputLado1.value);
    const Lado2 = parseInt(inputLado2.value);
    const Base = parseInt(inputBase.value);


    if (Lado1 != Lado2) {
        alert("Los lados no son iguales")
    }
    else {
    const alturaT = alturaTriangulo(Lado1, Lado2, Base);
    alert(alturaT);
    }
}

// Circulo

function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = parseInt(input.value);

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = parseInt(input.value);

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = parseInt(input.value);

    const area = areaCirculo(value);
    alert(area);
}