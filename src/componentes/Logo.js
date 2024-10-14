import '../App.css';
import React from 'react';


const Logo = (props) => {
  return (
       <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
          src={props.imagen}
          alt={props.dato}
        />
      </div>
  )
}

export default Logo;
