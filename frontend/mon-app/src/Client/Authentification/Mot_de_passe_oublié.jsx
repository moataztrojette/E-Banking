import React, {useState,useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";


const Mot_de_passe_oublié = (props) => {

    const[valuesInput,setValues] = useState({})
    const [stateId,setId] = useState([])
    const MyValuesInput = (event)=>{
      let res = valuesInput
      res[event.target.name] = event.target.value;
      setValues(res);
    };

    useEffect(()=>{
    const res =props.location.pathname.split("/").pop()
    setId(res)
  

    },[])
    const handleFormSubmit  = async  (event)=>{

      event.preventDefault()
      try{
       await axios.post("http://localhost:4000/api/compte/change/password/"+stateId,valuesInput)
       Swal.fire("Mot de passe!", "Mot de passe a été changé avec succée", "success");
        props.history.replace("/")

      }catch(error){
        if(error.response.data){
          toast(error.response.data, {
            type: "error",
          });
        }
      }

    }


    return (<div className="container_login">
          <ToastContainer></ToastContainer>

    <div className="forms-containe_login">
      <div className="signin-signup_login">
        <form action="#" className="form_login" onSubmit={handleFormSubmit}>

          <font className="title_login">Réinitialiser votre mot de passe</font>
          <br />
          <br />

          <div className="input-field_login">
            <i className="fas fa-lock" />
            <input type="password" placeholder="Nouveau mot de passe" onChange={MyValuesInput} name="newPassword" />
          </div>
          <div className="input-field_login">
            <i className="fas fa-lock" />
            <input type="password" placeholder='Confirmer votre mot de passe'  onChange={MyValuesInput} name="confPassword" />
          </div>
      
          <input type="submit" value="Modifier le mot de passe" className="btn_login" />
          <h6>
         
       </h6>
        </form>
      </div>
    </div>

    <div className="panels-container_login">
      <div className="panel_login left-panel">
        <img src="img/register.svg" className="image_login" alt="" />
      </div>
    </div>
  </div>  );
}
 
export default Mot_de_passe_oublié;