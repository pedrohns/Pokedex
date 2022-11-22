import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './main.css';
import Card from './Components/Card.jsx';


function App() {
  const [cards, setCard] = useState([])
  useEffect(() =>{
    fetch("./json_schema.json", {
        headers: {
            Accept: "application/json"
        }
    }).then(res => res.json())
      .then(res => {
        //setCard(res.first) assim "transforma" em obj e não vai
        setCard((prevCards) =>[
          ...prevCards, res.first
        ])
      })
  }, [])
  return (
    <div className='container'>
      { cards  && cards.map((value) => {
        return(
          <Card name={value.name} 
                type={value.types[0].type.name} 
                imagem={value.sprites.front_default}></Card>
        )
        })
      }
      
   </div>
  )
}

export default App
