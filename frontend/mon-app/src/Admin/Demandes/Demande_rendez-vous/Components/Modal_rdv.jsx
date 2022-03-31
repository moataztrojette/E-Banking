import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import axios from "axios";
import 'react-datepicker/dist/react-datepicker.css'


const Modal_rdv = (props) => {
  const [valuesInput, setValues] = useState({});

  const MyValuesInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };

 

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(props)

    try {
    const data = await axios.post("http://localhost:4000/api/rdv/cdc/update/"+props.stateUserId._id,valuesInput);

      toast("Prise de rendez-vous réussie ", {
        type: "success",
      });

      const resFind = props.posts.find(
        (element) => element._id === props.stateUserId._id
      );
      const newState = props.posts;
      const index = props.posts.indexOf(resFind);
      newState[index] = data.data;
      props.setPosts(newState);
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
          <h3 className="font-weight-light">Rendez-vous</h3>
          <br />
          <form
            className="pt-3"
            encType="multipart/form-data"
            onSubmit={handleFormSubmit}
          >
            <div className="bloc_component_ajouter_comptes">
              <div>
              <div className="form-group" style={{borderRadius:"10px",padding:"10px"}}>
            <a href="https://meet.google.com/" target="_blanck" >Merci de générer un lien meet !!</a>
            </div>
                <div className="bloc_np">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUsername2"
                    name="link"
                    required
                    placeholder="Lien meet"
                    onChange={MyValuesInput}
                  />

               
                </div>

           
                

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

export default Modal_rdv;
