import './App.css';
import freecodecamplogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs';
import Logo from './componentes/Logo';

function App() {
  const [input, setImput]=useState('');

  const agregarInput = val => {
    setImput(input + val);
  }

  const calcularResultado = () => {
    if(input){
      setImput(evaluate(input));
    }
    else{
      alert('Digita una expresión correcta a evaluar');
    }
      
  }
  const manejarClear = () => {
    setImput('')
  }

  return (
    <div className='App'>
      <Logo 
         imagen={freecodecamplogo}
         dato='imagen del logo'>   
      </Logo>
      <div className='contenedor-calculadora'>
          <Pantalla input={input}/>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
              <BotonClear manejarClear= {manejarClear}>
                 Clear
              </BotonClear>
          </div>
      </div>
    </div>
  );
}

export default App;
