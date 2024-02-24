import React from 'react';
// import React, { useContext } from 'react';
//import { GlobalContext } from '../context/GlobalState';
//import {IndianRupee} from "../utils/FormattedCurrency";
import {Expenses} from "./Expenses";
import {Income} from "./Income";
import {Balance} from "./Balance";
// import {useState} from 'react';
// import Chart from "chart.js/auto";
// import { CategoryScale } from "chart.js";
// import PieChart from "./PieCharts";
//import { Data } from "./Data";
// Chart.register(CategoryScale);

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const IncomeExpenses = () => {
  // console.log(Data);
  // const [chartData, setChartData] = useState({Data});
  // setChartData(,[]);

  return (
    <div className="box middle">
      <div className='middle-upper-cards'>
        <Expenses />
        <Income />
        <Balance />
      </div>  
        {/* <PieChart chartData={chartData} />    */}
      <div className='middle-lower-big'>
          <Doughnut data={data} />
      </div>
    </div>
  )
}
