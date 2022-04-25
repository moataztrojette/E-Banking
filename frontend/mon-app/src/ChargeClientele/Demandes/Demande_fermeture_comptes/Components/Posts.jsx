import React, { useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import dateformat from 'dateformat'

const Posts = ({ posts, loading,setListeCompte }) => {




  if (loading) {
    return <h2>Loading...</h2>;
  }

 

  const desactiverCompte = async (id) => {
      await axios.post("http://localhost:4000/api/compte/desactiver/"+id.id_user._id);
      const dataDemande = await axios.post("http://localhost:4000/api/demande/fermeture/desactiver/"+id._id);
     

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Compte a été désactivé avec succés",
        showConfirmButton: false,
        timer: 1500,
      });

    

      const resFind = posts.find(
        (element) => element._id === id._id);
      const newState = posts;
      const index = posts.indexOf(resFind);
      newState[index] = dataDemande.data;
      setListeCompte(newState);
    } 

    const ActiverCompte = async (id) => {

      await axios.post("http://localhost:4000/api/compte/activer/"+id.id_user._id);
      const dataDemande = await axios.post("http://localhost:4000/api/demande/fermeture/activer/"+id._id);

  
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Compte a été activé avec succés",
        showConfirmButton: false,
        timer: 1500,
      });

 

      const resFind = posts.find(
        (element) => element._id === id._id);
      const newState = posts;
      const index = posts.indexOf(resFind);
      newState[index] = dataDemande.data;
      setListeCompte(newState);
    } 


  

  return (
    <div className="row">

    
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-header pb-0">
          <h6>Liste des demandes</h6>
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
                  Date de demande de fermeture de compte bancaire
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    motif
                  </th>

                  
              
                </tr>
              </thead>
              {posts.map((c)=>(
              <tbody>
                <tr>
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
                    { dateformat(c.date , "dd mmmm yyyy") }   

                    </span>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="text-secondary text-xs font-weight-bold">
                      {c.motif}
                    </span>
                  </td>
                  <ToastContainer></ToastContainer>

            
{c.isActive == true ? ( <td class="align-middle text-center">
                    <button class="btn_activer_desactiver"  onClick={() => {
                          desactiverCompte(c);
                        }}>
                      Désactiver Compte
                    </button>
                  </td>) :(
                    <td class="align-middle text-center">
                    <button class="btn_activer_desactiver"  onClick={() => {
                          ActiverCompte(c);
                        }}>
                      Activer Compte
                    </button>
                  </td>

                  ) }
                 
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