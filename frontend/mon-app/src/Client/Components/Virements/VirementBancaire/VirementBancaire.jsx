import React from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";

const VirementBancaire = (props) => {
    return (
<div>
      <Modal
        isOpen={props.modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => props.setModalIsOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "55%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
          overlay: {
            backgroundColor: "rgba(206, 239, 248,0.8)",
          },
        }}
      >
        <div className="auth-form-light text-left p-5">
          <h3 className="font-weight-light">Virement bancaire </h3>
          <br />
          <form className="pt-3" encType="multipart/form-data">
          <div className="bloc_component_ajouter_comptes">

            <div>
            <div className="bloc_np">
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername2"
                name="nomBeneficiaire"
                required
                placeholder="Nom  bénéficiaire"
              />

              <input
                type="text"
                className="form-control"
                id="exampleInputUsername2"
                name="ribBeneficiaire"
                required
                placeholder="RIB  bénéficiaire"
              />
</div>
              <input
               type="number"
                className="form-control"
                id="input_email"
                name="montant"
                required
                placeholder="Montant"
              />

           




            
            <ToastContainer></ToastContainer>

<div className="bloc_creation_compte">
            <div className="mb-2">
              <button
                type="submit"
                className="btn_terminer"
              >
                <i className="mdi mr-2" />
                Terminer{" "}
              </button>
            </div>

            <div className="mb-2">
              <button
                type="button"
                onClick={() => props.setModalIsOpen(false)}
                className="btn btn-block btn-facebook auth-form-btn"
              >
                <i className="mdi mr-2" />
                Retour{" "}
              </button>
            </div>
            </div>
            </div>
            <div>
              <img src="/img/money_transfer.jpg" className="image_money"/>
            </div>
            </div>
            
          </form>
        </div>
      </Modal>
    </div>
    
     );
}
 
export default VirementBancaire;