import React, {useState } from "react";
import axios from "axios";
const FilterData = ({posts,setPosts,id}) => {
    const [valuesInput, setValues] = useState({});

  const MyValuesInput = (event) => {
    let res = valuesInput;
    res[event.target.name] = event.target.value;
    setValues(res);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    
    if (valuesInput.date_deb === "all" || valuesInput.date_fin==="all" ) {
        axios.get("http://localhost:4000/api/virement/recu/"+id).then((res) => {
          setPosts(res.data);
        });
      }
      else{
       const  response = await axios.post(
            "http://localhost:4000/api/virement/filter/recu/"+id,valuesInput)           
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
     <option value="1">Janvier</option>
     <option value="2">Février</option>
     <option value="3">Mars</option>
     <option value="4">avril</option>
     <option value="5">Mai</option>
     <option value="6">Juin</option>
     <option value="7">Juillet</option>
     <option value="8">Août</option>
     <option value="9">Septembre</option>
     <option value="10">Octobre</option>
     <option value="11">Novembre </option>
     <option value="12">Décembre</option>
     
   </select>
   <select class="form-select_date_fin" aria-label="Default select example" name="date_fin"  onChange={MyValuesInput}>
     <option value="all">Date de Fin</option>
     <option value="1">Janvier</option>
     <option value="2">Février</option>
     <option value="3">Mars</option>
     <option value="4">avril</option>
     <option value="5">Mai</option>
     <option value="6">Juin</option>
     <option value="7">Juillet</option>
     <option value="8">Août</option>
     <option value="9">Septembre</option>
     <option value="10">Octobre</option>
     <option value="11">Novembre </option>
     <option value="12">Décembre</option>
     
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