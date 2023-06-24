// Consumir una API

const currencyOne = 'usd'
const currencyTwo = 'mxn'
const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyOne}/${currencyTwo}.json`

// Fetch no procesa automaticamente el body
// fetch(url)
// .then((response)=>{
//     console.log(response)

//     //Conversion del body a JSON
//     response.json()
//     .then((body)=>{
//         console.log(body)
//         alert(`La divisa ${currencyOne} convertida a ${currencyTwo} tiene el valor de : ${body.mxn}`)
//     })
//     .catch(console.log)
// })
// .catch(console.log)

// fetch(url)
// .then((response)=>{
   
//     return response.json()
// })
// .then((body)=>{
//     console.log(body)
//     alert(`La divisa ${currencyOne} convertida a ${currencyTwo} tiene el valor de : ${body.mxn}`)
// })
// .catch(console.log)

// fetch(url)
// .then(response=>response.json())
// .then(body=>{
//     // body es un json
//     console.log(body)
//     alert(`La divisa ${currencyOne} convertida a ${currencyTwo} tiene el valor de : ${body.mxn}`)
// })
// .catch(console.log)

async function currencyConversion(){
    try {
        const response = await fetch(url)
        const body = await response.json()

        console.log(body)
        alert(`La divisa ${currencyOne} convertida a ${currencyTwo} tiene el valor de : ${body.mxn}`)
    } catch (error) {
        console.log(error)
    }
}

//currencyConversion()

// Utilizar form
const weatherForm = document.getElementById('weather')
const detailsSection = document.getElementById('details')
const contactForm = document.getElementById('contacto')

async function weather(city){
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=616629f9acdc3b22b8b09553e632e5da&units=metric&lang=es`
        const response = await fetch(url) // Peticion HHTP usando GET
        const body = await response.json()

        //console.log(body)

        detailsSection.innerHTML = `
            <h1>${body.main.temp}</h1>
        `

    } catch (error) {
        console.log(error)
    }
}

weatherForm.onsubmit = (event)=>{
    // Prevenimos que se recargue la pagina
    event.preventDefault()
    const city = weatherForm.country.value
    weather(city)
}

async function peticionPost(url, data){
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data), // Body de la peticion
            headers:{
                'Content-Type': 'application/json'
            }
        })
    
        // Body de la respuesta
        const body = await response.json()

        console.log(body)
    
        // .. utilizar el body o gestionar el error
        
    } catch (error) {
        console.log(error)
    }
}

// Actualizar informacion
async function peticionPut(url, data){
    try {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data), // Body de la peticion
            headers:{
                'Content-Type': 'application/json'
            }
        })
    
        // Body de la respuesta
        const body = await response.json()

        console.log(body)
    
        // .. utilizar el body o gestionar el error
        
    } catch (error) {
        console.log(error)
    }
}

// Eliminar informacion
async function peticionDelete(url){
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        })
    
        // Body de la respuesta
        const body = await response.json()

        console.log(body)
    
        // .. utilizar el body o gestionar el error
        
    } catch (error) {
        console.log(error)
    }
}

contactForm.onsubmit = (event)=>{
    event.preventDefault()
    const name = contactForm.name.value
    const email = contactForm.email.value
    const message = contactForm.message.value

    //peticionPost('https://formspree.io/f/xoqoavrp', {name, email, message})
    axios.post('https://formspree.io/f/xoqoavrp',{name, email, message})
    .then((response)=>{
        console.log(response.data)
    })
    .catch(console.log)

    // Usando otros metodos de axios
    // axios.get('https://formspree.io/f/xoqoavrp')

    // axios.put('https://formspree.io/f/xoqoavrp',{name, email, message})
    // axios.delete('https://formspree.io/f/xoqoavrp',{name, email, message})
}