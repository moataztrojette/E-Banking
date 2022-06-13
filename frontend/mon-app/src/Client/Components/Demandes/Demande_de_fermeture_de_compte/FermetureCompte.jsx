import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import axios from "axios";


const FermetureCompte = (props) => {
  const [valuesInput, setValues] = useState({});

  const MyValuesInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };

 

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(valuesInput)
    try {
      
      await axios.post("http://localhost:4000/api/demande/fermeture/add", valuesInput);

      toast("La demande de fermeture de votre compte bancaire a été effectuée avec succés.", {
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
        isOpen={props.modalIsOpenFermetureCompte}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => props.setModalIsOpenFermetureCompte(false)}
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
          <h3 className="font-weight-light">Demande de 
          désactivation de compte bancaire  </h3>
          <br />
          <form
            className="pt-3"
            encType="multipart/form-data"
            onSubmit={handleFormSubmit}
          >
            <div className="bloc_component_ajouter_comptes">
              <div>
   
                <br />
                <textarea
required
                  name="motif"
                  rows="4"
                  className="form-control"
                  cols="50"
                  placeholder="Motif"
                 
                  onChange={MyValuesInput}

                ></textarea>
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
                      onClick={() => props.setModalIsOpenFermetureCompte(false)}
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
                  src="/img/icons8-close-58.png"
                  alt="erreur_1"
                  className="image_close"
                />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
    
  );
};

export default FermetureCompte;
