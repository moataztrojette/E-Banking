import React, { useState } from "react";
import Modal_rdv from "./Modal_rdv";

const Posts = ({ posts, loading,setPosts }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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

      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Liste des rendez-vous</h6>
          </div>

          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Nom Prénom{" "}
                    </th>

                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    La date de rendez vous{" "}
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    L'heure de rendez-vous

                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Motif
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Action
                    </th>

                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Lien de réunion </th>
                  </tr>
                </thead>
                {posts.map((c) => (
                  <tbody>
                    <tr>
                    <td>
                        <div class="d-flex px-2 py-1">
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">{c.id_user.id_client.prenom} {c.id_user.id_client.nom}</h6>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div class="d-flex px-2 py-1">
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">{c.date}</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">
                          {c.heure}
                        </span>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="text-secondary text-xs font-weight-bold">
                          {c.motif}
                        </span>
                      </td>

                      <td
                        class="align-middle text-center text-sm"
                        onClick={() => {
                          setModalIsOpen(true);
                          setStateUserId(c);
                        }}
                      >
                        <button class="btn btn-success">
                          Ajouter Lien meet
                        </button>
                      </td>
                      {c.link !="null" ? (   <td class="align-middle text-center text-sm">
                        <a href={c.link} target="_blank"><img src="/img/icons8-link (1).gif" className="link_meet"></img>  </a>
                      </td>) : (<td class="align-middle text-center text-sm">   
</td>)}
                   

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
