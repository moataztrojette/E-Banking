import React, { useState,useEffect } from 'react'
import { Line } from "react-chartjs-2";
import dateformat from 'dateformat'
import axios from 'axios'

const Statistique = () => {

    const [stateDate,setDate] = useState([])
    const [stateMontant,setMontant] = useState([])  
    const [dateValues,setDateValues] = useState([]);  
    
    useEffect(()=>{
       
        let  date = [];
        let montant = [];
      


        axios.get("http://localhost:4000/api/historique/find").then((fact)=>{

            for(const dataObj of fact.data){

             
                date.push(dateformat(dataObj.date , "mmmm"))
                montant.push(dataObj.montant)
               
            }
        
            
       
          let uniqueArray = {}
          date.forEach(function(item, pos) {
              if(date.indexOf(item) == pos){
               uniqueArray[item] = {shown:false,pos} ;
              }
          });
          setDateValues(uniqueArray)
          setDate(date)
          setMontant(montant)
        
        })
    },[])
  
  

    const data = {
        labels: stateDate,
        datasets: [
          {
            label: "Solde",
            data: stateMontant,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            tension: 0.32

          },
          
        ]
      };
      
      const legend = {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#323130",
          fontSize: 14,
          
        }
      };
      
      const options = {
        title: {
          display: true,
          text: "Chart Title",
        
        },
        scales: {
          xAxis: {
                ticks:{
                    autoSkip:false,
                    callback : (label, index, labels)=>{ 
                    if(dateValues[stateDate[label]].pos === label){
                      return stateDate[label]; 
                    }else{
                      return ""
                    }
                        
                    },
                    
                }

            //display: false
          },
     
          y: {
            display: false
          },
        }
      };
    


    return (     <div className="col-md-12 mb-lg-0 mb-4">
    <div className="row mt-4">
      <div>
      <Line data={data} legend={legend} options={options} />

      </div>
    </div>
  </div>  );
}
 
export default Statistique;