import React from 'react';
import './RedacaoStatsCard.scss';

const RedacaoStatsCard = ({ 
  totalScore, 
  averageScore,
  criteria,
  lastUpdate,
  targetScore = 1000
}) => {
  const percentage = Math.round((totalScore / targetScore) * 100);
  const isAboveAverage = totalScore >= averageScore;

  return (
    <div className="redacao-card">
      <div className="card-header">
        <h3>Desempenho em Redação</h3>
        <p>Última avaliação: {new Date(lastUpdate).toLocaleDateString('pt-BR')}</p>
      </div>

      <div className="main-score">
        <div className="score-display">
          <span className="score-label">Sua nota</span>
          <span className="score-value">{totalScore}</span>
          <span className="score-max">de {targetScore} pontos</span>
        </div>

        <div className="comparison">
          <div className={`average ${isAboveAverage ? 'above' : 'below'}`}>
            <i className={`fas ${isAboveAverage ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
            <span>Média geral: {averageScore}</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="criteria-section">
        <h4>Análise por Competência</h4>
        <div className="criteria-grid">
          {criteria.map((criterion, index) => (
            <div key={index} className="criterion-item">
              <div className="criterion-header">
                <span className="criterion-name">{criterion.name}</span>
                <span className="criterion-score">{criterion.score}/200</span>
              </div>
              <div className="criterion-bar">
                <div 
                  className="criterion-fill" 
                  style={{ width: `${(criterion.score / 200) * 100}%` }}
                ></div>
              </div>
              <div className="criterion-feedback">
                <i className="fas fa-comment-alt"></i>
                <span>{criterion.feedback}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default RedacaoStatsCard;