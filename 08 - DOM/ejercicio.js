//Obtienendo los elementos de HTML
const nombre = document.getElementById("nombre") //input

console.log(nombre)
const guardarBtn = document.getElementById("guardarBtn")
const alumnos = document.getElementById("alumnos") //ul

// Ejemplo de como usar onchange
nombre.onchange = (/*event*/)=>{
    //console.log(event)

    console.log("Input modificado: ", nombre.value)
}

// Arreglo de alumnos. Array de objetos
const listaAlumnos = JSON.parse(localStorage.getItem("alumnos")) || []

guardarBtn.onclick = ()=>{
    let nombreAlumno = nombre.value
    // La estructura de objetos que seguiremos
    let alumno = {
        nombre: nombreAlumno,
    }

    listaAlumnos.push(alumno)

    localStorage.setItem("alumnos", JSON.stringify(listaAlumnos))

    mostrarAlumnos()
}


// Muestra el array en el documento de HTML
function mostrarAlumnos(){
    alumnos.innerHTML = "" // Reiniciar lista de alumno

    listaAlumnos.forEach((alumno, indice)=>{
        console.log(alumno)

        //Creamos el li que contendra el p y el button
        let li = document.createElement('li')

        //Creamos el parrafo con el nombre del alumno
        let p = document.createElement("p")
        p.innerText = alumno.nombre

        // Creamos el button con el texto eliminar
        let deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Eliminar"


        //Hacemos la accion de eliminar el elemento
        deleteBtn.onclick = ()=>{
            listaAlumnos.splice(indice,1) // Modifica el array original
            localStorage.setItem("alumnos", JSON.stringify(listaAlumnos))
            mostrarAlumnos()
        }

        // Agregamos los elementos al li
        li.appendChild(p)
        li.appendChild(deleteBtn)

        alumnos.appendChild(li)
    })
}

// Mostrar el array cuando se carga por primera vez la pagina
mostrarAlumnos()