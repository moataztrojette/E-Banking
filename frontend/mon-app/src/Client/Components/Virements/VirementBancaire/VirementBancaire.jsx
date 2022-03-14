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
          <h3 className="font-weight-light">Virement Bancaire</h3>
          <br />
          <form
            className="pt-3"
        
            encType="multipart/form-data"
          >
            <div className="form-group">
              <h5 className="auth-link text-black">Nom Bénéficiaire</h5>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername2"
                name="nomBeneficiaire"
                required
                placeholder="Nom Bénéficiaire"
              
              />
            </div>
            <h5 className="auth-link text-black">RIB Bénéficiaire </h5>

            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="exampleInputUsername2"
                name="RibBeneficiaire"
                required
                placeholder="RIB Bénéficiaire"
           
              />
            </div>

            <h5 className="auth-link text-black">Montant </h5>

            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="exampleInputUsername2"
                name="Montant"
                required
                placeholder="Montant"
           
              />
            </div>
           
            <ToastContainer></ToastContainer>

         

            <div className="mb-2">
              <button
                type="submit"
                className="btn btn-block btn-facebook auth-form-btn"
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
          </form>
        </div>
      </Modal>
      </div>
    
     );
}
 
export default VirementBancaire;