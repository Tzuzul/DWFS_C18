// Obtenemos una variable que almacena un objeto de parrafo (p) con el id "name"
const parrafoNombre = document.getElementById("name")

const gustos = document.getElementsByClassName("gusto")

const parrafos = document.getElementsByTagName("p")

const primerGusto = document.querySelector("p.gusto")

const gustosNodes = document.querySelectorAll("p.gusto")

// for(let i=0;i<gustos.length;i++){
//     // gustos[i].innerHTML = "<b>" + gustos[i].innerHTML + "</b>"
//     gustos[i].innerHTML = `<b>${gustos[i].innerHTML}</b>`
// }

gustosNodes.forEach(function(parrafo){
    // parrafo.innerHTML = `<b>${parrafo.innerHTML}</b>`
    let originalText = parrafo.innerText

    let nuevoBold = document.createElement("b")
    let texto = document.createTextNode(originalText)

    nuevoBold.className = "text-green"

    nuevoBold.appendChild(texto)

    parrafo.innerText = ""
    parrafo.appendChild(nuevoBold)
    
})

// console.log(gustos)

function saludar(){
    alert("Hola")
}

// Agregar eventos

const saludarBtn = document.getElementById("saludarBtn")

// saludarBtn.onclick = saludar

function saludarV3(){
    alert("Hola v3")
    saludarBtn.removeEventListener("click",saludarV3)
}

saludarBtn.addEventListener("click", saludarV3)

// Modificar atributos
const imagen = document.getElementById("imagen")

console.log(imagen.getAttribute("src"))

imagen.setAttribute("src","https://images.unsplash.com/photo-1685028667224-55f94b358d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80")
console.log(imagen.hasAttribute("src"))

imagen.removeAttribute("src")
console.log(imagen.hasAttribute("src"))

imagen.src = "https://images.unsplash.com/photo-1685028667224-55f94b358d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"

imagen.style.width = "100%"

localStorage.setItem("nombre","Tzuzul")

// localStorage.removeItem("nombre")

console.log(localStorage.getItem("nombre"))

localStorage.clear()