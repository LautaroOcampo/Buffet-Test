import React, { useEffect } from "react";
import { TorneosItem } from "./TorneosItem";
import { Data } from "../data/Data";
import { PartidosList } from "./PartidosList";

export const TorneosList = () => {
  const data = Data();
  const partidosTotal = []
  let partido = []


  if(data.sheets && data.sheets.length - 1 > 0){
      for(let i = 0 ; i < data.sheets.length ; i++){
          console.log(data.sheets[1])
        if(data.sheets[i].properties.title !== 'Jugadores' && data.sheets[i].data[0].rowData[1].values){
            for(let j = 1 ; j < data.sheets[i].data[0].rowData.length ; j++){
                for(let k = 0 ; k < data.sheets[i].data[0].rowData[j].values.length ; k++){
                  partido.push(data.sheets[i].data[0].rowData[j].values[k].formattedValue)
                }
                partidosTotal.push(partido)
                partido = []    
            }
        }
      }
  }

  const partidosTotalSorted = partidosTotal.sort((a, b) => b[0] - a[0])
  console.log(partidosTotalSorted)

  return (
    <>
      {data.sheets && data.sheets.length > 0 && (
        <section className="torneos-section">
            <div className="torneos-section-div">
                {data.sheets
                .filter((ele) => ele.properties.title !== 'Jugadores' && ele.data[0].rowData.length > 1)
                .map((ele) => (
                    <TorneosItem id={data.sheets.indexOf(ele)} key={data.sheets.indexOf(ele)} name={ele.properties.title} />
                ))}
            </div>
            <div>
                <PartidosList partidosTotal={partidosTotalSorted}/>
            </div>
        </section>
      )}
    </>
  );
};
