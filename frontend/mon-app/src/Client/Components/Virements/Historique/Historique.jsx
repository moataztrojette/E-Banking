import React from 'react'
import VirementEnvoyer from './VirementEnvoyer/VirementEnvoyer';
import VirementRecu from './VirementRecu/VirementRecu';
const Historique = () => {
    return (   <div className="row">
        
    <div className="col-md-12 mt-4">
      
      <div className="card">
        
          <div className="card-header pb-0 px-3" style={{display: 'flex', alignItems: 'center'}}>
            <h6 className="mb-0">Mon historique</h6>
            <img src="../assets/img/icons8-payment-32.png" alt="" srcSet style={{width: '25px', marginLeft: '10px', marginBottom: '10px'}} />
          </div>
        
        <div class="slider_his">
  <div className='silder_btn'>
  <a href="#slide-1" className='btn_virement_2'>Virement envoyer </a>
  
  <a href="#slide-2" className='btn_virement_1'>Virement reçu</a>
  </div>

  <div class="slides_his">
    <div id="slide-1">
  <VirementEnvoyer   />
    </div>
    <div id="slide-2">
<VirementRecu />
 
    </div>
 
  </div>
</div>
      </div>
    </div>
  </div>  );
}
 
export default Historique;