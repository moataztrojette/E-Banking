import React, { useEffect, useState } from "react";
import { PolarArea,Doughnut } from "react-chartjs-2";
import axios from "axios"
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const Stat_nb_compte_selon_agence = () => {
  
    const [stateData, setData] = useState({});

  
  useEffect(()=> {
    const fetchData = () =>  {
      fetch('http://localhost:4000/api/compte/statistique/agences/nb-compte').then((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        const label = [];
        const data = [];
        for(var i of res.filteredArray_les_agences) {
           
            label.push(i);
          
        }
        for(var i of res.nbCompte) {
           
            data.push(i)          
        }

        setData(
          {
            datasets: [{
                data:data,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)',
                    'rgb(54, 162, 235)'
                  ]
            },
          ],
          labels:label, 
          plugins: [ChartDataLabels]
     
        }
        
        
        )

      }).catch(e => {
        console.log("error", e)
      }) 
    }
  fetchData();
  }, [])
  
      

   
    
      
     
      
  
    

    return (<>
        <div style={{width:"20em",marginLeft:"80px"}}>
        <p style={{textAlign:"center"}}>Le nombre de comptes bancaires par l'agence</p>

      <Doughnut data={stateData}  />
      </div>

</>  );
}
 
export default Stat_nb_compte_selon_agence;