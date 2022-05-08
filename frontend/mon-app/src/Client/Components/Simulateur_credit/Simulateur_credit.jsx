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
    const res = await axios.post('http://localhost:4000/api/simulateur-credit',valuesInput);
    setPosts(res.data);

    console.log(posts)
  };

  return (
    <div className="content_simul_credit" id="sim01">
      <div className="titre_page_liste_assurance">Simulez votre Crédit</div>
      <form
        id="form_credit_sayara"
        name="formSimulateurCredit"
        onSubmit={handleFormSubmit}
      >
        <div className="part2_recap">
          <div className="box_simulateur" style={{ width: "55em" }}>
            <div className="titre_box_simul">
              Choisissez le montant et la durée de remboursement souhaité
            </div>
            <div className="content_box_simul recap_simul">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tbody className="part1_recap">
                  <div className="bloc1_part1">
                    <div className="part1_div_h4">
                      <h4>Montant</h4>
                    </div>
                    <div class="form-outline">

                      
                      <input
                        style={{ width: "30em" }}
                        name="montant"
                        type="number"
                        id="formControlLg"
                        class="form-control form-control-lg"
                        placeholder="DT"
                        onChange={MyValuesInput}

                      />
                    </div>{" "}
                    
                  </div>
                  <div className="bloc1_part1">
                    <div className="part1_div_h4">
                      <h4>Montant</h4>
                    </div>{" "}
                    <div class="form-outline">
                      <select
                        style={{ width: "30em" }}
                        class="form-control form-control-lg"
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
                    </div>{" "}
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="part2_recap">
          <div className="box_simulateur" style={{ marginLeft: "30em" }}>
            <div className="titre_box_simul">Résumé de votre demande</div>
            <div className="content_box_simul recap_simul">
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
             
                             <tbody>
         

                  <tr>
                    <td>Montant à emprunter : {valuesInput.montant} DT  </td>
                    <td>
                      <span id="value_txtMnt" />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Durée choisie : {valuesInput.periode} ans </td>
                    <td>
                      <span id="value_cmbremb" />
                    </td>
                  </tr>
                  <tr>
                    <td>Montant de l'échéance : {posts} DT </td>
                    <td>
                      <span id="value_totalMontant" />
                    </td>
                  </tr>
                     

                </tbody>
           
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
