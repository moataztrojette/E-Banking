import React, { useEffect, useState } from "react";
import axios from "axios";
const FilterData = ({posts,setPosts}) => {
    const [valuesInput, setValues] = useState({});

  const MyValuesInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    
    if (valuesInput.date_deb === "all" || valuesInput.date_fin==="all" ) {
        axios.get("http://localhost:4000/api/virement/envoyer").then((res) => {
          setPosts(res.data);
        });
      }
      else{
       const  response = await axios.post(
            "http://localhost:4000/api/virement/filter/envoyer",valuesInput)           
            setPosts(response.data);
      }
     
  
  };

    return ( 
        
        <div className='filter_historique'>
 
    <form
              className="form_virement"
              onSubmit={handleFormSubmit}
            >
   <select class="form-select_date_deb" aria-label="Default select example" name="date_deb"  onChange={MyValuesInput} >
     <option value="all">Date de début</option>
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
     <option value="6">6</option>
     <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="10">10</option>
     <option value="11">11</option>
     <option value="12">12</option>
     
   </select>
   <select class="form-select_date_fin" aria-label="Default select example" name="date_fin"  onChange={MyValuesInput}>
     <option value="all">Date de Fin</option>
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
     <option value="6">6</option>
     <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="10">10</option>
     <option value="11">11</option>
     <option value="12">12</option>
     
   </select>
   <div class="input-group">
    
     <button type="submit" class="btn btn-primary" id="btn_serche" >
       <i class="fas fa-search"></i>
     </button>
   </div>
   </form>
  
  </div> );
}
 
export default FilterData;