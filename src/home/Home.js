import '../App.css';
import logo from '../imgs/file.png';
import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import {Data} from '../data/Data'
import { useEffect } from 'react';

export const Home = () => {                                                       

  return (
    <section className='menu-inicio'>
    <img src={logo} alt=""/>
    <ul>
      <Link to='/torneos'>Partidos</Link>
      <Link to='/jugadores'>Jugadores</Link>
    </ul>
    </section>
  );
}


