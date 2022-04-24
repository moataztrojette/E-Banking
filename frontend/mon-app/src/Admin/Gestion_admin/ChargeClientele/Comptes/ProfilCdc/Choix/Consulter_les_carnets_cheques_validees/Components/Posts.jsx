import React, {useState } from "react";
import dateformat from 'dateformat'


const Posts = ({ posts, loading }) => {




  if (loading) {
    return <h2>Loading...</h2>;
  }

  


  return (
    <div className="row">


    <div className="col-12">
      <div className="card mb-4">
        <div className="card-header pb-0">
          <h6>Liste validation carnets chéques</h6>
        </div>
       
        <div className="card-body px-0 pt-0 pb-2">
   

          <div className="table-responsive p-0">

         
            <table className="table align-items-center mb-0">     
           
              <thead>
                <tr>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                   Date validation
                  </th>


                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Nom et prénom{" "}
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    CIN
                  </th>

  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Nombre de carnet chéque
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
                        <h6 class="mb-0 text-sm">{c.id_user.id_client.prenom} {c.id_user.id_client.nom}</h6>
                      </div>
                    </div>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">
                      {c.id_user.id_client.cin}
                    </span>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="text-secondary text-xs font-weight-bold">
                      {c.id_demande.nb_carnet_cheque}
                    </span>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="text-secondary text-xs font-weight-bold">
                    {c.id_demande.format}
                    </span>
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