import React, { useEffect, useState } from "react";
import { Bar, Line,Chart,PolarArea } from "react-chartjs-2";
import axios from "axios"
import ChartDataLabels from 'chartjs-plugin-datalabels';


const Stat_agences = () => {
    const [stateAgences,setAgences] = useState()
    const [stateMontants,setMontants] = useState()


    useEffect(() => {
        axios.get("http://localhost:4000/api/compte/statistique/agences").then((data) => {
            setAgences(data.data.filteredArray_les_agences)
            setMontants(data.data.montants)    
        });
 
      }, []);

      

    const data = {
        labels: stateAgences,
        datasets: [{
          indexAxis: 'y',
    
          label: "le montant total des comptes bancaires selon l'agence",
          data:stateMontants,
          backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)'
          ],
          borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)'
          ],
          random:['a','a','a','a','a','a',],

          borderWidth: 1
        }],

        
      };
    
      // config 
      const config = {
        type: 'bar',
        data,
        
      };


      const  options = {
        tooltipTemplate: "<%= value %>",

        showTooltips: true,
      
        onAnimationComplete: function() {
          this.showTooltip(this.datasets[0].points, true);
        },
        tooltipEvents: [],

        indexAxis : "y",
        scales: {
          x: {
            display: false
          },
        }
   
      }
    
      
     
      
      const legend = {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#323130",
          fontSize: 10,
          
        }
      };
    

    return (<>
            <div style={{width:"40em",marginLeft:"250px"}}>

          <Bar data={data} legend={legend} options={options}   config={config}  />
</div>
</>  );
}
 
export default Stat_agences;