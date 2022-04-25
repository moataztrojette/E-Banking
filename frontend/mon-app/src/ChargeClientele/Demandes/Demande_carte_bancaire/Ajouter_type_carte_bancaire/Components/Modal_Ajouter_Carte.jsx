import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Modal from "react-modal";

const Modal_Ajouter_Carte = (props) => {
  const MyValuesInput = (event) => {
    let res = props.valuesInput;
    res[event.target.name] = event.target.value;
    props.setValues(res);
  };

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = await axios.post(
        "http://localhost:4000/api/type/carte/add",
        props.valuesInput
      );

      toast("type de carte bancaire a été ajouté avec succès ", {
        type: "success",
      });

      const preventState = props.posts;
      preventState.push(data.data);
      props.setPosts(preventState);
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
          <h3 className="font-weight-light">Type de carte bancaire </h3>
          <br />
          <form
            className="pt-3"
            encType="multipart/form-data"
            onSubmit={handleFormSubmit}
          >
            <div className="bloc_component_ajouter_comptes">
              <div>
                <div className="bloc_cb">
                  <div>
                    <p>Type de carte bancaire</p>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUsername2"
                      name="nom_carte"
                      required
                      placeholder="Type de carte bancaire	"
                      onChange={MyValuesInput}
                    />
                  </div>
                  <div>
                    <p>Plafond global de carte bancaire</p>

                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputUsername2"
                      name="plafond_global_carte"
                      required
                      placeholder="Plafond global"
                      onChange={MyValuesInput}
                    />
                  </div>
                  <div>
                    <p>Plafond de retrait par <b>jour</b></p>

                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputUsername2"
                      name="plafond_retrait_par_jour"
                      placeholder="plafond de retrait par jour"
                      onChange={MyValuesInput}
                    />
                  </div>
                  <div>

                  <p>Plafond de retrait par <b>semaine</b></p>

                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputUsername2"
                    name="plafond_retrait_par_semaine"
                    required
                    placeholder="plafond de retrait par semaine"
                    onChange={MyValuesInput}
                  />
                  </div>
                  <div>

                  <p>Plafond de paiement par <b>mois</b></p>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputUsername2"
                    name="Plafond_de_paiement"
                    required
                    placeholder="Plafond de paiement par mois"
                    onChange={MyValuesInput}
                  />
                                    </div>

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
                  src="/img/carte-bancaire-opposition.jpg"
                  alt="erreur_1"
                  className="image_agence"
                />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Modal_Ajouter_Carte;
