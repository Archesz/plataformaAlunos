import React, { useState } from 'react';
import './PerformanceStatsCard.scss';
import { FaUniversity, FaGraduationCap, FaPercentage } from 'react-icons/fa';
import unicampData from '../../data/unicamp.json';
import uspData from '../../data/usp.json';

const PerformanceStatsCardWithFilter = ({ studentHighestScore }) => {
  // Estados
  const [universidade, setUniversidade] = useState('unicamp');
  const [curso, setCurso] = useState('');
  const [tipoCota, setTipoCota] = useState('Paais');
  const [percentualCota, setPercentualCota] = useState('0');
  
  // Dados das universidades
  const universitiesData = {
    unicamp: unicampData,
    usp: uspData
  };

  // Opções de filtro
  const tiposCota = ['Escola Pública', 'Escola Pública + Preto, Pardo ou Indígena'];
  const tipos = ['Paais', 'PPPI Paais']
  const percentuaisCota = ['0', '20', '40', '60'];

  // Obtém os cursos da universidade selecionada
  const currentUniversityData = universitiesData[universidade] || [];
  const cursos = currentUniversityData.map(item => item.Curso);

  // Define o primeiro curso como padrão se não houver seleção
  if (cursos.length > 0 && !curso) {
    setCurso(cursos[0]);
  }

  // Obtém a nota de corte baseada nos filtros
  const getRequiredScore = () => {
    if (!currentUniversityData.length || !curso || !tipoCota || !percentualCota) return 0;
    
    const cursoData = currentUniversityData.find(item => item.Curso === curso);
    if (!cursoData) return 0;
    
    // Acessa a nota de corte aninhada
    return cursoData[tipoCota]?.[percentualCota] || 0;
  };

  const requiredScore = getRequiredScore();
  const percentage = requiredScore > 0 ? Math.round((studentHighestScore / requiredScore) * 100) : 0;
  const isOnTarget = studentHighestScore >= requiredScore;

  return (
    <div className="performance-stats-card">
      <div className="card-header">
        <h3>Desempenho por Curso</h3>
        <p>Compare sua nota com os cortes das universidades</p>
      </div>

      <div className="filter-section">
        <div className="filter-group">
          <label htmlFor="universidade">
            <FaUniversity /> Universidade:
          </label>
          <select 
            id="universidade" 
            value={universidade} 
            onChange={(e) => {
              setUniversidade(e.target.value);
              setCurso(''); // Reseta o curso para forçar atualização
            }}
          >
            <option value="unicamp">UNICAMP</option>
            <option value="usp">USP</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="curso">
            <FaGraduationCap /> Curso:
          </label>
          <select 
            id="curso" 
            value={curso} 
            onChange={(e) => setCurso(e.target.value)}
            disabled={cursos.length === 0}
          >
            {cursos.map((cursoItem, index) => (
              <option key={index} value={cursoItem}>{cursoItem}</option>
            ))}
          </select>
        </div>

        <div className="filter-row">
          <div className="filter-group">
            <label htmlFor="tipoCota">
              <FaPercentage /> Tipo:
            </label>
            <select 
              id="tipoCota" 
              value={tipoCota} 
              onChange={(e) => setTipoCota(e.target.value)}
            >
              {tiposCota.map((tipo, index) => (
                <option key={index} value={tipos[index]}>{tipo}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="percentualCota">
              <FaPercentage /> Percentual:
            </label>
            <select 
              id="percentualCota" 
              value={percentualCota} 
              onChange={(e) => setPercentualCota(e.target.value)}
            >
              {percentuaisCota.map((percentual, index) => (
                <option key={index} value={percentual}>{percentual}%</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="score-comparison">
        <div className="score-box your-score">
          <div className="score-label">Sua nota</div>
          <div className="score-value">{studentHighestScore}</div>
          <div className="score-description">pontos</div>
        </div>
        
        <div className="vs-circle">vs</div>
        
        <div className="score-box required-score">
          <div className="score-label">Nota de Corte</div>
          <div className="score-value">{requiredScore}</div>
          <div className="score-description">pontos</div>
        </div>
      </div>
      
      <div className="progress-container">
        <div className="progress-info">
          <span>{percentage}% da nota de corte</span>
          <span>{isOnTarget ? 'Nota suficiente!' : 'Continue estudando!'}</span>
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
          <><i className="fas fa-check-circle"></i> Sua nota é suficiente para este curso!</>
        ) : (
          <><i className="fas fa-exclamation-circle"></i> Faltam {Math.round(requiredScore - studentHighestScore)} pontos para a nota de corte</>
        )}
      </div>
    </div>
  );
};

export default PerformanceStatsCardWithFilter;