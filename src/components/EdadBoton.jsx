import '../styles/EdadBoton.css'
import { useState } from 'react';

function EdadBoton() {
  
  const [edad, setEdad] = useState(21);

  return(
    <div className="contenedor">
      <div className='eb-item'>
        <div className='eb-item__info'>
          <p className='eb-item__info-nombre'>Nombre: Elmer Mosquera</p>
          <p className='eb-item__info-edad'>Edad: {edad}</p>
        </div>
        <div className='eb-item__botones'>
          <button className='eb-item__boton' onClick={()=> setEdad(edad +1)}>Aumentar edad</button>
        </div>
      </div>
    </div>
  )
}
export default EdadBoton