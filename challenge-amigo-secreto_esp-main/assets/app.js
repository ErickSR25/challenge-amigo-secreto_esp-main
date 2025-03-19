// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

//Esta funcion va agregando los nombres de la caja a la lista listaAmigos
function agregarAmigo() {
    let amigoNuevo = document.getElementById('amigo').value;

    if (amigoNuevo === ''){
        alert('Por favor, ingrese un nombre válido.');
    } else {
        listaAmigos.push(amigoNuevo);
        actualizarListaAmigos();
    }
    limpiarCaja();
    console.log(amigoNuevo);
    console.log(listaAmigos);
}

//Esta funcion muestra los nombres agregados en la lista en pantalla
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaAmigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//Sortea los nombres en la lista 
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('La lista de amigos está vacía. Agrega al menos un nombre.');
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[indiceAleatorio];
    mostrarResultado(amigoSeleccionado);
}

function mostrarResultado(amigo) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigo}</strong></li>`;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}