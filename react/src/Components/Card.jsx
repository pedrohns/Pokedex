import "../main.css";
import "../card.css";
import { useState } from "react";
import { colorDictionary } from "../utils/utilCustom";

function Card(props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    //Esse daqui eh um jeito mas n funciona o hover, ver o site dps https://upmostly.com/tutorials/changing-the-background-color-in-react
    /*<div className='card' style={{ backgroundColor: props.color ? colorDictionary(props.color) : '#FEBFFF'}}>*/
    <div
      className={
        props.color ? colorDictionary(props.color) : "card card-orange"
      }
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
    >
      <input type="hidden" value={props.id} />
      <div className="titulo"> {props.name} </div>
      <img src={isFocused ? props.gif : props.imagem} className="imagem" />
      <div className="tipo">{props.type}</div>
    </div>
  );
}

export default Card;
