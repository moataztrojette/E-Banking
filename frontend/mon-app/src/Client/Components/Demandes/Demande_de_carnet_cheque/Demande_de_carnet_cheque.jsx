import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import axios from "axios";

const Demande_de_carnet_cheque = (props) => {
  const [valuesInput, setValues] = useState({
    nb_carnet_cheque: "25",
    format: "poche"
  });

  const MyValuesInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };

  const handleFormSubmit = async (event) => {
    console.log(valuesInput)
    event.preventDefault();

    try {
      await axios.post(
        "http://localhost:4000/api/demande/carnet/add",
        valuesInput
      );

      toast("la demande de chéquier bancaire a été effectuée avec succés.", {
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
        isOpen={props.modalIsOpenCarnetCheque}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => props.setModalIsOpenCarnetCheque(false)}
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
          <h3 className="font-weight-light">Demande de carnet de chèque </h3>
          <br />
          <form
            className="pt-3"
            encType="multipart/form-data"
            onSubmit={handleFormSubmit}
          >
            <div className="bloc_component_ajouter_comptes">
              <div>
                <p>Nombre de carnet de chéques</p>
                <input
                  type="radio"
                  class="btn-check"
                  name="nb_carnet_cheque"
                  id="success-outlined"
                  autocomplete="off"
                  value="25"
                  onChange={MyValuesInput}
                />
                <label class="btn btn-outline-success" for="success-outlined">
                  25
                </label>

                <input
                  type="radio"
                  class="btn-check"
                  name="nb_carnet_cheque"
                  id="success-outlined_2"
                  autocomplete="off"
                  value="50"
                  onChange={MyValuesInput}
                />
                <label class="btn btn-outline-success" for="success-outlined_2">
                  50
                </label>
                <br />
                <p>Format</p>
                <div className="format_carnet">
                  <div>
                    <input
                      type="radio"
                      name="format"
                      value="poche"
                      checked
                      onChange={MyValuesInput}
                    />
                    <label for="Poche">Poche</label>
                  </div>
                  <div>
                    <img src="/img/poche.png" alt="" />
                  </div>
                </div>

                <div className="format_carnet">
                  <div>
                    <input
                      type="radio"
                      name="format"
                      value="standard"
                      onChange={MyValuesInput}
                    />
                    <label for="Standard">Standard</label>
                  </div>
                  <div>
                    <img src="/img/standar.png" alt="" />
                  </div>
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
                      onClick={() => props.setModalIsOpenCarnetCheque(false)}
                      className="btn btn-block btn-facebook auth-form-btn"
                    >
                      <i className="mdi mr-2" />
                      Retour{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Demande_de_carnet_cheque;
