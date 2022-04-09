import React, { useEffect } from 'react'
import VirementEnvoyer from './VirementEnvoyer/VirementEnvoyer';
import VirementRecu from './VirementRecu/VirementRecu';
const Virements = (props) => {

  useEffect(()=>{
        console.log(props.match.params.id)
  },[])
    return (   <div className="row">
        
    <div className="col-md-12 mt-4">
      
      <div className="card">
        
          <div className="card-header pb-0 px-3" style={{display: 'flex', alignItems: 'center'}}>
            <h6 className="mb-0">Mon historique</h6>
            <img src="../assets/img/icons8-payment-32.png" alt="" srcSet style={{width: '25px', marginLeft: '10px', marginBottom: '10px'}} />
          </div>
        
        <div class="slider_his">
  <div className='silder_btn'>
  <a href="#slide-1" className='btn_virement_2'>Virements envoyés </a>
  
  <a href="#slide-2" className='btn_virement_1'>Virements reçus</a>
  </div>

  <div class="slides_his">
    <div id="slide-1">
  <VirementEnvoyer id={props.match.params.id}  />
    </div>
    <div id="slide-2">
<VirementRecu id={props.match.params.id} />
 
    </div>
 
  </div>
</div>
      </div>
    </div>
  </div>  );
}
 
export default Virements;