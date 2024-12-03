import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const PartidosItem = (props) => {                                                       

let background

if(props.gf > props.gc){
  background = '#5bad5b'
}else if(props.gf === props.gc){
  background = '#ffff60'
}else{
  background = '#ff5252'
}

const style = {
  backgroundColor: background
}

  return (
    <Link to={`/partidos/${props.id}`} style={style}>
      <div className='id-div'>{props.id}</div>
      <div className='fecha-div'>{props.fecha}</div>
      <div className='rival-div'>{props.rival}</div>
      <div className='resultado-div'>{props.gf}-{props.gc}</div>
    </Link>
  );
}


