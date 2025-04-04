import React, { useState } from 'react';
import './SubjectProgress.scss';

const SubjectProgress = ({ subjects }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const subjectsPerPage = 2;
  const totalPages = Math.ceil(subjects.length / subjectsPerPage);

  const paginatedSubjects = subjects.slice(
    currentPage * subjectsPerPage,
    (currentPage + 1) * subjectsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return (
    <div className="subject-progress">
      <div className="header">
        <h3>Progresso por Matéria</h3>
        <div className="pagination">
          <button 
            onClick={handlePrevPage} 
            disabled={currentPage === 0}
            className="pagination-button"
          >
            &lt;
          </button>
          <span>
            Página {currentPage + 1} de {totalPages}
          </span>
          <button 
            onClick={handleNextPage} 
            disabled={currentPage === totalPages - 1}
            className="pagination-button"
          >
            &gt;
          </button>
        </div>
      </div>
      
      <div className="subjects-container">
        {paginatedSubjects.map((subject, index) => (
          <div key={index} className="subject-item">
            <div className="subject-header">
              <h4 className="subject-name">{subject.name}</h4>
              <span className="subject-percentage">{subject.completed}%</span>
            </div>
            
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${subject.completed}%` }}
              ></div>
            </div>
            
            <div className="topics-container">
              {subject.topics.map((topic, i) => (
                <div 
                  key={i} 
                  className={`topic-item ${topic.completed ? 'completed' : ''}`}
                >
                  <span className="topic-status">
                    {topic.completed ? '✓' : '•'}
                  </span>
                  <span className="topic-name">{topic.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectProgress;