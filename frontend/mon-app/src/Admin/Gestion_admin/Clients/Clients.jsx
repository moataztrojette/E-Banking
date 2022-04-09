import React , {useState }  from 'react'
import { Link  } from 'react-router-dom';

const Clients = () => {


    return (
  
    <div>  



    <div class="container-fluid py-4"> 

    <div class="row">

      <div class="col-lg-12">

        <div class="row">

          <div class="col-md-12 mb-lg-0 mb-4">

            <div class="row mt-4">

              <div >


                <div class="card">

                  <div class="card-header pb-0">

                    <h6>Clients </h6>

                
                  </div>
                  <div class="card-body p-3">
                    <div >
                      <div class="card-body pt-4 p-3">
                          <ul class="list-group" >
                         
                          <Link to={'/admin/clients/type'}><li class="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg">
            
                              <div className='bloc1' >
                               <div className='bloc2' >
                                            <img src="/img/icons8-client-60.png"  alt="erreur_1" className='imgWM'/>
                                          <span>Type Clinets</span>

                                      </div>
                            
                  
                                      <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" alt="erreur_1" className='imgW'/>                                
                                </div>
                                </li></Link>
                                <Link to={'/admin/clients/comptes'}><li class="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg" >
            
                                <div className='bloc1'>
                                <div className='bloc2'>
                                          <img src="/img/icons8-client-64.png" alt="erreur_1" className='imgWM'/>
                                      <span >Liste de clients </span>
                            </div>
                  
                            <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" alt="erreur_1" className='imgW'/>                             
                            </div>

                                </li></Link>

                              


                               

                           

                         

                     
                        
                        
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
 
  
  </div> </div> );
}
 
export default Clients;