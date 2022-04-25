import React , {useState }  from 'react'
import { Link  } from 'react-router-dom';
import NavPage from '../../../Client/Interface/NavPage/NavPage';

const Carte_bancaire = () => {


    return (
  
    <div>  
                  <NavPage name="Cartes bancaire"/>




    <div class="container-fluid py-4"> 

    <div class="row">

      <div class="col-lg-12">

        <div class="row">

          <div class="col-md-12 mb-lg-0 mb-4">

            <div class="row mt-4">

              <div >


                <div class="card">

                  <div class="card-header pb-0">


                
                  </div>
                  <div class="card-body p-3">
                    <div >
                      <div class="card-body pt-4 p-3">
                          <ul class="list-group" >
                         
                          <Link to={'/cdc/demandes/cartes/choix/type_carte'}><li class="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg">
            
                              <div className='bloc1' >
                               <div className='bloc2' >
                                            <img src="/img/icons8-bank-card-missing-48.png"  alt="erreur_1" className='imgWM'/>
                                          <span>type de carte bancaire</span>

                                      </div>
                            
                  
                                      <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" alt="erreur_1" className='imgW'/>                                
                                </div>
                                </li></Link>
                                <Link to={'/cdc/demandes/cartes/choix/liste'}><li class="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg" >
            
                                <div className='bloc1'>
                                <div className='bloc2'>
                                          <img src="/img/icons8-bank-cards-100.png" alt="erreur_1" className='imgWM'/>
                                      <span >liste de demande des cartes bancaires </span>
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
 
export default Carte_bancaire;