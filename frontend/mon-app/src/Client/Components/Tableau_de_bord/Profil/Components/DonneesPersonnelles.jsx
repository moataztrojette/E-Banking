import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Modal from "react-modal";

const DonneesPersonnelles = (props) => {


 
  const handleFormSubmitUpdate = async (event) => {
    event.preventDefault();
    const data = await axios.put(
      "http://localhost:4000/api/client/update/" + props.valuesInput_update._id,
      props.valuesInput_update
    );

    toast("Donnée personnelle Modifier avec succès ", {
      type: "success",
    });

    const resFind = props.client.find(
      (element) => element._id === props.valuesInput_update._id
    );
    const newState = props.client;
    const index = props.client.indexOf(resFind);
    newState[index] = data.data;
    props.setClient(newState);
  };

  return (
    <div>
      <Modal
        isOpen={props.modalUpdateIsOpen.open}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => {
          props.setModalUpdateIsOpen({
            open: false,
            info: {},
          });
          props.setValues_update({});
        }}
        style={{
          content: {
            top: "50%",
            left: "50%",
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
          <h3 className="font-weight-light">Donnée personnelle</h3>
          <br />
          <form className="pt-3" onSubmit={handleFormSubmitUpdate}>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputUsername2"
                name="email"
                required
                value={props.valuesInput_update.email}
                onChange={props.MyValueInput_update}
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="exampleInputUsername2"
                name="tel"
                required
                value={props.valuesInput_update.tel}
                onChange={props.MyValueInput_update}
              />
            </div>

            <div className="mb-2">
              <button
                type="submit"
                className="btn btn-block btn-facebook auth-form-btn"
              >
                <i className="mdi mr-2" />
                Terminer{" "}
              </button>
            </div>
<ToastContainer></ToastContainer>
            <div className="mb-2">
              <button
                type="button"
                onClick={() =>
                  props.setModalUpdateIsOpen({
                    open: false,
                    info: {},
                  })
                }
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
};

export default DonneesPersonnelles;
