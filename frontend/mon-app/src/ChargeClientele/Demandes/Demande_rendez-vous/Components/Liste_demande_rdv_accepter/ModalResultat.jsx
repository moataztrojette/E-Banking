import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

const ModalResultat = (props) => {
    const [stateRes, setStateRes] = useState([]);

    useEffect(() =>  {
        axios.get('http://localhost:4000/api/rdv/find/'+ props.stateIdDemande.id_demande._id).then((res)=>{
            setStateRes(res.data);
        });
      
    
    }, []);


  return (
    <div>
        
      <Modal
        isOpen={props.modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => props.setModalIsOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "55%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
          overlay: {
            backgroundColor: "rgba(206, 239, 248,0.8)",
          },
        }}
      >
               <div className="mb-2">
           <img src="/img/icons8-xbox-x-64.png"
           className="img_x"
             onClick={() =>
               props.setModalIsOpen(false )
             }
           >
            
           </img>
         </div>

        <div className="auth-form-light text-left p-5">
          <h3 className="font-weight-light">
            Resultat de demande de Rendez-vous
          </h3>
          <br />
      
            <div className="bloc_component_ajouter_comptes">
            <div>
              {stateRes.map((c)=>(

                  <div>
                        <p>Bonjour monsieur <b>{c.id_cdc.nom} {c.id_cdc.prenom}</b> vous avez un rendez-vous avec monsieur <b>{c.id_user.id_client.nom} {c.id_user.id_client.prenom}</b>    à la date <b>{c.id_demande.date}</b> à l'heure <b>{c.id_demande.heure}</b> Voici le lien Meet  :  <b>                        <a href={c.link} target="_blank"><img src="/img/icons8-link (1).gif" className="link_meet"></img>  </a>
</b></p>

                  </div>


))}
<br />


              

                <ToastContainer></ToastContainer>

             
            </div>
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalResultat;
