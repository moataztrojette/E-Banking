import React from 'react'
import { Link } from 'react-router-dom';
import NavPage from '../../Interface/NavPage/NavPage';


const Cartes = () => {
    
    return ( 
        <>
        <NavPage name="Cartes"/>

             <div className="container-fluid py-5">
    <div className="row">
      <div className="col-lg-12">
        <div className="row" style={{marginLeft: '20%'}}>
          <div className="col-xl-6 mb-xl-0 mb-2">
            <div className="card bg-transparent shadow-xl">
              <Link to ={'/client/cartes/demande'}><div className="overflow-hidden position-relative border-radius-xl" style={{backgroundImage: 'url("/img/curved-images/curved14.jpg")'}}>
                <span className="mask bg-gradient-dark" />
                <div className="card-body position-relative z-index-1 p-3">
                  <div style={{textAlign: 'center'}}>
                    <img src="https://img.icons8.com/plasticine/50/000000/bank-cards.png" style={{width: '4em'}} />                      
                  </div>
                  <h5 className="text-white mt-2 mb-5 pb-2" style={{textAlign: 'center'}}>Demande de carte bancaire</h5>
                  <div className="d-flex">
                    <div className="ms-auto w-20 d-flex align-items-end justify-content-end">
                      <img className="w-60 mt-2" src="/img/logos/mastercard.png" alt="logo" />
                    </div>
                  </div>
                </div>
              </div></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> </>);
}
 
export default Cartes;