import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AjouterAgence from "../../AjouterAgence/AjouterAgence";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import Clients_par_agence from "../../Clients_par_agence/Clients_par_agence";


const Posts = ({ posts, loading, setListeAgence }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [valuesInput, setValues] = useState({});

  const [modalListeClientParAgenceIsOpen, setModalListeClientParAgenceIsOpen] = useState({
    open: false,
    info: {},
  });


  if (loading) {
    return <h2>Loading...</h2>;
  }

  const deleteAgence = async (id) => {
    await axios
      .delete("http://localhost:4000/api/agence/delete/" + id)
      .then((verife) => {
        if (verife.status != 200) {
          Swal.fire("Deleted!", "Your file has been deleted.", "error");
        } else {
          const preventStatu = posts;
          const newState = preventStatu.filter((dev) => dev._id != id);
          setListeAgence(newState);
          Swal.fire("Agence", "Agence has been deleted", "success");
        }
      });
  };

  const rechercheAgence = async (event) => {
    if (event.target.value === "") {
      axios.get("http://localhost:4000/api/agence/findall").then((Ag) => {
        setListeAgence(Ag.data);
      });
    } else {
      let res = await axios.get(
        "http://localhost:4000/api/agence/recherche/" + event.target.value
      );
      setListeAgence(res.data);
    }
  };

  return (
    <div className="row">
          {modalListeClientParAgenceIsOpen.open === true ? (
        <Clients_par_agence
          modalListeClientParAgenceIsOpen={modalListeClientParAgenceIsOpen}
          setModalListeClientParAgenceIsOpen={setModalListeClientParAgenceIsOpen}
        />
      ) : (
        <div></div>
      )}
      {modalIsOpen === true ? (
        <AjouterAgence
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          valuesInput={valuesInput}
          setValues={setValues}
          listeAgence={posts}
          setListeAgence={setListeAgence}
        />
      ) : (
        <div></div>
      )}
   

      <div class="filter_comptes">
        <div class="form-outline">
          <input
            name="serche"
            onChange={rechercheAgence}
            id="form1"
            class="form-control"
            placeholder="Chercher agence "
          />
        </div>
        <button
          type="button"
          className="btn_nouvelle_comptes"
          onClick={() => setModalIsOpen(true)}
        >
          Nouvelle agence +{" "}
        </button>
      </div>
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Liste des agences</h6>
          </div>

          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Nom d'agence{" "}
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Email
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Téléphone
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Action
                    </th>
                  </tr>
                </thead>
                {posts.map((c) => (
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">{c.nom}</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">
                          {c.email}
                        </span>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="text-secondary text-xs font-weight-bold">
                          {c.tel}
                        </span>
                      </td>

                      <td class="align-middle text-center text-sm">
                        <img
                          src="/img/icons8-trash.gif"
                          className="icon_trash"
                          onClick={() => {
                            Swal.fire({
                              title: "Êtes - vous sûr ?",
                              text: "",
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#3085d6",
                              cancelButtonColor: "#d33",
                              confirmButtonText: "Oui, supprimez-le!",
                            }).then((result) => {
                              if (result.value) {
                                deleteAgence(c._id);
                              }
                            });
                          }}
                        />
                      </td>

                      <td class="align-middle text-center text-sm">
                        <img
                           onClick={() => {
                            setModalListeClientParAgenceIsOpen({
                              open: true,
                              info: c._id,
                            });
                           
                          }}

                          src="/img/icons8-view-64.png"
                          className="icon_trash"
                        />
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
