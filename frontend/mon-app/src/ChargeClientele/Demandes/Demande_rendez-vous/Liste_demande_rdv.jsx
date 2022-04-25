import React from 'react'
import Liste_demande_rdv_accepter from './Components/Liste_demande_rdv_accepter/Liste_demande_rdv_accepter';
import Liste_demande_rdv_en_attente from './Components/Liste_demande_rdv_en_attente/Liste_demande_rdv_en_attente';
const Liste_demande_rdv = () => {
    return (   <div className="row">
        
    <div className="col-md-12 mt-4">
      
      <div className="card">
        
          <div className="card-header pb-0 px-3" style={{display: 'flex', alignItems: 'center'}}>
            <h6 className="mb-0">Liste des rendez-vous</h6>
            <img src="../assets/img/icons8-payment-32.png" alt="" srcSet style={{width: '25px', marginLeft: '10px', marginBottom: '10px'}} />
          </div>
        
        <div class="slider_his">
  <div className='silder_btn'>
  <a href="#slide-1" className='btn_virement_2'>Liste pour les demandes en attente de rendez-vous   </a>
  
  <a href="#slide-2" className='btn_virement_1'>Liste des rendez-vous acceptés</a>
  </div>

  <div class="slides_rdv">
    <div id="slide-1">
  <Liste_demande_rdv_en_attente   />
    </div>
    <div id="slide-2">
    <Liste_demande_rdv_accepter/>
    </div>
 
  </div>
</div>
      </div>
    </div>
  </div>  );
}
 
export default Liste_demande_rdv;