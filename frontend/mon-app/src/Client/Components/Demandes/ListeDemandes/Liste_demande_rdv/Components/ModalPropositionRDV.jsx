import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

const ModalPropositionRDV = (props) => {
    const [stateRes, setStateRes] = useState([]);

    useEffect(() =>  {
        axios.get('http://localhost:4000/api/proposition/rdv/find/'+ props.stateIdDemande._id).then((res)=>{
            setStateRes(res.data);
        });
      
    
    }, []);


  return (
    <div>
        
      <Modal
        isOpen={props.modalIsOpenProposition}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => props.setModalIsOpenProposition(false)}
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
               props.setModalIsOpenProposition(false )
             }
           >
            
           </img>
         </div>

        <div className="auth-form-light text-left p-5">
          <h3 className="font-weight-light">
            Proposition Rendez-vous en ligne
          </h3>
          <br />
      
            <div className="bloc_component_ajouter_comptes">
            <div>
              {stateRes.map((c)=>(

                  <div>
                        <p>Bonjour monsieur <b>{c.id_user.id_client.nom} {c.id_user.id_client.prenom}</b> votre demande de rendez-vous en ligne   <b>est annulée</b> à la date <b>{c.id_demande.date}</b> à l'heure <b>{c.id_demande.heure}</b> <p>vous pouvez prendre un àutre rendez-vous à la date <b>{c.date} </b> a l'heure <b>{c.heure}</b>  <b>Merci</b></p></p>

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

export default ModalPropositionRDV;
