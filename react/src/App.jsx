import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './main.css';
import Card from './Components/Card.jsx';
import Button from './Components/Button.jsx';
import Modal from './Components/Modal';



function App() {
  const [cards, setCard] = useState([])
  const [modal, setOpen] = useState(false)

  const handlingClick = () =>{
    setOpen(!modal)
    //console.log(modal)
  }
  
  useEffect(() =>{
    fetch("http://localhost:3000/getPokemon", {
        headers: {
            Accept: "application/json"
        }
    }).then(res => res.json())
      .then(res => {
        //setCard(res.first) assim "transforma" em obj e não vai
        var pokemonArray = res.resp
        pokemonArray.map((value)=>{
          setCard((prevCards) =>[
            ...prevCards, value
          ])
        })
      })
  }, [])
  return (
    <>
    <Button/>
    <div className='container'>
      { cards  && cards.map((value) => {
        return(
          <button onClick={() => handlingClick()}>
            <Card name={value.nome} 
                  type={value.tipo} 
                  imagem={value.imagem}
                  id={value.rowid}
                  color={value.seletor}
            ></Card>
          </button>
        )
        })
      }
      
    </div>
    <Modal isOpen={modal} reset={() => handlingClick()}/>
   </>
  )
}


export default App
