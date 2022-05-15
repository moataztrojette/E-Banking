import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";


const Inscription = (props) => {
    const [valuesInput,setValues] = useState({});
    const [postsAgences, setListeAgences] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:4000/api/agence/findall").then((ag) => {
        if (ag.data[0]) {
          let id_ag = ag.data[0]._id;
              setValues({
                id_agence: id_ag,
              });
              setListeAgences(ag.data);
        }
      });
    }, []);

    const MyValuesInput = (event) => {
        let res = valuesInput;
        res[event.target.name] = event.target.value;
        setValues(res);
      };
    
      const handleFormSubmit = async (event) => {
        try {
          event.preventDefault();
          await axios.post(
            "http://localhost:4000/api/cdc/inscription",
            valuesInput
          );
    
          toast("Compte a été creer avec succès ", {
            type: "success",
          });

          props.history.replace("/cdc/connexion");

    
       
        } catch (error) {
          if (error.response.data) {
            toast(error.response.data, {
              type: "error",
            });
          }
        }
      };


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
            <input type="text" placeholder="Nom" onChange={MyValuesInput} name="nom" />
          </div>

          <div className="input-field_login">
            <i className="fas fa-user" />
            <input type="text" placeholder="Prénom" onChange={MyValuesInput} name="prenom" />
          </div>

          <div className="input-field_login">
            <i className="fas fa-user" />
            <input type="text" placeholder="Email" onChange={MyValuesInput} name="email" />
          </div>

          <div className="input-field_login">
            <i className="fas fa-user" />
            <input type="number" placeholder="Téléphone" onChange={MyValuesInput} name="tel" />
          </div>


          <div className="input-field_login">
            <i className="fas fa-user" />
            <input type="text" placeholder="CIN" onChange={MyValuesInput} name="cin" />
          </div>
          <div className="bloc_ag">

                    <select
                      className="form-control"
                      name="id_agence"
                      onChange={MyValuesInput}
                    >
                      {postsAgences.map((Ag) => (
                        <option value={Ag._id}>{Ag.nom}</option>
                      ))}
                    </select>
</div>
          <div className="input-field_login">
            <i className="fas fa-lock" />
            <input type="password" placeholder="Mot de passe" onChange={MyValuesInput} name="mdp" />
          </div>
          <h6>
                  Vous avez déja un compte?{" "}
                  <Link to="/cdc/connexion">Connectez-vous</Link>
                </h6>
          <input type="submit" value="Inscrivez-vous" className="btn_inscri" />
        
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
 
export default Inscription;