import React from 'react'
import { Line } from "react-chartjs-2";


const Statistique = ({stateDate,stateMontant,dateValues,setDateValues}) => {


    const data = {
        labels: stateDate,
        datasets: [
          {
            label: "Solde",
            data:stateMontant,
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