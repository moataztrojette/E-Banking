import React, { useEffect, useState,useRef  } from "react";
import axios from "axios";
import ReactToPrint from 'react-to-print';

const Rib = () => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


  const [infoProfil, setInfoProfil] = useState([]);
  const componentRef = useRef();

  useEffect(() => {
    axios.get("http://localhost:4000/api/compte/profil").then((compte) => {
      setInfoProfil(compte.data);
      
    });
  
  }, []);

    return ( 
      <>
      <ReactToPrint
        trigger={() => <button  class="btn btn-success"
        >Imprimer vos informations !</button>}
        content={() => componentRef.current}
     
      />

    <section id="team" style={{marginLeft:"17em"}} >
        
    <div className="container" >
   
      <div className="row" >

        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
            <div className="mainflip">
              <div className="frontside">
                <div className="card" style={{marginLeft:"-2em",width:"40em",height:"35em"}} >
                {infoProfil.map((info)=>(
                  <div className="card-body" style={{padding:"7em"}} ref={componentRef}>
                  <h5 className="infoCompte">Informations sur les comptes</h5>
                        <br />
                      
                          
                  
                    <h6 className="card-title">Nom : {info.prenom}</h6>
                    <h6 className="card-title">Prénom : {info.nom}</h6>
                    <h6 className="card-title">Email : {info.email}</h6>
                    <h6 className="card-title">CIN : {info.cin}</h6>
                    <h6 className="card-title">RIB bancaire : {info.rib}</h6>
                    <h6 className="card-title">Solde de Compte Bancaire : {numberWithCommas(info.montant)} DT</h6>
                    <img src="/img/signateur.png" className='signateur' />


                  </div>
                        ))}

                </div>
              </div>
          
            </div>
          </div>
        </div>
        {/* ./Team member */}
      </div>

    </div>

  </section>
  </>  );
}
 
export default Rib;