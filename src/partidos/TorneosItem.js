import { Link, useParams } from "react-router-dom";
import React from 'react';
import "../App.css"
import {Data} from '../data/Data'

export const TorneosItem = (props) => {
    let torneoId = props.id
    torneoId = useParams()
    return(
     <Link to={`/torneos/${props.id}`} >{props.name}</Link>
    );
}