import React from "react";


const Profil = (props) => {

 function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

    return (<>
         {props.infoProfil.map((cl)=>(

           <div className="col-xl-6 mb-xl-0 mb-4">
    <div className="card bg-transparent shadow-xl">
      <div className="overflow-hidden position-relative border-radius-xl" style={{backgroundImage: 'url("/img/curved-images/curved14.jpg")'}}>
        <span className="mask bg-gradient-dark" />
        <div className="card-body position-relative z-index-1 p-3">
          <div style={{display: 'flex', alignItems: 'center', margin: '10px'}}>
            <h2 className="text-white">{numberWithCommas(cl.montant)} </h2>
            <h3 className="text-white" style={{marginLeft: '5px'}}>DT</h3>
          </div>
          <h5 className="text-white mt-6 mb-5 pb-2">RIB : {cl.rib}</h5>
        </div>
      </div>
    </div>
  </div> 
    ))}
   <div className="col-xl-6 mb-xl-0 mb-4">
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
                 <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">RIB:</strong> {cl.rib}</li>
               </ul>
             </div>
          ))}

 
   </div>
 </div>
 </>
  );
}
 
export default Profil;