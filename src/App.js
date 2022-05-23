import React, { useEffect, useState } from 'react'

export const App = () => {
  const [Suma, setSuma] = useState(0);

  useEffect(() => {
    console.log(`La suma es ${Suma}`)
    
    return () => {
      console.log("Apretaste el boton de sumar")
    }
  }, [Suma]);
  
  const onClick = ()=>{
    setSuma(Suma + 1)
  }


  return (
    <div>
      <p>{Suma}</p>
      <button onClick={onClick}>+1</button>
    </div>
  )
}

