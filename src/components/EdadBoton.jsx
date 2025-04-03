import '../styles/EdadBoton.css'
import React from 'react';
// import { useState } from 'react';
import Item from './Item';

function EdadBoton() {
  
  // const [edad, setEdad] = useState(21);

  const personasItems = [
    {
      id: 1,
      nombre: 'Elmer Mosquera',
      edad: 22
    },
    {
      id: 2,
      nombre: 'Tomas Gomez',
      edad: 17
    },
    {
      id: 3,
      nombre: 'Andres Pino',
      edad: 18
    },
    {
      id: 4,
      nombre: 'Andres Sotelo',
      edad: 19
    },
    {
      id: 5,
      nombre: 'Sebastian Monterrosa',
      edad: 21
    },
  ]

  return(
    <div className="contenedor">
      {personasItems.map((persona)=>(
        <Item
          key={persona.id}
          nombre={persona.nombre} 
          edad={persona.edad}
        />
      ))}

    </div>
  )
}
export default EdadBoton