import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import Validation from "./Validation";



const ChangePasword = () => {
    const [valuesInput,setValues] = useState({});

    const MyValuesInput = (event) => {
        let res = valuesInput;
        res[event.target.name] = event.target.value;
        setValues(res);
      };

      const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
          await axios.post(
            "http://localhost:4000/api/compte/password",
            valuesInput
          );
          Swal.fire("Mot de passe!", "Mot de passe a été changé avec succée", "success");


        } catch (error) {
          if (error.response.data) {
            toast(error.response.data, {
              type: "error",
            });
          }
        }
      };

    


    return ( 
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
         
              <hr className="mb-5" />
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <span className="anchor" id="formLogin" />
                  <div className="card card-outline-secondary">
                    <div className="card-header">
                      <h3 className="mb-0">Modification de mot de passe</h3>
                    </div>
                    <div className="card-body">
                      <form className="form"  onSubmit={handleFormSubmit}
>
                        <div className="form-group">
                          <input type="password" className="form-control" name="currentPassword"  required placeholder='Saisissez votre mot de passe'      onChange={MyValuesInput} />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" id="pwd1" required name="newPassword" placeholder='Nouveau mot de passe'      onChange={MyValuesInput}/>
                        </div>
                   
                 
                        <ToastContainer></ToastContainer>

                     
  <button type="submit" className="btn_terminer">
                      <i className="mdi mr-2" />
                      Modifier le mot de passe{" "}
                    </button>                      </form>
                    </div>
                  </div>
                </div>
              </div></div></div></div> );
}
 
export default ChangePasword;