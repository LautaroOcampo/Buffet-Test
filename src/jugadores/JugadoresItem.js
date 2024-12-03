import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export const JugadoresItem = (props) => {                                                       

  let background

  if(props.id % 2 === 1){
    background = 'rgb(255, 163, 182)'
  }else{
    background = 'rgb(253,192,204)'
  }

  const style = {
    backgroundColor: background
  }

  return (
    <>
        <div style={style} href="#" className='jugadores-item'>
            <div>{props.juga}</div>
            <div>{props.part}</div>
            <div>{props.gol}</div>
            <div>{props.asist}</div>
            <div>{props.amar}</div>
            <div>{props.rojas}</div>
        </div>
    </>
  );
}

