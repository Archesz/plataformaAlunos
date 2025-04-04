import React from 'react';
import './PerformanceStatsCard.scss';

const PerformanceStatsCard = ({ 
  studentHighestScore, 
  requiredScore, 
  examName,
  courseName
}) => {
  const percentage = Math.round((studentHighestScore / requiredScore) * 100);
  const isOnTarget = studentHighestScore >= requiredScore;

  return (
    <div className="performance-stats-card">
      <div className="card-header">
        <h3>Desempenho para {courseName}</h3>
        <p>{examName}</p>
      </div>
      
      <div className="score-comparison">
        <div className="score-box your-score">
          <div className="score-label">Seu melhor</div>
          <div className="score-value">{studentHighestScore}</div>
          <div className="score-description">acertos</div>
        </div>
        
        <div className="vs-circle">vs</div>
        
        <div className="score-box required-score">
          <div className="score-label">Necessário</div>
          <div className="score-value">{requiredScore}</div>
          <div className="score-description">acertos</div>
        </div>
      </div>
      
      <div className="progress-container">
        <div className="progress-info">
          <span>{percentage}% da meta</span>
          <span>{isOnTarget ? 'Meta atingida!' : 'Continue estudando!'}</span>
        </div>
        <div className="progress-bar">
          <div 
            className={`progress-fill ${isOnTarget ? 'target-achieved' : ''}`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          ></div>
        </div>
      </div>
      
      <div className={`status-message ${isOnTarget ? 'success' : 'warning'}`}>
        {isOnTarget ? (
          <><i className="fas fa-check-circle"></i> Você está dentro da média do curso!</>
        ) : (
          <><i className="fas fa-exclamation-circle"></i> Faltam {requiredScore - studentHighestScore} acertos para a média</>
        )}
      </div>
    </div>
  );
};

export default PerformanceStatsCard;