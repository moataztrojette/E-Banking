import React, {useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Modal from "react-modal";

const ModalAdd = (props) => {
    const [valuesInput, setValues] = useState({});


    
const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = await axios.post(
      "http://localhost:4000/api/calendar/post",
      valuesInput
    );

    toast("Tâche a été ajouté avec succès ", {
      type: "success",
    });

    const preventState = props.calendar;
    preventState.push(data.data);
    props.setCalendar(preventState);
  };

  const MyValueInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };
  


return (<div>
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
          overlay : {
            backgroundColor:"rgba(206, 239, 248,0.8)",
          }
        }}
      >
        <div className="auth-form-light text-left p-5">
          <h3 className="font-weight-light">Ajouter une nouvelle tâche</h3>
          <br />
          <form className="pt-3" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <h5 className="auth-link text-black">Rendez-vous avec  :</h5>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername2"
                name="nom_user"
                required
                placeholder="Nom prénom"
                onChange={MyValueInput}
              />
            </div>

            <div className="form-group">
              <h5 className="auth-link text-black">Raison du rendez-vous
</h5>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername2"
                name="raison"
                required
                placeholder="title"
                onChange={MyValueInput}
              />
            </div>

            
            <h5 className="auth-link text-black">Début de rendez-vous
 </h5>

            <div className="form-group">
              <input
                type="date"
                className="form-control"
                id="exampleInputUsername2"
                name="start"
                min={new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0]}

                required
                onChange={MyValueInput}
              />
            </div>

     

     

            <h5 className="auth-link text-black">L'heure du rendez-vous
 </h5>
            <div className="form-group">
              <input
                type="time"
                id="appt"
                name="heureDebut"
                min="07:00"
                max="00:00"
                required
                onChange={MyValueInput}
              ></input>
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
      <ToastContainer></ToastContainer>

    </div>  );
}
 
export default ModalAdd;