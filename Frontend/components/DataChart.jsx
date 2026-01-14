import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DataChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map(d => d.temperature),
        borderColor: 'red',
      },
      {
        label: 'pH',
        data: data.map(d => d.ph),
        borderColor: 'blue',
      },
      {
        label: 'Turbidity (NTU)',
        data: data.map(d => d.turbidity),
        borderColor: 'green',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default DataChart;