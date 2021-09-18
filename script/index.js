let numero1;
let numero2;

function sumar(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = numero1 + numero2;

}

function restar(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = numero1 - numero2;

}
function multiplicar(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = numero1 * numero2;

}
function dividir(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = numero1 / numero2;

}

function limpiar() {
    document.getElementById('form').reset();
}

