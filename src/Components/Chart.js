import React from 'react';
import { Bar } from "react-chartjs-2";
import Tada from 'react-reveal/Tada';
function Chart() {
 return (
<Tada>
  <div>
   <Bar
   data={{
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
            label: 'Shop Flowers',
            data: [5, 6, 7, 5, 8, 10, 14],
            backgroundColor: [
                'red',
                'blue',
                'green',
                'yellow',
                'pink',
                'orange',
                "perple"
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                "rgba(240, 168, 45, 1)"
            ],
            borderWidth: 2
            },
              {
             label: "Decoration",
             data: [30, 20, 54 ,67, 39, 80, 100],
             backgroundColor: [
                 
                "#120896",
                "#2E0014",
                "#7AE7C7", 
                "#E5D1D0",
                "#09814A",
                "#B2B1CF",
                "#0B3948",  
            ],
             borderColor: "#DC0073",
             borderWidth: 2
            },
            {
             label: "Photos",
             data: [10, 25, 30 ,60, 45, 75, 90],
             backgroundColor: [
                 "#D1FFD7",
                 "#41337A",
                 "#6EA4BF",
                 "#E5D1D0",
                 "#331E36",
                 "#C6E0FF",
                 "#CE5374",
             ],
             borderColor: "black",
             borderWidth: 2
            }
           
           
           ]
          
   }}
   height={400}
   width={300}
   options={
    {
     maintainAspectRatio: false,
     scales: {
      yAxes: [
       {
        ticks: {
         beginAtZero: true
        }
       }
      ]
     }
    }
   }
   />
  </div>
  </Tada>
 )
}

export default Chart
