import React, { useState } from "react";
import Taux from "./Modal_taux/Taux";

const Profil = (props) => {
  const[modalIsOpen,setModalIsOpen] = useState(false);


    return (<>

{modalIsOpen === true ? (<Taux  modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} taux={props.taux} />) : (<div></div>)  } 
   
   <div className="col-xl-6 mb-xl-0 mb-4">
   <button type="button" class="btn btn-success" onClick={()=>setModalIsOpen(true)}> Taux d'interet </button>

 </div>
 </>
  );
}
 
export default Profil;