import React, { useState } from "react";

const Posts = ({ posts}) => {
  return (
    <div className="row">
    <h3>Liste de clients</h3>

    <div className="col-12">

      <div className="card mb-4">
        

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
                    Profession
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    CIN
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
                      {c.profession}
                    </span>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="text-secondary text-xs font-weight-bold">
                      {c.cin}
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
