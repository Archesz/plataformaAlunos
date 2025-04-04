import React from 'react';
import './ExamsTable.scss';

const ExamsTable = ({ exams }) => {
  const calculatePercentage = (score, maxScore) => {
    return Math.round((score / maxScore) * 100);
  };

  const getPerformanceColor = (percentage) => {
    if (percentage >= 80) return '#4CAF50'; // Verde
    if (percentage >= 60) return '#FFC107'; // Amarelo
    return '#F44336'; // Vermelho
  };

  return (
    <div className="exams-table">
      <h3 className="table-title">Últimos Simulados</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Simulado</th>
              <th>Data</th>
              <th>Pontuação</th>
              <th>Desempenho</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, index) => {
              const percentage = calculatePercentage(exam.score, exam.maxScore);
              return (
                <tr key={index}>
                  <td className="exam-name">{exam.name}</td>
                  <td className="exam-date">
                    {new Date(exam.date).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="exam-score">
                    {exam.score}/{exam.maxScore}
                  </td>
                  <td className="exam-performance">
                    <div className="performance-bar">
                      <div
                        className="performance-fill"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: getPerformanceColor(percentage)
                        }}
                      ></div>
                      <span className="percentage-text">{percentage}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamsTable;