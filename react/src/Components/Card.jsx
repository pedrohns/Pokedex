import "../main.css";
import "../card.css";
import { useState } from 'react';


function Card(props) {
  const colorDictionary = (color) =>{
    var objToFind = {
      1:'card card-red',//"#F70D0C",
      2:'card card-green',//"#6EF70C",
      3:'card card-blue',//"#0754F7",
      4:'card card-yellow',//"#E0D301",
      5:'card card-orange',//"#E6D3CD",
      6:'card card-purple',//"#D85EE6",
      7:'card card-lille',//"#C05BFC",
      8:'card card-sunny',//"#F2D966"
    }
    return objToFind[color]
  }

  const changeColor = (color) =>{
    var rightColor = colorDictionary(color)
    document.getElementsByClassName('card').style.backgroundColor = rightColor
  }
  
  
  return (
    
    //Esse daqui eh um jeito mas n funciona o hover, ver o site dps https://upmostly.com/tutorials/changing-the-background-color-in-react
    /*<div className='card' style={{ backgroundColor: props.color ? colorDictionary(props.color) : '#FEBFFF'}}>*/
    <div className={props.color ? colorDictionary(props.color) : 'card card-orange'} >
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