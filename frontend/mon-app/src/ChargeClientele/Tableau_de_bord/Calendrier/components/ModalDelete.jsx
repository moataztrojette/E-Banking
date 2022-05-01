import React, {useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Modal from "react-modal";
import Swal from "sweetalert2";

const ModalDelete = (props) => {
    const [valuesInput, setValues] = useState({});


    
const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = await axios.post(
      "http://localhost:4000/api/calendar/delete",
      valuesInput
    );
   
    toast("Tâche a été supprimé avec succès ", {
      type: "success",
    });

  
  };

  const MyValueInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };
  


return (<div>
        <Modal
        isOpen={props.modalIsOpenDeleteTache}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => props.setModalIsOpenDeleteTache(false)}
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
          <h3 className="font-weight-light">Supprimer Tâche</h3>
          <br />
          <form className="pt-3" onSubmit={handleFormSubmit}>
            <h5 className="auth-link text-black">Date 
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
                onClick={() => props.setModalIsOpenDeleteTache(false)}
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
 
export default ModalDelete;