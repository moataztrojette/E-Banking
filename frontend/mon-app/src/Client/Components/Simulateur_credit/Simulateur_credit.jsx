import React, { useState } from "react";
import axios from "axios";
const Simulateur_credit = () => {
  const [valuesInput, setValues] = useState({});
  const [posts, setPosts] = useState([]);

  const MyValuesInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post(
      "http://localhost:4000/api/simulateur-credit",
      valuesInput
    );
    setPosts(res.data);
    console.log(posts.l_echance);
    //console.log(posts)
  };

  return (
    <div>
      <form
        id="form_credit_sayara"
        name="formSimulateurCredit"
        onSubmit={handleFormSubmit}
      >
        <div>
          <div className="titre_page_liste_assurance">Simulez votre Crédit</div>

          <div className="part2_recap">
            <div className="box_simulateur" style={{ width: "76em" }}>
              <div className="titre_box_simul">
                Choisissez le montant et la durée de remboursement souhaité
              </div>
              <div className="content_box_simul recap_simul">
                <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                  <tbody className="part1_recap">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div
                        className="bloc1_part1"
                        style={{ marginRight: "10px" }}
                      >
                        <div className="part1_div_h4">
                          <h4>Montant demandé</h4>
                        </div>

                        <div className="input-group mb-2">
                          <input
                            style={{ width: "22em", height: "3.5em" }}
                            className="form-control"
                            name="montant"
                            type="number"
                            required
                            placeholder="Montant "
                            onChange={MyValuesInput}
                          />
                          <div className="input-group-prepend">
                            <div
                              className="input-group-text"
                              style={{ height: "3.5em" }}
                            >
                              DT
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                      <div
                        className="bloc1_part1"
                        style={{ marginRight: "10px" }}
                      >
                        <div className="part1_div_h4">
                          <h4>Revenu brut</h4>
                        </div>{" "}
                        <div className="input-group mb-2">
                          <input
                            style={{ width: "22em", height: "3.5em" }}
                            className="form-control"
                            name="salaire"
                            type="number"
                            placeholder="Salaire"
                            onChange={MyValuesInput}
                          />
                          <div className="input-group-prepend">
                            <div
                              className="input-group-text"
                              style={{ height: "3.5em" }}
                            >
                              DT
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                      <div
                        className="bloc1_part1"
                        style={{ marginRight: "10px" }}
                      >
                        <div className="part1_div_h4">
                          <h4>Durée de remboursement</h4>
                        </div>
                        <div class="form-outline"></div>{" "}
                        <select
                          style={{ width: "30em", height: "3.5em" }}
                          class="form-select"
                          id="exampleFormControlSelect1"
                          onChange={MyValuesInput}
                          name="periode"
                        >
                          <option value="1">1 an</option>
                          <option value="2">2 ans</option>
                          <option value="3">3 ans</option>
                          <option value="4">4 ans</option>
                          <option value="5">5 ans</option>
                          <option value="6">6 ans</option>
                          <option value="7">7 ans</option>
                          <option value="8">8 ans</option>
                          <option value="9">9 ans</option>
                          <option value="10">10 ans</option>
                          <option value="11">11 ans</option>
                          <option value="12">12 ans</option>
                          <option value="13">13 ans</option>
                          <option value="14">14 ans</option>
                          <option value="15">15 ans</option>
                          <option value="16">16 ans</option>
                          <option value="17">17 ans</option>
                          <option value="18">18 ans</option>
                          <option value="19">19 ans</option>
                          <option value="20">20 ans</option>
                        </select>
                      </div>
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="box_simulateur">
            <div className="titre_box_simul" style={{ width: "64em" }}>
              Résumé de votre demande
            </div>
            <div className="content_box_simul recap_simul">
              <table
                width="100%"
                border={0}
                cellSpacing={0}
                cellPadding={0}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <tbody>
                  <tr>
                    <td>Montant à emprunter : {valuesInput.montant} DT </td>
                    <td>
                      <span id="value_txtMnt" />{" "}
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>Durée choisie : {valuesInput.periode} ans </td>
                    <td>
                      <span id="value_cmbremb" />
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>
                      <span id="value_totalMontant" />
                      <td>Revenu brut : {valuesInput.salaire} DT</td>
                    </td>
                  </tr>
                </tbody>
                <div style={{display:"flex",flexDirection:"row",marginLeft:"20em"}}>
                <div style={{marginRight:"5em"}}>
                  <img src="/img/salaire.svg" alt="" style={{backgroundColor:"#76a82f",borderRadius:"40%",width:"2em",marginLeft:"80px"}}/>
                  <h6>Montant de l'échéance</h6>
                  <h3 style={{textAlign:"center"}}>{posts.l_echance} DT</h3>
                </div>
                <div>
                  <img src="/img/Taux_d_Endettement.svg" alt="" style={{backgroundColor:"#76a82f",borderRadius:"50%",marginLeft:"80px"}}/>
                  <h6>Taux d'endettement mensuel</h6>
                  {posts.Taux_d_Endettement_Mensuel_totale < 40 ? (
                    <>
                      {" "}
                      <h3 class="text-success">
                        {posts.Taux_d_Endettement_Mensuel_totale} %
                      </h3>
                      <h3 class="text-success">Suffisant</h3>
                    </>
                  ) : (
                    <>
                      <h3 class="text-danger">
                        {posts.Taux_d_Endettement_Mensuel_totale} %
                        <h3 class="text-danger">Insuffisant</h3>

                      </h3>
                    </>
                  )}
                </div>
                </div>
              </table>
            </div>
            <input type="submit" value="Simuler" className="btt_simuler" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Simulateur_credit;
