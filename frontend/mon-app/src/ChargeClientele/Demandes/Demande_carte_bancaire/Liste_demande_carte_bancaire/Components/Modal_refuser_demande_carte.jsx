import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

const Modal_refuser_demande_carte = (props) => {

  const [valuesInput, setValues] = useState({});

  const MyValuesInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try{
        toast("Carte bancaire a été refusé avec succés ", {
            type: "success",
          });

        const data = await axios.post(
            "http://localhost:4000/api/demande/carte/refuser/"+props.stateUserId._id,valuesInput
          );
        
    }catch (error) {
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
        isOpen={props.modalIsOpenRefusDemande}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => props.setModalIsOpenRefusDemande(false)}
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
          <h3 className="font-weight-light">Refus de la demande 
</h3>
          <br />
          <form
            className="pt-3"
            encType="multipart/form-data"
            onSubmit={handleFormSubmit}
          >
            <div className="bloc_component_ajouter_comptes">
              <div>
                <div>
                  <div>
                    {" "}
                    <h6>La raison de refus 
 </h6>
                    <textarea
                  name="raison"
                  rows="4"
                  className="form-control"
                  cols="50"
                  placeholder="Raison"
                  required
                  onChange={MyValuesInput}

                ></textarea>
                  
                  </div>

                  <br />

                  <br />
                </div>
                <br />

                <ToastContainer></ToastContainer>

                <div className="bloc_creation_compte">
                  <div className="mb-2">
                    <button type="submit" className="btn_terminer">
                      <i className="mdi mr-2" />
                      Terminer{" "}
                    </button>
                  </div>

                  <div className="mb-2">
                    <button
                      type="button"
                      onClick={() => props.setModalIsOpenRefusDemande(false)}
                      className="btn btn-block btn-facebook auth-form-btn"
                    >
                      <i className="mdi mr-2" />
                      Retour{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/img/icons8-bank-cards-100.png"
                  style={{ width: "10em" }}
                  alt="erreur_1"
                  className="image_money"
                />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Modal_refuser_demande_carte;
