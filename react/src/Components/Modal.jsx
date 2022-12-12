import "../main.css";
import {useState} from 'react';



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
                <div className="modal-card">
                    {props.isOpen  ? openModal(): "" }
                    
                </div>
            </div>
        </>  
    )
}
/*

        */
export default Modal;