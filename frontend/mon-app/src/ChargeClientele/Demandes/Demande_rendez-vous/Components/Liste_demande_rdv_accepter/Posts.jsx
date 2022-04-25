import React, { useState } from "react";
import ModalResultat from "./ModalResultat";
const Posts = ({ posts, loading, setPosts }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [stateIdDemande, setStateIdDemande] = useState({});

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="row">
      {modalIsOpen === true ? (
        <ModalResultat
        
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          stateIdDemande={stateIdDemande}
          setStateIdDemande={setStateIdDemande}
  
        />
      ) : (
        <div></div>
      )}

      <div>
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Liste des rendez-vous</h6>
          </div>

          <div style={{ width: "13em", height: "4em" }}>
            <div className="table-responsive p-0">
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th class="text-secondary text-sm font-weight-bolder opacity-7">
                      Nom Prénom{" "}
                    </th>

                    <th class="text-secondary  text-sm  opacity-7">
                      La date de rendez vous{" "}
                    </th>
                    <th class="text-center  text-secondary  text-sm	  opacity-7">
                      L'heure de rendez-vous
                    </th>
                    <th class="text-center  text-secondary  text-sm  opacity-7">
                      Motif
                    </th>
                    <th class="text-center  text-secondary  text-sm	  opacity-7">
                      Validé par
                    </th>

                    <th class="text-center  text-secondary  text-sm	  opacity-7">
                      Resultat
                    </th>
                  

                    <th class="text-center  text-secondary text-sm	 opacity-7">
                      {" "}
                    </th>
                  </tr>
                  <h2></h2>
                </thead>
                {posts.map((c) => (
                  <tbody>
                    <tr style={{ marginBottom: "20px" }}>
                      <td class="text-center text-uppercase text-secondary text-lg		 font-weight-bolder ">
                        <span class="text-secondary text-sm	 font-weight-bold">
                          {c.id_user.id_client.nom} {c.id_user.id_client.prenom}
                        </span>
                      </td>

                      <td class="text-center text-uppercase text-secondary text-lg	 font-weight-bolder ">
                        <span class="text-secondary  text-sm font-weight-bold">
                          {c.id_demande.date}
                        </span>
                      </td>
                      <td class="text-center text-uppercase text-secondary  text-lg		 font-weight-bolder ">
                        <span class="text-secondary  text-sm font-weight-bold">
                          {c.id_demande.heure}
                        </span>
                      </td>
                    
                      <td class="text-center text-uppercase text-secondary text-lg		 font-weight-bolder ">
                        <span class="text-secondary  text-sm font-weight-bold">
                          {c.id_demande.motif}
                        </span>
                      </td>
                      <td class="text-center text-uppercase text-secondary text-lg		 font-weight-bolder ">
                        <span class="text-secondary  text-sm font-weight-bold">
                          {c.id_cdc.prenom} {c.id_cdc.nom}
                        </span>
                      </td>
                      <td
                        class="text-center text-uppercase text-secondary  text-lg		 font-weight-bolder "
                        onClick={() => {
                          setModalIsOpen(true);
                          setStateIdDemande(c);
                        }}
                      >
                        <button class="btn btn-success">
                          Voir
                        </button>
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
