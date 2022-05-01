import React from "react";


const Profil = (props) => {


    return (<>

         
   <div className="col-12 col-xl-4">
   <div className="card h-100">
     <div className="card-header pb-0 p-3">
       <div className="row">
         <div className="col-md-8 d-flex align-items-center">
           <h6 className="mb-0">Informations personnelles</h6>
         </div>
     
       </div>
     </div>
     {props.infoProfil.map((cl)=>(
               <div className="card-body p-3">
               <hr className="horizontal gray-light my-3" />
               <ul className="list-group">
                 <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Nom Prénom:</strong> &nbsp; {cl.prenom} {cl.nom}</li>
                 <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">CIN:</strong> &nbsp; {cl.cin} </li>
                 <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; {cl.email}</li>
                 <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Téléphone:</strong> &nbsp; {cl.tel}</li>
                 <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Agence:</strong> &nbsp; {cl.id_agence.nom}</li>

               </ul>
             </div>
          ))}

 
   </div>
 </div>
 </>
  );
}
 
export default Profil;