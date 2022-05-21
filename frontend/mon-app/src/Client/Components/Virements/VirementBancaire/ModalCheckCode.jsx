import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import axios from "axios";

const ModalCheckCode = (props) => {
  const [valuesInput_code, setValuescode] = useState({});
  const [modalIsOpenCheckCode, setModalIsOpenCheckCode] = useState(false);
  const [stateCodeSec, setCodeSec] = useState({});

  useEffect(() => {
    axios
      .post("http://localhost:4000/api/virement/code-generator")
      .then((data) => {
        setCodeSec(data.data);
      });
  }, []);

  const MyValuesInput_code = (event) => {
    let res = valuesInput_code;
    res[event.target.name] = event.target.value;
    setValuescode(res);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
   

    try {
      event.preventDefault();
      if (stateCodeSec == valuesInput_code.code_securite) {
        await axios.post("http://localhost:4000/api/virement/add", {
          nomBeneficiaire : props.nomBeneficiaire,
          ribBeneficiaire:props.ribBeneficiaire,
          montant:props.montant
        });

        toast("Virement effectué avec succès ", {
          type: "success",
        });
        //props.setModalIsOpen(false)
      } else {
        toast("Code de sécurité incorrect ", {
          type: "error",
        });

      }
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
        isOpen={props.modalIsOpenCheckCode}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => props.setModalIsOpenCheckCode(false)}
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
          <h3 className="font-weight-light">Code sécurité </h3>
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
                    name="code_securite"
                    required
                    placeholder="Code sécurité"
                    onChange={MyValuesInput_code}
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
                      onClick={() => props.setModalIsOpenCheckCode(false)}
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
                  src="/img/money_transfer.jpg"
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

export default ModalCheckCode;
