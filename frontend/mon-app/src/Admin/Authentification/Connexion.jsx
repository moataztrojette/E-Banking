import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Connexion = (props) => {

    const[valuesInput,setValues] = useState({})

    const MyValuesInput = (event)=>{
      let res = valuesInput
      res[event.target.name] = event.target.value;
      setValues(res);
    };

    const handleFormSubmit  = async  (event)=>{

      event.preventDefault()
      try{
       await axios.post("http://localhost:4000/api/admin/connexion",valuesInput)
       props.history.replace('/cdc/main')

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

          <font className="title_login">Votre banque en ligne</font>
          <br />
          <font face agency="Abadi Extra Light" className="title3_login">Vous suit partout 24h/24 et 7j/7</font>
          <br />

          <div className="input-field_login">
            <i className="fas fa-user" />
            <input type="text" placeholder="CIN" onChange={MyValuesInput} name="cin" />
          </div>
          <div className="input-field_login">
            <i className="fas fa-lock" />
            <input type="password" placeholder="Mot de passe" onChange={MyValuesInput} name="mdp" />
          </div>
          <input type="submit" value="Connexion" className="btn_login" />

        </form>
      </div>
    </div>

    <div className="panels-container_login">
      <div className="panel_login left-panel">
        <img src="/img/undraw_Success_factors_re_ce93.png" className="image_login_cdc" alt="" />
      </div>
    </div>
  </div>  );
}
 
export default Connexion;