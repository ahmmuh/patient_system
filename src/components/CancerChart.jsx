import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import NoDataToShow from "./NoDataToShow";
function CancerChart({ patiantHalsaTillStand }) {
  return (
    <div>
      {patiantHalsaTillStand ? (
        <Bar
          data={{
            labels: patiantHalsaTillStand.map((data) => data.datum),
            datasets: [
              {
                label: "Diagnosdatum och ECOG",
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: ["rgb(153, 102, 255)", "rgb(201, 203, 207)"],
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: patiantHalsaTillStand.map((data) => data.ecog),
              },
            ],
          }}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
          }}
        />
      ) : (
        <NoDataToShow />
      )}
    </div>
  );
}

export default CancerChart;
