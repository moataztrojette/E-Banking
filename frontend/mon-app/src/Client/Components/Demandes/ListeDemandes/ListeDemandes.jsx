import React from 'react';
import { Link } from 'react-router-dom';

const ListeDemandes = () => {
    return (  <div>  
  
  
  
      <div class="container-fluid py-4"> 
  
      <div class="row">
  
        <div class="col-lg-12">
  
          <div class="row">
  
            <div class="col-md-12 mb-lg-0 mb-4">
  
              <div class="row mt-4">
  
                <div >
  
  
                  <div class="card">
  
                    <div class="card-header pb-0">
  
                      <h6>Demandes </h6>
  
                      <p class="text-sm">
                        <span class="font-weight-bold">Veuillez trouver ici  les liste de Demandes
                        </span>
                      </p>
                    </div>
                    <div class="card-body p-3">
                      <div >
                        <div class="card-body pt-4 p-3">
                            <ul class="list-group" >
                           
                            <Link to ={'/client/demandes/liste/rdv'}><li class="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg"  >
              
                            <div className='bloc1' >
                                  <div className='bloc2' >
                                  <img src="https://img.icons8.com/external-others-iconmarket/64/4a90e2/external-calander-healthcare-and-medical-others-iconmarket.png" alt="erreur_1" className='bloc3' />
                                  <span>Demandes des rendez-vous</span>
  
                                        </div>
                              
                    
                                        <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" alt="erreur_1" className='imgW'/>                                
                                  </div>
                                  </li></Link>
                                  <li class="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg" >
              
                                  <div className='bloc1'>
                                  <div className='bloc2'>
                                  <img src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/4a90e2/external-hand-online-shopping-vitaliy-gorbachev-blue-vitaly-gorbachev.png" alt="erreur_1" className='bloc3' />
                                  <span>Demandes de fonds et de devis</span>
                              </div>
                    
                              <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" alt="erreur_1" className='imgW'/>                             
                              </div>
  
                                  </li>
  
                                <li class="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg" >
              
                                  <div className='bloc1'>
                                  <div className='bloc2'>
                                  <img src="https://img.icons8.com/ultraviolet/40/000000/check.png" alt="erreur_1" className='bloc3' />
                                  <span>Demandes de carte bancaire</span>
                              
                    </div>
                    <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" alt="erreur_1" className='imgW'/>                                   
                    </div>
  
                                  </li>
  
  
                                 
  
                             
  
                           
  
                       
                          
                          
                            </ul>
                          </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </div>
   
    
    </div> </div>   );
}
 
export default ListeDemandes;