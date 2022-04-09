import React, {useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AjouterType from "../AjouterType/AjouterType";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Posts = ({ posts, loading,setListeTypeClient }) => {


  const[modalIsOpen,setModalIsOpen] = useState(false);
  const [valuesInput,setValues] = useState({});


  

  const deleteTypeClient = async (id) => {
    await axios
      .delete("http://localhost:4000/api/type/client/delete/" + id)
      .then((verife) => {
        if (verife.status != 200) {
          Swal.fire("Deleted!", "Your file has been deleted.", "error");
        } else {
          const preventStatu = posts;
          const newState = preventStatu.filter((dev) => dev._id != id);
          setListeTypeClient(newState);
          Swal.fire("Type Client", "Type Client has been deleted", "success");
        }
      });
  };
  const rechercheType = async (event) => {
    if (event.target.value === "") {
      axios.get("http://localhost:4000/api/type/client/findall").then((Ag) => {
        setListeTypeClient(Ag.data);
      });
    } else {
      let res = await axios.get(
        "http://localhost:4000/api/type/client/recherche/" + event.target.value
      );
      setListeTypeClient(res.data);
    }
  };


  


  return (
    <div className="row">
    {modalIsOpen === true ? (<AjouterType  modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} valuesInput={valuesInput} setValues={setValues} listeType={posts} setListeTypeClient={setListeTypeClient} />) : (<div></div>)  } 
    <div class="filter_comptes">
        <div class="form-outline">
          <input
            name="serche"
            onChange={rechercheType}
            id="form1"
            class="form-control"
            placeholder="Rechercher Type Client "
          />
        </div>
        <button
          type="button"
          className="btn_nouvelle_comptes"
          onClick={() => setModalIsOpen(true)}
        >
          Nouveau Type Client +{" "}
        </button>
      </div>

    <div className="col-12">
      <div className="card mb-4">
        <div className="card-header pb-0">
          <h6>Liste des Type  clients</h6>
        </div>
       
        <div className="card-body px-0 pt-0 pb-2">
   

          <div className="table-responsive p-0">

         
            <table className="table align-items-center mb-0">     
           
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Type Client{" "}
                  </th>
               
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Action
                  </th>

                  
              
                </tr>
              </thead>
              {posts.map((c)=>(
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{c.nom_type} </h6>
                      </div>
                    </div>
                  </td>
                  
                  <td class="align-middle text-center text-sm">
                        <img
                          src="/img/icons8-view-64.png"
                          className="icon_trash"
                        />
                      </td>

                      <td class="align-middle text-center text-sm">
                        <img
                          src="/img/icons8-trash.gif"
                          className="icon_trash"
                          onClick={() => {
                            Swal.fire({
                              title: "Êtes - vous sûr ?",
                              text: "",
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#3085d6",
                              cancelButtonColor: "#d33",
                              confirmButtonText: "Oui, supprimez-le!",
                            }).then((result) => {
                              if (result.value) {
                                deleteTypeClient(c._id);
                              }
                            });
                          }}
                        />
                      </td>
            

                </tr>
              </tbody>
               ))}
            </table>
          </div>
         
          </div>
     
      </div>
    </div>
  </div>
  );
  
};

export default Posts;