import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import {Home} from './home/Home'
import { TorneosList } from './partidos/TorneosList';
import { TorneosDetail } from './partidos/TorneosDetail';
import { PartidosDetails } from './partidos/PartidosDetails';
import { JugadoresList } from './jugadores/JugadoresList';


function App() {                                                       

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/torneos' element={<TorneosList/>}></Route>
      <Route path='/torneos/:torneoId' element={<TorneosDetail/>}></Route>
      <Route path='/partidos/:partidosID' element={<PartidosDetails/>}></Route>
      <Route path='/jugadores' element={<JugadoresList/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

