import "../main.css";
import "../card.css";
import { useState } from 'react';
import {obj}  from "../utils/utilCustom";

function Card(props) {
  return (
    
    //Esse daqui eh um jeito mas n funciona o hover, ver o site dps https://upmostly.com/tutorials/changing-the-background-color-in-react
    /*<div className='card' style={{ backgroundColor: props.color ? colorDictionary(props.color) : '#FEBFFF'}}>*/
    <div className={props.color ? obj.colorDictionary(props.color) : 'card card-orange'} >
        <input type="hidden" value={props.id}/>
        <div className='titulo'> {props.name} </div>
        <img src={props.imagem} className='imagem'/>
        <div className='tipo'>
          {props.type}
        </div>
    </div>    
  )
}

export default Card