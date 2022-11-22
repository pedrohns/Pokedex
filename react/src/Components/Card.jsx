import "../main.css";


function Card(props) {
  console.log(props)
  return (
    <div className='card'>
        <div className='titulo'> {props.name} </div>
        <img src={props.imagem} className='imagem'/>
        <div className='tipo'>
          {props.type}
        </div>
    </div>    
  )
}

export default Card