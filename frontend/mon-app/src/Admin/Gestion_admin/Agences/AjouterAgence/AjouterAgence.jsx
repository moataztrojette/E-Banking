import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Modal from "react-modal";

const AjouterAgence = (props) => {
  const MyValuesInput = (event) => {
    let res = props.valuesInput;
    res[event.target.name] = event.target.value;
    props.setValues(res);
  };

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = await axios.post(
        "http://localhost:4000/api/agence/add",
        props.valuesInput
      );

      toast("Agence a été ajouter avec succès ", {
        type: "success",
      });

      const preventState = props.listeAgence;
      preventState.push(data.data);
      props.setListeAgence(preventState);
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
          <h3 className="font-weight-light">Ajouter Agence </h3>
          <br />
          <form
            className="pt-3"
            encType="multipart/form-data"
            onSubmit={handleFormSubmit}
          >
            <div className="bloc_component_ajouter_comptes">
              <div>
                <div className="bloc_np">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUsername2"
                    name="nom"
                    required
                    placeholder="Nom Agence"
                    onChange={MyValuesInput}
                  />

                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputUsername2"
                    name="email"
                    required
                    placeholder="Email"
                    onChange={MyValuesInput}
                  />
                </div>
                <input
                  type="number"
                  className="form-control"
                  id="input_email"
                  name="tel"
                  required
                  placeholder="Téléphone"
                  onChange={MyValuesInput}
                />

           

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
                <img src="/img/agence-banque.jpg" alt="erreur_1" className="image_agence" />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AjouterAgence;
