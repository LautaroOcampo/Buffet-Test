import '../App.css';
import { Data } from '../data/Data';
import { JugadoresItem } from './JugadoresItem';
import gol from '../imgs/gol.png';
import asistencia from '../imgs/asistencia.png';
import amarilla from '../imgs/amarilla.png';
import roja from '../imgs/roja.png';
import partidos from '../imgs/partido.png';
import arrow from '../imgs/arrow.png';
import React, { useEffect, useState } from 'react';

export const JugadoresList = () => {                                                       
    const data = Data();
    const [listaJugadores, setListaJugadores] = useState([]);

    const partidosTotal = []
    let partidosGanados = 0
    let partidosPerdidos = 0
    let partidosEmpatados = 0
    let golesFavor = 0
    let golesContra = 0
    let goles = []
    let goleador
    let asistencias  = []
    let asistidor
    let vallasInvictas = 0
    let partido = []

    if(data.sheets && data.sheets.length - 1 > 0){
        for(let i = 0 ; i < data.sheets.length ; i++){
          if(data.sheets[i].properties.title !== 'Jugadores'){
              for(let j = 1 ; j < data.sheets[i].data[0].rowData.length ; j++){
                    for(let k = 0 ; k < data.sheets[i].data[0].rowData[j].values.length ; k++){
                      partido.push(data.sheets[i].data[0].rowData[j].values[k].formattedValue)
                    }
                    if(partido[3] > partido[4]){
                      partidosGanados++
                    }else if(partido[3] === partido[4]){
                      partidosEmpatados++
                    }else{
                      partidosPerdidos++
                    }
                    if(partido[4]){
                        if(partido[4] === '0'){
                            vallasInvictas++
                        }
                    }
                    golesFavor += parseInt(partido[3])
                    golesContra += parseInt(partido[4])
                    partidosTotal.push(partido)
                    partido = []    
              }
          }
        }
    }

    useEffect(() => {
        const cargarJugadores = () => {
            let jugadores = [];

            if (data.sheets && data.sheets.length > 0) {
                for (let i = 0; i < data.sheets.length; i++) {
                    if (data.sheets[i].properties.title === 'Jugadores') {
                        for (let j = 1; j < data.sheets[i].data[0].rowData.length; j++) {
                            let jugador = [];
                            for (let k = 0; k < data.sheets[i].data[0].rowData[j].values.length; k++) {
                                jugador.push(data.sheets[i].data[0].rowData[j].values[k].formattedValue);
                            }
                            jugadores.push(jugador);
                        }
                    }
                }
            }

            setListaJugadores(jugadores);
        };

        cargarJugadores();
    }, [data]);

    let [partidoO, setPartidoO] = useState(false)
    let [golO, setGolO] = useState(false)
    let [asitenciaO, setAsistenciaO] = useState(false)
    let [amarillaO, setAmarillaO] = useState(false)
    let [rojaO, setRojaO] = useState(false)

    
    const cambiarOrden = (orden, set, i) => {
        if(!orden){
            let nuevaLista = [...listaJugadores].sort((a, b) => b[i] - a[i]);
            setListaJugadores(nuevaLista);
            set(true)
        }else{
            let nuevaLista = [...listaJugadores].sort((a, b) => a[i] - b[i]);
            setListaJugadores(nuevaLista);
            set(false)
        }
    };

    return (
        <>
            {listaJugadores && listaJugadores.length > 0 && (
                <section className='jugadores-list-section'>
                    <h1>DATOS HISTÓRICOS</h1>
                    <div className='jugadores-estadisticas'>
                        <ul>
                            <li>Partidos jugados: {listaJugadores.length}</li>
                            <li>Victorias: {partidosGanados}</li>
                            <li>Empates: {partidosEmpatados}</li>
                            <li>Derrotas: {partidosPerdidos}</li>
                            <li>Goles a favor: {golesFavor}</li>
                            <li>Goles en contra: {golesContra}</li>
                            <li>Vallas invictas: {vallasInvictas}</li>
                        </ul>
                    </div>
                    <div className='jugadores-list'>
                        <div className='titulos-jugadores'>
                            <div>Nombre Completo</div>
                            <div><img onClick={() => cambiarOrden(partidoO, setPartidoO, 1)} src={partidos} /></div>
                            <div><img onClick={() => cambiarOrden(golO, setGolO, 2)} src={gol} /></div>
                            <div><img onClick={() => cambiarOrden(asitenciaO, setAsistenciaO, 3)} src={asistencia} /></div>
                            <div><img onClick={() => cambiarOrden(amarillaO, setAmarillaO, 4)} src={amarilla} /></div>
                            <div><img onClick={() => cambiarOrden(rojaO, setRojaO, 5)} src={roja} /></div>
                        </div>
                        {listaJugadores.map((ele, index) => (
                            <JugadoresItem
                                key={index}
                                id={index}
                                juga={ele[0]}
                                part={ele[1]}
                                gol={ele[2]}
                                asist={ele[3]}
                                amar={ele[4]}
                                rojas={ele[5]}
                            />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};
