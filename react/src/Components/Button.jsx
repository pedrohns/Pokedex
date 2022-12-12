import "../main.css";
import {useState} from 'react';

function Button() {
  const [isLoading, setLoading] = useState(false);
  const createPokemons = () =>{
    setLoading(true)
    fetch("http://localhost:3000/createPokemon", {
        headers: {
            Accept: "application/json"
        }
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        setLoading(false)
      })
  }
  
    return (
      <div className='button' onClick={() =>createPokemons()}>
        {!isLoading && <p>Gerar Pokemons</p>}
        {isLoading && <p>Buscando Pokemons</p>}
          
      </div>    
    )
  }
  
  export default Button