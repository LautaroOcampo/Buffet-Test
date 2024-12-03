import '../App.css';
import React from 'react';
import { Data } from '../data/Data';
import { PartidosItem } from './PartidosItem';

export const PartidosList = (props) => {                                                       
  
  const partidosTotal = [...props.partidosTotal.filter((ele) => ele[0])] 

  return (
    <>
    { partidosTotal && partidosTotal.length > 0 &&
        <section className='partidos-section'>
            <div className='titulos'>
              <div className='id-div'>N°</div>
              <div className='dia-div'>Día</div>
              <div className='rival-div'>Rival</div>
              <div className='resultado-div'>Resultado</div>
            </div>
            {partidosTotal.map((ele) => (
                <PartidosItem key={ele[0]} id={ele[0]} fecha={ele[1]} rival={ele[2]} gf={ele[3]} gc={ele[4]} goles={ele[5]} asist={ele[6]} rojas={ele[7]} amar={ele[8]} />
            ))}
        </section>
    }
    </>
  );
}


