import React from 'react';
import './StatsCard.scss';

const StatsCard = ({ title, value, maxValue, unit, icon }) => {
  const percentage = Math.round((value / maxValue) * 100);
  
  return (
    <div className="stats-card">
      {icon && <div className="stats-card-icon">{icon}</div>}
      <div className="stats-card-content">
        <h3 className="stats-card-title">{title}</h3>
        <div className="stats-card-value">
          {value} <span className="stats-card-unit">{unit}</span>
        </div>
        <div className="stats-card-progress">
          <div 
            className="stats-card-progress-bar" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="stats-card-percentage">{percentage}%</div>
      </div>
    </div>
  );
};

export default StatsCard;