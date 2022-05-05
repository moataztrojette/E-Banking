import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Type_carte_bancaire = (props) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/type/carte/find/" + props.match.params.id)
      .then((data) => {
        setPosts(data.data);
      });
  }, []);


  const demande_carte_bancaire = async (c)=> {
  try{
    await axios.post("http://localhost:4000/api/demande/carte/add",{
      id_type_carte : c._id
    })
    toast("Opération est effectuée avec succés ", {
      type: "success",
    });
  }catch (error) {
    if (error.response.data) {
      toast(error.response.data, {
        type: "error",
      });
    }
  }
  
  }

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-md-12 mb-lg-0 mb-4">
              <div className="row mt-4">
                <div>
                  {posts.map((c) => (
                    <div className="card z-index-2">
                      <div className="card-header pb-0">
                        <div className="chart">
                          <canvas
                            id="chart-bars"
                            className="chart-canvas"
                            style={{ height: "10px" }}
                          />
                        </div>

                        <h6>Carte bancaire : {c.nom_carte} </h6>
                        <p className="text-sm">
                          <span className="font-weight-bold">description</span>
                        </p>
                      </div>
                      <div className="card-body p-3">
                        <div>
                          <div className="card-body pt-4 p-3">
                            <ul className="list-group">
                              <li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg">
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <span className="mb-2 text-xs">
                                    Plafond Global de la carte
                                  </span>
                                  <span
                                    className="text-dark font-weight-bold"
                                    style={{
                                      border: "1px solid",
                                      borderRadius: "10px",
                                      padding: "10px",
                                    }}
                                  >
                                    {numberWithCommas(c.plafond_global_carte)}{" "}
                                    DT
                                  </span>{" "}
                                </div>
                              </li>
                              {c.plafond_retrait_par_jour ? (
                                <li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg">
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <span className="mb-2 text-xs">
                                      Plafond retrait par jour
                                    </span>
                                    <span
                                      className="text-dark font-weight-bold"
                                      style={{
                                        border: "1px solid",
                                        borderRadius: "10px",
                                        padding: "10px",
                                      }}
                                    >
                                      {c.plafond_retrait_par_jour} DT
                                    </span>
                                  </div>
                                </li>
                              ) : (
                                <></>
                              )}

                              <li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg">
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <span className="mb-2 text-xs">
                                    Plafond retrait par semaine
                                  </span>
                                  <span
                                    className="text-dark font-weight-bold"
                                    style={{
                                      border: "1px solid",
                                      borderRadius: "10px",
                                      padding: "10px",
                                    }}
                                  >
                                    {c.plafond_retrait_par_semaine} DT
                                  </span>
                                </div>
                              </li>

                              <li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg">
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <span className="mb-2 text-xs">
                                    Plafond paiement
                                  </span>
                                  <span
                                    className="text-dark font-weight-bold"
                                    style={{
                                      border: "1px solid",
                                      borderRadius: "10px",
                                      padding: "10px",
                                    }}
                                  >
                                    {c.Plafond_de_paiement} DT
                                  </span>{" "}
                                </div>
                              </li>
                              <li style={{ listStyle: "none" }}>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => demande_carte_bancaire(c)}
                                    style={{ width: "100%" }}
                                  >
                                    Valider
                                  </button>
                                  <ToastContainer></ToastContainer>

                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type_carte_bancaire;
