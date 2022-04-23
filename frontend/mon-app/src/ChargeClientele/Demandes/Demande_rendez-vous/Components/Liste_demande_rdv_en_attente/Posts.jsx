import React, { useState } from "react";
import Modal_Annuler_rdv from "./Modal_Annuler_rdv";
import Modal_rdv from "./Modal_rdv";

const Posts = ({ posts, loading,setPosts }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenAnnulerRDV, setModalIsOpenAnnulerRDV] = useState(false);


  const [stateUserId, setStateUserId] = useState({});

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="row">
      {modalIsOpen === true ? (
        <Modal_rdv
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

{modalIsOpenAnnulerRDV === true ? (
        <Modal_Annuler_rdv
          posts={posts}
          setPosts={setPosts}
          modalIsOpenAnnulerRDV={modalIsOpenAnnulerRDV}
          setModalIsOpenAnnulerRDV={setModalIsOpenAnnulerRDV}
          stateUserId={stateUserId}
          setStateUserId={setStateUserId}
        />
      ) : (
        <div></div>
      )}



      <div >
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Liste des rendez-vous</h6>
          </div>

          <div style={{width:"13em" ,height:"4em"}}>
            <div className="table-responsive p-0">
              <table style={{width:"100%"}} >
                <thead >
                  <tr >
                  <th class=" text-secondary text-sm font-weight-bolder opacity-7">
                      Nom Prénom{" "}
                    </th>

                    <th class=" text-secondary  text-sm  opacity-7">
                    La date de rendez vous{" "}
                    </th>
                    <th class="text-center  text-secondary  text-sm	  opacity-7">
                    L'heure de rendez-vous

                    </th>
                    <th class="text-center  text-secondary  text-sm  opacity-7">
                      Motif
                    </th>
                    <th class="text-center  text-secondary  text-sm	  opacity-7">
                      Action
                    </th>

                    <th class="text-center  text-secondary text-sm	 opacity-7"> </th>

                  </tr>
                </thead>
                {posts.map((c) => (
                  <tbody>
                    <tr style={{marginBottom:"20px"}}>
                    <td class="text-center text-uppercase text-secondary text-lg		 font-weight-bolder " >
                        <span class="text-secondary text-sm	 font-weight-bold">
                        {c.id_user.id_client.nom} {c.id_user.id_client.prenom}  

                        </span>
                      </td>

                      <td class="text-center text-uppercase text-secondary text-lg	 font-weight-bolder ">
                        <span class="text-secondary  text-sm font-weight-bold">
                        {c.date}   

                        </span>
                      </td>
                      <td class="text-center text-uppercase text-secondary  text-lg		 font-weight-bolder ">
                        <span class="text-secondary  text-sm font-weight-bold">
                          {c.heure}
                        </span>
                      </td>
                      <td class="text-center text-uppercase text-secondary text-lg		 font-weight-bolder ">
                        <span class="text-secondary  text-sm font-weight-bold">
                          {c.motif}
                        </span>
                      </td>
                      {c.etat_demande=="en attente" ? (   <td
                       class="text-center text-uppercase text-secondary  text-lg		 font-weight-bolder "
                        onClick={() => {
                          setModalIsOpenAnnulerRDV(true);
                          setStateUserId(c);
                        }}
                      >
                        <button class="btn btn-danger">
                        Annuler un rendez-vous
                        </button>
                      </td>
                    ):(<></>)} 

{c.etat_demande=="en attente" ? (          <td
class="text-center text-uppercase text-secondary  text-lg		 font-weight-bolder "                        onClick={() => {
                          setModalIsOpen(true);
                          setStateUserId(c);
                        }}
                      >
                        <button class="btn btn-success">
                         Accepter reunion
                        </button>
                      </td>
                    ):(<></>)} 


                   

               
        
                   

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
