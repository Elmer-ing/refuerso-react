import '../styles/EdadBoton.css'
import React, { use } from 'react';
import { useState } from 'react';
import Item from './Item';

function EdadBoton() {
  
// Componente funcional EdadBoton
  const [personas, setPersonas] = useState([
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
    }
  ])

  const aumentarEdad = (id) => {
    setPersonas(prevPersonas =>  // ← React pasa el estado anterior aquí
      prevPersonas.map(persona => 
        persona.id === id 
          ? { ...persona, edad: persona.edad + 1 } 
          : persona
      )
    );
  };

  return(
    <div className="contenedor">
      {personas.map((persona)=>(
        <Item
          key={persona.id}
          id={persona.id}
          nombre={persona.nombre} 
          edad={persona.edad}
          onAumentarEdad={aumentarEdad}
        />
      ))}

    </div>
  )
}
export default EdadBoton