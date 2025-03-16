console.log("El script de JavaScript se ha cargado correctamente.");

document.addEventListener("DOMContentLoaded", () => {
    console.log("El script de JavaScript se ha cargado correctamente.");
    
    const inputNombre = document.getElementById("amigo");
    const listaNombres = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    
    let nombres = [];
    
    function agregarAmigo() {
        const nombre = inputNombre.value.trim();
        
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
        
        nombres.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    }
    
    function sortearAmigo() {
        if (nombres.length === 0) {
            alert("Agrega al menos un nombre antes de sortear.");
            return;
        }
        
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        resultado.innerHTML = `<li>El amigo secreto es: ${nombres[indiceAleatorio]}</li>`;
    }
    
    function actualizarLista() {
        listaNombres.innerHTML = "";
        nombres.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaNombres.appendChild(li);
        });
    }
    
    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});
