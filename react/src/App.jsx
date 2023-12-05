import { useState, useEffect } from 'react';
import './main.css';
import Card from './Components/Card.jsx';
import Button from './Components/Button.jsx';
import Modal from './Components/Modal';
import {toUpperCase}  from './utils/utilCustom.jsx';





function App() {
  const [cards, setCard] = useState([])
  const [modal, setOpen] = useState(false)
  const [pokeStatus, setDetail] = useState([])

  const handlingClick = (status = null) =>{
    setOpen(!modal)
    if(status !== null){
      fetch("http://localhost:3000/getDetails?rowid="+status.rowid)
      .then(res => res.json())
      .then(res => setDetail(res.resp))
    }
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
          <button onClick={() => handlingClick(value)}>
            <Card 
                  name={toUpperCase(value.nome)} 
                  type={value.tipo} 
                  imagem={value.imagem}
                  id={value.rowid}
                  color={value.seletor}
                  gif={value.gif}
            ></Card>
          </button>
        )
        })
      }
      
    </div>
    <Modal isOpen={modal} reset={() => handlingClick()}
           pokemon={pokeStatus}
    />
   </>
  )
}


export default App
