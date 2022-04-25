import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

const Modal_Annuler_rdv = (props) => {
  const [valuesInput, setValues] = useState({});

  const MyValuesInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(props);

    try {
      const data = await axios.post(
        "http://localhost:4000/api/proposition/rdv/add",
        {
          date : valuesInput.date,
          heure: valuesInput.heure,
          id_user : props.stateUserId.id_user._id,
          id_demande :  props.stateUserId._id
        }
      );

      toast("Annulation de rendez-Vous ", {
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
        isOpen={props.modalIsOpenAnnulerRDV}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => props.setModalIsOpenAnnulerRDV(false)}
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
          <h3 className="font-weight-light">Rendez-vous</h3>
          <br />
          <form
            className="pt-3"
            encType="multipart/form-data"
            onSubmit={handleFormSubmit}
          >
            <div className="bloc_component_ajouter_comptes">
              <div>
                <div
                  className="form-group"
                  style={{ borderRadius: "10px", padding: "10px" }}
                >
                  <a href="https://meet.google.com/" target="_blanck">
                    S'il vous plaît reprendre un autre rendez-vous selon votre
                    disponibilité !!
                  </a>
                </div>
                <div >
                  <div>
                    {" "}
                    <h6>Date de rendez-vous</h6>
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
                  </div>

                  <br />

                  <div>
                  <h6>Heure rendez-vous</h6>

                    <input
                      name="heure"
                      className="form-control"
                      type="time"
                      id="appt"
                      min="09:00"
                      max="18:00"
                      required
                      onChange={MyValuesInput}
                    />
                  </div>
                  <br/>


           
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
                      onClick={() => props.setModalIsOpenAnnulerRDV(false)}
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
                  src="/img/RDV-Online.png"
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

export default Modal_Annuler_rdv;
