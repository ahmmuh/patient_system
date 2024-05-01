import React from 'react'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2'
import {CategoryScale} from 'chart.js'; 
// Chart.plugins.register(CategoryScale);
function CancerChart({ecogOchdata}) {

   
    // const data = 
  return (
    <div>
        <Bar 
        data={{
            labels: ecogOchdata.map((data) => data.datum),
        datasets: [
            {
                label: 'Diagnosdatum och högsta ECOG',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: ecogOchdata.map((data) => data.ecog),
            }
        ]
        }}
        width={100}
        height={50}
        options={{
            maintainAspectRatio:false
        }}
        />
    </div>
  )
}

export default CancerChart