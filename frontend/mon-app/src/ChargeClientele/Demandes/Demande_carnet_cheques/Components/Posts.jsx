import React, { useEffect, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import dateformat from 'dateformat'
import Modal_valider from "./Modal_valider";

const Posts = ({ posts, loading,setPosts }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [stateUserId, setStateUserId] = useState({});



  if (loading) {
    return <h2>Loading...</h2>;
  }
 

  return (
    <div className="row">

{modalIsOpen === true ? (
        <Modal_valider
          posts={posts}
          setPosts={setPosts}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          stateUserId={stateUserId}
          setStateUserId={setStateUserId}
        />
      ) : (
        <div></div>
      )}
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-header pb-0">
          <h6>Liste des demandes de carnet de cheéques</h6>
        </div>
       
        <div className="card-body px-0 pt-0 pb-2">
   

          <div className="table-responsive p-0">

         
            <table className="table align-items-center mb-0">     
           
              <thead>
                <tr>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Date de demande
                  </th>


                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Nom et prénom{" "}
                  </th>
              
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Email
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Nombre de carnet de chéque
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Format 
                  </th>
               
                  
              
                </tr>
              </thead>
              {posts.map((c)=>(
              <tbody>
                <tr>
                <td class="align-middle text-center text-sm">
                    <span class="text-secondary text-xs font-weight-bold">
                    { dateformat(c.date , "dd mmmm yyyy") }   

                    </span>
                  </td>

                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{c.id_user.id_client.nom} {c.id_user.id_client.prenom}</h6>
                      </div>
                    </div>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">
                    {c.id_user.id_client.email}
                    </span>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="text-secondary text-xs font-weight-bold">
                      {c.nb_carnet_cheque}
                    </span>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="text-secondary text-xs font-weight-bold">
                      {c.format}
                    </span>
                  </td>
                  {c.etat_demande == "en attente" ? (<><td
                        class="align-middle text-center text-sm"
                        onClick={() => {
                          setModalIsOpen(true);
                          setStateUserId(c);
                        }}
                      >
                        <button class="btn btn-success">
                        valider
                        </button>
                      </td></>
) : (<>
<td
                        class="align-middle text-center text-sm"
                   
                      >
                      <img src="/img/icons8-check-mark-48.png"/>

                      </td>
</>) } 
             
          


                 
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