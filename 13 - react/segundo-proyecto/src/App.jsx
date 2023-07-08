// Componentes:
// Stateless: Sin estado
// Stateful: Con estado

import { useState } from "react"
import MensajeBienvenida from "./MensajeBienvenida"
import MiBoton from "./MiBoton"
import InputColor from "./components/InputColor"
import InputRange from "./components/InputRange"
import InputText from "./components/InputText"

// Componentes basados en clases
// class App{

// }

// Componentes Funcionales
// El nombre del componente empieza con mayuscula
function App(){
    // Para que sea UN componente debemos devolver codigo de JSX

    const [color, updateColor] = useState('')
    const [size, updateSize] = useState('')
    const [text, updateText] = useState('')

    const changeColor = (event)=>{
      const newColor = event.target.value
      updateColor(newColor)
    }

    const changeSize = (event)=>{
      const newSize = event.target.value
      console.log(newSize)
      updateSize(newSize)
    }

    const changeText = (event)=>{
      const newText = event.target.value
      console.log(newText)
      updateText(newText)
    }

    const checkAge = (age)=>{
      let color = ''
      if(edad<18){
        color = 'green'
      }


      return color
    }

    return <div>
      <h1>Hola mundo</h1>
      <MensajeBienvenida/>
      <MiBoton/>
      <InputColor value={color} onChange={changeColor} nombre='Tzuzul' edad={24}/>
      <InputRange value={size} onChange={changeSize}/>
      <InputText value={text} onChange={changeText}/>

      <p style={{
        color: color,
        // color: edad<18 ? 'green': edad>18&&edad<40? 'orange' : edad>40&&edad<70? 'yellow': 'red',
        // color: checkAge(edad),
        fontSize: size+'px'
      }}>{text}</p>
    </div>
}

export default App