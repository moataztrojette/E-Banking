import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import NavPage from '../../../Interface/NavPage/NavPage';
import axios from "axios";



const Demande_carte_bancaire = (props) => {
const [posts, setPosts] = useState([]);
const [valuesInput,setValues] = useState({});


useEffect(() => {
    axios.get("http://localhost:4000/api/type/carte/findall").then((data) => {
      if (data.data[0]) {
        let id_carte = data.data[0]._id;
        setValues({
            id_type_carte: id_carte,
          });
      }
      setPosts(data.data)

    });
  }, []);

  const MyValuesInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };

  const handleFormSubmit = async (event) => {
    props.history.replace("/client/demandes/carte/bancaire/type/"+valuesInput.id_type_carte)
  
  };


    
    return ( 
        <>
        <NavPage name="Demande carte bancaire"/>

             <div className="container-fluid py-5">
    <div className="row">
        <h3>Select your carte</h3>
      <div className="col-lg-9">
        <div className="row" style={{marginLeft: '20%', boxShadow: "2px 2px 2px",padding:"3em"}}>
      
        <form
            className="pt-3"
            encType="multipart/form-data"
            onSubmit={handleFormSubmit}
          >
        <select
                      className="form-control"
                      name="id_type_carte"
                      onChange={MyValuesInput}
                    >
                      {posts.map((cl) => (
                        <option value={cl._id}>{cl.nom_carte}</option>
                      ))}
                    </select>

                    <button type="submit" className="btn_terminer" style={{marginLeft:"30%",marginTop:"5%"}}>
                      <i className="mdi mr-2" />
                      Suivant{" "}
                    </button>
                    </form>

        </div>
      </div>
    </div>
  </div> </>);
}
 
export default Demande_carte_bancaire;