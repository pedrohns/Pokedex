import "../main.css";
import rootReducer from "../redux/root-reducer.js";
import {change, decremented} from '../redux/slice.js';
import { useSelector, useDispatch } from "react-redux";
import {useState} from 'react';
// import  getCounterValue  from "../store/counterSelector.js";

function Teste(){
    const [inputValue, setInputValue] = useState('');
    const texto = 'oi';
    const storeAction = () => {
        dispatch(change(inputValue))
        console.log(init)
    }
    const dispatch = useDispatch();
    const  {init}  = useSelector((rootReducer) => rootReducer.counterReducer);
    return <div className='jade'>
        <input type="text" name="Oie" className="texto" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <p>UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU MAJIN BOO {init}</p>
        <button onClick={storeAction}> Clique! </button>
    </div>
}

export default Teste;

