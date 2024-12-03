import '../App.css';
import React from 'react';
import escudo from '../imgs/file.png';
import escudoEstandar from '../imgs/escudo estandar.png'
import { Data } from '../data/Data'
import { useParams } from 'react-router-dom';
import gol from '../imgs/gol.png'
import asistencia from '../imgs/asistencia.png'
import amarilla from '../imgs/amarilla.png'
import roja from '../imgs/roja.png'

export const PartidosDetails = () => {                                                       

    const partidoID = useParams()['partidosID']
    
    const data = Data() 
    

    const partidosTotal = []
    let partido = []
  
    if(data.sheets && data.sheets.length > 0){
        for(let i = 0 ; i < data.sheets.length ; i++){
            if(data.sheets[i].properties.title !== 'Jugadores'){
                for(let j = 1 ; j < data.sheets[i].data[0].rowData.length ; j++){
                    for(let k = 0 ; k < data.sheets[i].data[0].rowData[j].values.length ; k++){
                        partido.push(data.sheets[i].data[0].rowData[j].values[k].formattedValue)
                    }
                    partidosTotal.push(partido)
                    partido = []
                    }
                }
        }
        for(let i = 0 ; i < partidosTotal.length ; i++){
            if(partidosTotal[i][0] === partidoID){
                partido.push(partidosTotal[i])
            }
        }
    
        for(let i = 5 ; i < 9 ; i++){
            if(partido[0][i]){
                const estadistica = partido[0][i];
                if(estadistica.includes(' ')){
                    let arrayEstadistica = estadistica.split(' ')
                    for (let i = 0 ; i < arrayEstadistica.length ; i++) {
                        let repeticiones = 0
                        for(let j = 0 ; j < arrayEstadistica.length ; j++){
                            if(arrayEstadistica[i] === arrayEstadistica[j]){
                                repeticiones++
                            }
                        }
                        if(repeticiones > 1){
                            let backUp = arrayEstadistica[i]
                            arrayEstadistica[i] = ''
                            arrayEstadistica = arrayEstadistica.filter(ele => ele !== backUp)
                            arrayEstadistica[i] = `${backUp} x${repeticiones}`
                        }
                    }                  
                    let columnaEstadistica = arrayEstadistica.join('<br>');
                    columnaEstadistica = columnaEstadistica.replace(/[A-Z]/g, match => ` ${match.toLowerCase()}`);

                    partido[0][i] = <div dangerouslySetInnerHTML={{ __html: columnaEstadistica }} />;

                }                
            }   
        }


    }


  return (
      <section className='partidos-details'>
      { partidosTotal && partidosTotal.length > 0 &&
        <div className='partidos-details-div'>
            <div className='partidos-escudos-div'>
                <div className='partidos-equipos-div'>
                    <img src={escudo} alt="" />
                    <p>El Buffet FC</p>
                </div>
                <div className='partidos-resultado-div'>
                    <p>{partido[0][3]}</p>
                    <p>-</p>
                    <p>{partido[0][4]}</p>
                </div>
                <div className='partidos-equipos-div'>
                    <img src={escudoEstandar} alt="" />
                    <p>{partido[0][2]}</p>
                </div>
            </div>
            <div className='partidos-fecha-div'>
                <p>{partido[0][1]}</p>
            </div>
            <div className='partidos-goles-div'>
                <div>
                    <img src={gol} alt="" />
                    <p>{partido[0][5]}</p>
                </div>
                <div>
                    <img src={asistencia} alt="" />
                    <p>{partido[0][6]}</p>
                </div>
                <div>
                    <img src={amarilla} alt="" />
                    <p>{partido[0][7]}</p>
                </div>
                <div>
                    <img src={roja} alt="" />
                    <p>{partido[0][8]}</p>
                </div>
            </div>
        </div>
    }
    </section>
  );
}
