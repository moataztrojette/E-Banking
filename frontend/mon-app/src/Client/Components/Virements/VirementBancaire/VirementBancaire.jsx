import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import axios from "axios";


const VirementBancaire = (props) => {

  const [valuesInput,setValues] = useState({});

  const MyValuesInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      await axios.post(
        "http://localhost:4000/api/virement/add",
        valuesInput
      );

      toast("Virement effectué avec succes ", {
        type: "success",
      });

    } catch (error) {
      if (error.response.data) {
        toast(error.response.data, {
          type: "error",
        });
      }
    }
  };



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
          <form className="pt-3" encType="multipart/form-data"  onSubmit={handleFormSubmit}>
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
                onChange={MyValuesInput}
                />

              <input
                type="number"
                className="form-control"
                id="exampleInputUsername2"
                name="ribBeneficiaire"
                required
                placeholder="RIB  bénéficiaire"
                onChange={MyValuesInput}

              />
</div>

             
                  <div className="col-auto">
        <div className="input-group mb-2">
          
          <input
               type="number"
                className="form-control"
                id="input_email"
                name="montant"
                required
                placeholder="Montant en dinar (DT)"
                onChange={MyValuesInput}

              />  
              <div className="input-group-prepend">
            <div className="input-group-text">DT</div>
          </div>      </div>
      </div>

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
              <img src="/img/money_transfer.jpg" alt="erreur_1"  className="image_money"/>
            </div>
            </div>
            
          </form>
        </div>
      </Modal>
    </div>
    
     );
}
 
export default VirementBancaire;