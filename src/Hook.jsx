import { useState } from "react"
export const Boton = () => {

    const [state, setCounter] = useState({ 
        counter1: 10, 
        counter2: 20,
        counter3: 30 });

     const {counter1, counter2, counter3} = state;    
    return (
        <>
        <h1 className="mt-5 mx-5">Counter1 {counter1}</h1>
        <h1 className="mt-5 mx-5">Counter2 {counter2}</h1>
        <h1 className="mt-5 mx-5">Counter3 {counter3}</h1>
        <hr />
        <button className="btn btn-primary mx-5" onClick={()=>
         setCounter({
            ...state, 
            counter2: counter2 + 1})}>+1</button>
            {/*counter1: counter1 
              counter2: counter2
              
              con el spread operator... copiamos todos los valores y asi podemos modificar solo el 2
              es lo mismo que hacer la copia manualmente como en el comentario, pero asi lo ahce automático
              */}
        </>
    )
}