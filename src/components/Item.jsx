import React from "react";

// Componente funcional Item que recibe propiedades: id, nombre, edad y onAumentarEdad
function Item({id, nombre, edad, onAumentarEdad }){
    return(
        <div className='eb-item'>
            <div className='eb-item__info'>
                <p className='eb-item__info-nombre'>Nombre: {nombre}</p>
                <p className='eb-item__info-edad'>Edad: {edad} años</p>
            </div>
            <div className='eb-item__botones'>
                <button className='eb-item__boton' onClick={()=>onAumentarEdad(id)}>Aumentar edad</button>
            </div>
      </div>
    );
}

export default Item