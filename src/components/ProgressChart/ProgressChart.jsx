import React from 'react';
import { Bar } from 'react-chartjs-2';
import './ProgressChart.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProgressChart = ({ exams }) => {
  // Processar dados para o gráfico
  const chartData = {
    labels: exams.map(exam => exam.name),
    datasets: [
      {
        label: 'Sua Pontuação',
        data: exams.map(exam => exam.score),
        backgroundColor: '#D32F2F',
        borderRadius: 4,
      },
      {
        label: 'Pontuação Máxima',
        data: exams.map(exam => exam.maxScore),
        backgroundColor: '#212121',
        borderRadius: 4,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: 'Inter, sans-serif',
            size: 14
          },
          padding: 20,
          usePointStyle: true,
        }
      },
      tooltip: {
        backgroundColor: '#212121',
        titleFont: {
          family: 'Inter, sans-serif',
          size: 16
        },
        bodyFont: {
          family: 'Inter, sans-serif',
          size: 14
        },
        padding: 12,
        displayColors: true,
        usePointStyle: true,
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: 'Inter, sans-serif',
            size: 12
          }
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#e0e0e0',
          drawBorder: false
        },
        ticks: {
          font: {
            family: 'Inter, sans-serif',
            size: 12
          },
          padding: 10
        }
      }
    }
  };

  return (
    <div className="progress-chart">
      <div className="chart-header">
        <h3>Desempenho nos Simulados</h3>
        <div className="chart-legend">
          <span className="legend-item your-score">Sua Pontuação</span>
          <span className="legend-item max-score">Pontuação Máxima</span>
        </div>
      </div>
      <div className="chart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ProgressChart;