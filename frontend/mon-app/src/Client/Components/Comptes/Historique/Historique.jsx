import React from 'react'
const Historique = (props) => {
    return (   <div className="row">
    <div className="col-md-12 mt-4">
      <div className="card">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div className="card-header pb-0 px-3" style={{display: 'flex', alignItems: 'center'}}>
            <h6 className="mb-0">Mon historique</h6>
            <img src="../assets/img/icons8-payment-32.png" alt="" srcSet style={{width: '25px', marginLeft: '10px', marginBottom: '10px'}} />
          </div>
          <select className="form-select" aria-label="Default select example" style={{width: '16em'}}>
            <option value={1}>RETRAIT ESPECES</option>
            <option value={2}>VIREMENT BANCAIRES</option>
          </select>
        </div>
        <div class="slider_his">
  <div className='silder_btn'>
  <a href="#slide-1" className='btn_virement_2'>Virement envoyer </a>
  
  <a href="#slide-2" className='btn_virement_1'>Virement reçu</a>
  </div>

  <div class="slides_his">
    <div id="slide-1">
    <div className="card-body pt-4 p-3">
          <ul className="list-group">
          {props.virementEnvoyer.map((his) => (

<li className="bloc4 border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
<div className="d-flex flex-column">
  <span className="mb-2 text-xs">
    Date Opération :{" "}
    <span className="text-dark font-weight-bold ms-sm-2">
      {his.date}
    </span>
  </span>
  <span className="mb-2 text-xs">
    Nom bénéficiaire:{" "}
    <span className="text-dark font-weight-bold ms-sm-2">
      {his.nomBeneficiaire}
    </span>
  </span>
  <span className="mb-2 text-xs">
    RIB bénéficiaire :{" "}
    <span className="text-dark ms-sm-2 font-weight-bold">
      {his.ribBeneficiaire}
    </span>
  </span>
  <span className="text-xs">
    Montant:{" "}
    <span className="text-danger ms-sm-2 font-weight-bold">
      -{his.montant} DT
    </span>
  </span>
</div>
</li>
               ))}
       
          </ul>
        </div>
    </div>
    <div id="slide-2">
    <div className="card-body pt-4 p-3">
          <ul className="list-group">
          {props.virementRecu.map((his) => (
           <li className="bloc4 border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
           <div className="d-flex flex-column">
             <span className="mb-2 text-xs">
               Date Opération :{" "}
               <span className="text-dark font-weight-bold ms-sm-2">
                 {his.date}
               </span>
             </span>
             <span className="mb-2 text-xs">
               Nom bénéficiaire:{" "}
               <span className="text-dark font-weight-bold ms-sm-2">
                 {his.id_user.nom}
               </span>
             </span>
             <span className="mb-2 text-xs">
               RIB bénéficiaire :{" "}
               <span className="text-dark ms-sm-2 font-weight-bold">
                 {his.id_user.rib}
               </span>
             </span>
             <span className="text-xs">
               Montant:{" "}
               <span className="text-success ms-sm-2 font-weight-bold">
                 + {his.montant} DT
               </span>
             </span>
           </div>
           </li>
         
         ))}
          </ul>
        </div>
    </div>
 
  </div>
</div>
      </div>
    </div>
  </div>  );
}
 
export default Historique;