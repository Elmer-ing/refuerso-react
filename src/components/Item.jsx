import React from "react";

function Item({ nombre, edad }){
    return(
        <div className='eb-item'>
            <div className='eb-item__info'>
                <p className='eb-item__info-nombre'>Nombre: {nombre}</p>
                <p className='eb-item__info-edad'>Edad: {edad} años</p>
            </div>
            <div className='eb-item__botones'>
                <button className='eb-item__boton'>Aumentar edad</button>
            </div>
      </div>
    );
}

export default Item