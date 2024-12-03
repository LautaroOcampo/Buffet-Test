import "../App.css"
import React from 'react';
import { Link, useParams } from "react-router-dom";
import { Data } from '../data/Data';
import { PartidosList } from "./PartidosList";

export const TorneosDetail = () => {
    const {torneoId} = useParams()

    let torneoIdNumber = parseInt(torneoId)
    const data = Data()
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
    let titulo

    if(data.sheets && data.sheets.length > 0){
        titulo = data.sheets[torneoId].properties.title
        for(let i = torneoIdNumber ; i < torneoIdNumber+1 ; i++){
          if(data.sheets[i].properties.title !== 'Jugadores' && data.sheets[i].data[0].rowData[1].values){
              for(let j = 1 ; j < data.sheets[i].data[0].rowData.length ; j++){
                    for(let k = 0 ; k < data.sheets[i].data[0].rowData[j].values.length ; k++){
                        if(data.sheets[i].data[0].rowData[j].values[0].formattedValue){
                            partido.push(data.sheets[i].data[0].rowData[j].values[k].formattedValue)

                        }
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
                    if(partido[5]){
                        let golesDivididos = partido[5].split(' ')
                        for(let i = 0 ; i < golesDivididos.length ; i++){
                            goles.push(golesDivididos[i])
                        }
                    }
                    if(partido[6]){
                        let asistenciasDivididas = partido[6].split(' ')
                        for(let i = 0 ; i < asistenciasDivididas.length ; i++){
                            asistencias.push(asistenciasDivididas[i])
                        }
                    }
                    partidosTotal.push(partido)
                    partido = []    
              }
              if(goles){
                let repeticionesMax = 0
                for(let i = 0 ; i < goles.length ; i++){
                    let repeticiones = 0
                    let jugador = goles[i]
                    for(let j = 0 ; j < goles.length ; j++){
                        if(jugador === goles[j]){
                            repeticiones++
                        }
                    }
                    if(repeticiones > repeticionesMax){
                        repeticionesMax = repeticiones
                        goleador = `${jugador} (${repeticionesMax} goles)`
                    }
                }
              }
              if(asistencias){
                let repeticionesMax = 0
                for(let i = 0 ; i < asistencias.length ; i++){
                    let repeticiones = 0
                    let jugador = asistencias[i]
                    for(let j = 0 ; j < asistencias.length ; j++){
                        if(jugador === asistencias[j]){
                            repeticiones++
                        }
                    }
                    if(repeticiones > repeticionesMax){
                        repeticionesMax = repeticiones
                        asistidor = `${jugador} (${repeticionesMax} asistencias)`
                    }
                }
              }
          }
        }
    }

  const partidosTotalSorted = [...partidosTotal].reverse()


    return(
     <section className="torneo-details">
        <h1>{titulo}</h1>
        <div className="torneo-details-div">
            <ul>
                <li>Partidos jugados: {partidosTotalSorted.length}</li>
                <li>Victorias: {partidosGanados}</li>
                <li>Empates: {partidosEmpatados}</li>
                <li>Derrotas: {partidosPerdidos}</li>
                <li>Goles a favor: {golesFavor}</li>
                <li>Goles en contra: {golesContra}</li>
                <li>Goleador: {goleador}</li>
                <li>Asistidor: {asistidor}</li>
                <li>Vallas invictas: {vallasInvictas}</li>
            </ul>
        </div>
        <PartidosList partidosTotal={partidosTotalSorted}/>
     </section>

    );
}