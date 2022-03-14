import React from 'react';


const Profil = () => {
    return (<>
           <div className="col-xl-6 mb-xl-0 mb-4">
    <div className="card bg-transparent shadow-xl">
      <div className="overflow-hidden position-relative border-radius-xl" style={{backgroundImage: 'url("/img/curved-images/curved14.jpg")'}}>
        <span className="mask bg-gradient-dark" />
        <div className="card-body position-relative z-index-1 p-3">
          <div style={{display: 'flex', alignItems: 'center', margin: '10px'}}>
            <h2 className="text-white">28 981,500 </h2>
            <h3 className="text-white" style={{marginLeft: '5px'}}>DT</h3>
          </div>
          <h5 className="text-white mt-4 mb-5 pb-2">4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852</h5>
        </div>
      </div>
    </div>
  </div> 
   <div className="col-xl-6 mb-xl-0 mb-4">
   <div className="card h-100">
     <div className="card-header pb-0 p-3">
       <div className="row">
         <div className="col-md-8 d-flex align-items-center">
           <h6 className="mb-0">Profile Information</h6>
         </div>
         <div className="col-md-4 text-end">
           <a href="javascript:;">
             <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile" />
           </a>
         </div>
       </div>
     </div>
     <div className="card-body p-3">
       <hr className="horizontal gray-light my-3" />
       <ul className="list-group">
         <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Nom Prénom:</strong> &nbsp; Alec M. Thompson</li>
         <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Téléphone:</strong> &nbsp; (44) 123 1234 123</li>
         <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; alecthompson@mail.com</li>
         <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">RIB:</strong> 4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852A</li>
       </ul>
     </div>
   </div>
 </div>
 </>
  );
}
 
export default Profil;