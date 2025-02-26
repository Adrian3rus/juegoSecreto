let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','el número es menor');
        } else {
            asignarTextoElemento('p','el número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));
    // console.log(numeroDeUsuario);
    // console.log(numeroDeUsuario === numeroSecreto);
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''
    // let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = '';
}


function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

console.log(numeroSecreto)


// function saludo() {
//     console.log("hola, mundo");
//     return;
// }

// saludo();

// let nombre = "alejandro"
// function saludar(){
//     console.log(`Hola, ${nombre}!!`);
//     return;
// }

// saludar();

// let numeroU = 6
// function doble() {
//     console.log(numeroU*2);
//     return;
// }

// doble();
asignarTextoElemento("h1", "Juego Numero Secreto");
asignarTextoElemento('p', 'indica un numero del 1 al 10')

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego Numero Secreto");
    asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true')
    

}