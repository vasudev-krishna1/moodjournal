import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './EntriesChart.css'; // Import CSS for EntriesChart

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EntriesChart = ({ data }) => {
  // Extract labels and data from props
  const labels = data.map(entry => entry.date);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Mood Entries',
        data: data.map(entry => entry.moodScore || 0), // Assuming moodScore is a numerical value representing mood intensity
        backgroundColor: '#6F4E37', // Coffee brown
        borderColor: '#4A3C2F',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Mood Entries Over Time',
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default EntriesChart;