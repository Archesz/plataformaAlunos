import React from 'react';
import '../styles/dashboard.scss';
import studentData from '../data/data.json';
import Header from '../components/Header/Header';
import StatsCard from '../components/StatsCard/StatsCard';
import ProgressChart from '../components/ProgressChart/ProgressChart';
import SubjectProgress from '../components/SubjectProgress/SubjectProgress';
import ExamsTable from '../components/ExamsTable/ExamsTable';
import EventsList from '../components/EventsList/EventList';
import PerformanceStatsCard from "../components/PerformanceStatsCard/PerformanceStatsCard"
import RedacaoStatsCard from '../components/RedacaoStatsCard/RedacaoStatsCard';

const Dashboard = () => {
  const { student, mockExams, studyPlan, upcomingEvents } = studentData;

  return (
    <div className="dashboard">
      <Header student={student} />
      
      <div className="dashboardContent">
        <div className="leftColumn">
          <StatsCard 
            title="Média Geral" 
            value={calculateAverageScore(mockExams)} 
            maxValue={1000} 
            unit="pontos" 
          />
          
          <StatsCard 
            title="Progresso no Plano de Estudos" 
            value={studyPlan.progress} 
            maxValue={100} 
            unit="%" 
          />

          <PerformanceStatsCard 
            studentHighestScore={72} 
            requiredScore={80} 
            examName="Unicamp" 
            courseName="Engenharia" 
          />
          
          <div className="chartContainer">
            <ProgressChart exams={mockExams} />
          </div>
        </div>
        
        <div className="rightColumn">
          <SubjectProgress subjects={studyPlan.subjects} />
          
          <RedacaoStatsCard 
            totalScore={880}
            averageScore={680}
            targetScore={1000}
            lastUpdate="2023-11-15"
            criteria={[
              {
                name: "Domínio da Norma Culta",
                score: 180,
                feedback: "Ótimo domínio, poucos desvios"
              },
              {
                name: "Compreensão da Proposta",
                score: 200,
                feedback: "Excelente abordagem do tema"
              },
              {
                name: "Argumentação",
                score: 180,
                feedback: "Bons argumentos, poderia aprofundar mais"
              },
              {
                name: "Coesão",
                score: 160,
                feedback: "Algumas falhas na ligação entre ideias"
              },
              {
                name: "Proposta de Intervenção",
                score: 160,
                feedback: "Solução proposta precisa ser mais detalhada"
              }
            ]}
          />

          <ExamsTable exams={mockExams} />
          
          <EventsList events={upcomingEvents} />
        </div>
      </div>
    </div>
  );
};

// Função auxiliar para calcular média
const calculateAverageScore = (exams) => {
  if (exams.length === 0) return 0;
  const total = exams.reduce((sum, exam) => sum + exam.score, 0);
  return Math.round(total / exams.length);
};

export default Dashboard;