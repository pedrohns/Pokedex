import "../main.css";
import "../modal.css";
import {obj} from "../utils/utilCustom";

function Modal(props){
    const openModal = () =>{
        var modal = document.getElementById("containerModal")
        var modal2 = document.getElementById("modalBox")
        modal.style.display = 'inline-flex'
        modal2.style.display = 'inline-flex'           
    }

    const closingModal = () =>{
        var modal = document.getElementById("containerModal")
        var modal2 = document.getElementById("modalBox")
        modal.style.display = 'none'
        modal2.style.display = 'none'
        props.reset()
    }

    return(
        <>
            <div className="modal-container" id="containerModal" onClick={() => closingModal()}>
            </div>
            <div className="modal-box" id="modalBox">
                <div className={props.pokemon.seletor ? 'modal-card '+obj.modalColorDictionary(props.pokemon.seletor) : 'modal-card modal-card-orange'}>
                    {props.isOpen  ? openModal(): "" }
                    <img src={props.pokemon.imagem} className='modal-imagem'/>
                    <div className="modal-details">
                        HP:{props.pokemon.hp}<br/>
                        Attack:{props.pokemon.attack}<br/>
                        Defense:{props.pokemon.defense}<br/>
                        Speed:{props.pokemon.speed}<br/>
                        Weight:{props.pokemon.weight}<br/>
                        Special Attack:{props.pokemon.special_attack}<br/>
                        Special Defense:{props.pokemon.special_defense}<br/>
                    </div>
                </div>
            </div>
        </>  
    )
}
/*

        */
export default Modal;