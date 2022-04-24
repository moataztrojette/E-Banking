import React, { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import Modal_Ajouter_Carte from "./Modal_Ajouter_Carte";

const Posts = ({ posts, loading, setPosts }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [valuesInput, setValues] = useState({});

  
  const deleteCarte = async (id) => {
    await axios
      .delete("http://localhost:4000/api/type/carte/delete/" + id)
      .then((verife) => {
        if (verife.status != 200) {
          Swal.fire("Deleted!", "Your file has been deleted.", "error");
        } else {
          const preventStatu = posts;
          const newState = preventStatu.filter((dev) => dev._id != id);
          setPosts(newState);
          Swal.fire("Type carte", "Type carte has been deleted", "success");
        }
      });
  };


  if (loading) {
    return <h2>Loading...</h2>;
  }



 

  return (
    <div className="row">
        
      {modalIsOpen === true ? (
        <Modal_Ajouter_Carte
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          valuesInput={valuesInput}
          setValues={setValues}
          posts={posts}
          setPosts={setPosts}
        />
      ) : (
        <div></div>
      )}
   

      <div class="filter_comptes">
      
        <button
        style={{padding:"10px",marginLeft:"10em"}}
          type="button"
          className="btn_nouvelle_comptes"
          onClick={() => setModalIsOpen(true)}
        >
          Nouveau carte bancaire +{" "}
        </button>
      </div>
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Liste des cartes</h6>
          </div>

          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Type de carte bancaire	
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Plafonds Global	
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Plafonds de retrait	
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Plafond de paiement

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
                            <h6 class="mb-0 text-sm">{c.nom_carte}</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">
                          {c.plafond_global_carte} DT
                        </span>
                      </td>
                      <td class="align-middle text-center text-sm">
                    
                        <span class="text-secondary text-xs font-weight-bold">
                          {c.plafond_retrait_par_semaine} DT / semaine
                        </span>
                        <br />
                        {c.plafond_retrait_par_jour ? (  <span class="text-secondary text-xs font-weight-bold">
                          {c.plafond_retrait_par_jour} DT / jour
                        </span>) : (<></>)}
                      
                       

                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">
                          {c.Plafond_de_paiement} DT /mois
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
                                deleteCarte(c._id);
                              }
                            });
                          }}
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
