import React from "react";


const Profil = (props) => {


    return (<>

         
   <div className="col-xl-6 mb-xl-0 mb-4">
   <div className="card h-100">
     <div className="card-header pb-0 p-3">
       <div className="row">
         <div className="col-md-8 d-flex align-items-center">
           <h6 className="mb-0">Informations personnelles</h6>
         </div>
     
       </div>
     </div>
               <div className="card-body p-3">
               <hr className="horizontal gray-light my-3" />
               <ul className="list-group">
                 <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Nom Prénom:</strong> &nbsp; </li>
                 <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">CIN:</strong> &nbsp;  </li>
                 <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; </li>
               </ul>
             </div>

 
   </div>
 </div>
 </>
  );
}
 
export default Profil;