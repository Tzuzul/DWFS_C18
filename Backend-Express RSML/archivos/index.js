const fs = requiere ('fs')

fs.readFile('nombres.txt', 'utf-8', (error, data)=>{

    if(error){

        console.log(error);
    }

    console.log(data);
})

fs.appendFile('nombres.txt', 'Coromoto', (error, data)=>{

    if(error){

        console.log(error);
    }

    console.log(data);