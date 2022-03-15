import React, { useState } from "react";
import AjouterComptes from './AjouterComptes/AjouterComptes'
const ListeComptes = () => {

  const[modalIsOpen,setModalIsOpen] = useState(false);


  return (
    <div className="row">
      {modalIsOpen === true ? (<AjouterComptes  modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />) : (<div></div>)  } 

      <div class="filter_comptes">
        <div class="form-outline">
          <input
            type="search"
            id="form1"
            class="form-control"
            placeholder="Rechercher un compte "
          />
        </div>
        <button type="button" className="btn_nouvelle_comptes" onClick={()=>setModalIsOpen(true)}>
          Nouvelle Comptes +{" "}
        </button>
      </div>
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Liste des comptes</h6>
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Nom et prénom{" "}
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      RIB
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Solde
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Montant
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Trojette Moataz</h6>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">
                        0258741
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="text-secondary text-xs font-weight-bold">
                        12,500 dt
                      </span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="badge badge-sm bg-gradient-success">
                        Voir Profile
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeComptes;
