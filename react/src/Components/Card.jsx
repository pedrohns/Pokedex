
import { useState, useEffect } from 'react'


function Card() {
  const [card, setCard] = useState(0)

  useEffect(() =>{
    fetch("./json_schema.json", {
        headers: {
            Accept: "application/json"
        }
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        setCard(res)
      })
  }, [])
  return (
    <div>Oi</div>
  )
}

export default Card