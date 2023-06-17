const axios = require('axios').default;

let axiosHTML = axios.get('https://axios-http.com/docs/intro')

let nodeJSHTML = axios.get('https://nodejs.org/api/fs.html#fsreadfilepath-options-callback')

let googleHTML = axios.get('https://www.google.com/')

// Todas las promesas se lanzan al mismo tiempo
// Si falla una, fallan todas
Promise.all([axiosHTML, nodeJSHTML, googleHTML])
.then((resultados)=>{
    // Un array con los resultados
    resultados.forEach((respuesta)=>{
        console.log(respuesta.request.host)
        //console.log("HTML: ",respuesta.data)
    })
})
.catch((error)=>{
    console.log(error.message)
})

// Todas las promesas se lanzan al mismo tiempo
// Los resultados son independientes
Promise.allSettled([axiosHTML, nodeJSHTML, googleHTML])
.then((resultados)=>{
    //console.log(resultados)
    resultados.forEach(resultado=>{
        //console.log(resultado.status, resultado.value?.request.host)
        if(resultado.status === 'fulfilled'){
            console.log(resultado.status, resultado.value.request.host)
        }else{
            console.log(resultado.status, resultado.reason.message)
        }
    })
})

// Consumir APIs

