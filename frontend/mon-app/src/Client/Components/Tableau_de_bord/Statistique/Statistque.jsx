import React, { useState,useEffect } from 'react'
import { Bar ,Line,Doughnut } from 'react-chartjs-2';
import dateformat from 'dateformat'

import axios from 'axios'

const Statistique = () => {
    return (     <div className="col-md-12 mb-lg-0 mb-4">
    <div className="row mt-4">
      <div>
      <Line
    data={{
    labels: [65, 59, 80, 81, 56, 55, 40],
    datasets: [{
        label: 'Prix article  (DT)',
        data: [65, 59, 80, 81, 56, 55, 40] ,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]    

    }}
    height={300}
    width= {600}
    options={{ maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks:{
                    callback : (val)=>{
                        
                        return val.toString().split(".").length > 1 ? null : parseInt(val)
                    }
                }
            }
        }
     }}
     rootProps={{ 'data-testid': '1' }}


    />  
      </div>
    </div>
  </div>  );
}
 
export default Statistique;