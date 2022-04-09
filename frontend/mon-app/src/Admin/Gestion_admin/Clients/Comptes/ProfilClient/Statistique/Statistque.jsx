import React from 'react'
import { Line } from "react-chartjs-2";


const Statistique = (props) => {

    const data = {
        labels: props.stateDate,
        datasets: [
          {
            label: "Solde",
            data: props.stateMontant,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
           
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
                      let uniqueArray = props.stateDate.filter(function(item, pos) {
                        return props.stateDate.indexOf(item) == pos;
                    });
                    let na = uniqueArray.map(v=>v === uniqueArray[index] ? v : null  );
                    console.log(na);
                    return na[index] || null;     
                    }
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