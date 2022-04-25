import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

const Modal_valider = (props) => {
  const [valuesInput, setValues] = useState({});

  const MyValuesInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

      const data = await axios.post(
        "http://localhost:4000/api/carnet/add",
        {
          date : valuesInput.date,
          id_user : props.stateUserId.id_user._id,
          id_demande :  props.stateUserId._id
        }
      );


      toast("Opération validée ", {
        type: "success",
      });

   

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
          <h3 className="font-weight-light">Carnet de chéque bancaire</h3>
          <br />
          <form
            className="pt-3"
            encType="multipart/form-data"
            onSubmit={handleFormSubmit}
          >
            <div className="bloc_component_ajouter_comptes">
              <div>
                <h6>Date de Prendre carnet chéque bancaire</h6>

                <input
                  type="date"
                  className="form-control"
                  name="date"
                  required
                  onChange={MyValuesInput}
                  min={
                    new Date(
                      new Date().getTime() -
                        new Date().getTimezoneOffset() * 60000
                    )
                      .toISOString()
                      .split("T")[0]
                  }
                  //minDate={new Date()}
                />
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
                      onClick={() => props.setModalIsOpen(false)}
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

export default Modal_valider;
