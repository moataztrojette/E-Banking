import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import NavPage from '../../Interface/NavPage/NavPage';
import axios from "axios";


const Cartes = () => {
    
  const [posts, setPosts] = useState([]);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  useEffect(() => {
    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/api/carte/bancaire/liste');
        setPosts(res.data);
      };
  
      fetchPosts();
      console.log(posts)
  }, []);
  
    return ( 
        <>
        <NavPage name="Cartes"/>

             <div className="container-fluid py-5">
    <div className="row">
      <div className="col-lg-12">
        <div className="row" >

        {posts.map((c)=>(

          <div className="col-xl-4 mb-xl-0 mb-2">
            <div className="card bg-transparent shadow-xl">
          

              <div className="overflow-hidden position-relative border-radius-xl" style={{backgroundImage:`url(${"http://localhost:4000/api/type/carte/getImage/"+ c.id_demande_carte.id_type_carte._id})` }}>
                <span className="mask bg-gradient-dark" />
                <div className="card-body position-relative z-index-1 p-3">

                  <div >
                  <img class="contactless" src="/img/wifi-signal.svg" style={{width:"2em"}}/>

                    <h6 className="text-white mt-2 mb-4 pb-2">{c.id_demande_carte.id_type_carte.nom_carte}</h6>                    
                  </div>
                  <div className="rib_img">
                  <img class="chip" src="/img/chip.svg" style={{width:"2em",marginBottom:"50px"}}/>

<h5 className="text-white mt-2 mb-5 pb-2" >{c.rib}</h5>
                  </div>
                
                  <div className="d-flex">
                    <div className="exp">
                    <div>
                    <h6 className="text-white mt-2 mb-4 pb-2">{c.id_user.id_client.prenom} {c.id_user.id_client.nom}</h6>
        <h6 class="card-expire">EXPIRE 05/23</h6>
                    </div>
                    
                    </div>
                    <div className="ms-auto w-20 d-flex align-items-end justify-content-end">
                      <img  src="/img/logos/mastercard.png" alt="erreur_1" className="w-60 mt-2" />
                    </div>
                  </div>
              

                </div>
              </div>
            </div>
          </div>
               ))}


          


         


        </div>
      </div>
    </div>
  </div> </>);
}
 
export default Cartes;