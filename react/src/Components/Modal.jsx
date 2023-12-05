import "../main.css";
import "../modal.css";
import { modalColorDictionary } from "../utils/utilCustom";

function Modal(props) {
  const openModal = (container, box) => {
    var modal = document.getElementById(container);
    var modal2 = document.getElementById(box);
    modal.style.display = "inline-flex";
    modal2.style.display = "inline-flex";
  };

  const closingModal = (container, box) => {
    var modal = document.getElementById(container);
    var modal2 = document.getElementById(box);
    modal.style.display = "none";
    modal2.style.display = "none";
    props.reset();
  };

  return (
    <>
      <div
        className="modal-container"
        id="containerModal"
        onClick={() => closingModal(id, "modalBox")}
      ></div>
      <div className="modal-box" id="modalBox">
        {/* <div className={props.pokemon.seletor ? 'modal-card '+modalColorDictionary(props.pokemon.seletor) : 'modal-card modal-card-orange'}> */}
        <div className="modal-card">
          {props.isOpen ? openModal("containerModal", "modalBox") : ""}
          <img src={props.pokemon.imagem} className="modal-imagem" />
          <div className="modal-details">
            <table className="table-details">
              <tr>
                <td>HP:{props.pokemon.hp}</td>
                <td>Barra de Status</td>
              </tr>
              <tr>
                <td>Attack:{props.pokemon.attack}</td>
                <td>Barra de Status</td>
              </tr>
              <tr>
                <td>Defense:{props.pokemon.defense}</td>
                <td>Barra de Status</td>
              </tr>
              <tr>
                <td>Speed:{props.pokemon.speed}</td>
                <td>Barra de Status</td>
              </tr>
              <tr>
                <td>Weight:{props.pokemon.weight}</td>
                <td>Barra de Status</td>
              </tr>
              <tr>
                <td>Special Attack:{props.pokemon.special_attack}</td>
                <td>Barra de Status</td>
              </tr>
              <tr>
                <td>Special Defense:{props.pokemon.special_defense}</td>
                <td>Barra de Status</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
/*

        */
export default Modal;
