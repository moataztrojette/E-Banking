import React, {useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Posts = ({ posts, loading,setListeCompte,id }) => {




  if (loading) {
    return <h2>Loading...</h2>;
  }

  const rechercheUsers = async (event) => {
    if (event.target.value === "") {
      axios.get('http://localhost:4000/api/cdc/agence/find/'+id).then((comptes) => {
        setListeCompte(comptes.data)
      });
    } else {
      let res = await axios.get(
        "http://localhost:4000/api/cdc/recherche/"+ event.target.value
      );
      setListeCompte(res.data);
    }
  };


  return (
    <div className="row">

    <div class="filter_comptes" style={{marginLeft:"66em"}}>
      <div class="form-outline">
        <input
          name="serche"
          onChange={rechercheUsers}
          id="form1"
          class="form-control"
          placeholder="Rechercher un compte par prénom "
          style={{width:"20em"}}
        />
      </div>
    
    </div>
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-header pb-0">
          <h6>Liste des comptes de chargé de clientèle</h6>
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
                    Email
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Adresse
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Agence
                  </th>

                 
                  
              
                </tr>
              </thead>
              {posts.map((c)=>(
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{c.prenom} {c.nom}</h6>
                      </div>
                    </div>
                  </td>
               
                  <td class="align-middle text-center text-sm">
                    <span class="text-secondary text-xs font-weight-bold">
                      {c.email}
                    </span>
                  </td>
              

                  <td class="align-middle text-center text-sm">
                    <span class="text-secondary text-xs font-weight-bold">
                      {c.id_agence.nom}
                    </span>
                  </td>
       
            

                  <Link to ={'/admin/cdc/liste/profil/'+c._id}><td class="align-middle text-center">
                    <span class="badge badge-sm bg-gradient-success">
                      Voir Profil
                    </span>
                  </td></Link>
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