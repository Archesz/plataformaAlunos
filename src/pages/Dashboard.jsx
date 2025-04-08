import React, { useState } from 'react';
import '../styles/dashboard.scss';
import studentData from '../data/data.json';
import MenuLateral from '../components/MenuLateral/MenuLateral';
import StatsCard from '../components/StatsCard/StatsCard';
import ProgressChart from '../components/ProgressChart/ProgressChart';
import SubjectProgress from '../components/SubjectProgress/SubjectProgress';
import ExamsTable from '../components/ExamsTable/ExamsTable';
import EventsList from '../components/EventsList/EventList';
import PerformanceStatsCard from "../components/PerformanceStatsCard/PerformanceStatsCard"
import Header from '../components/Header/Header'

const Dashboard = () => {
  const { student, mockExams, studyPlan, upcomingEvents } = studentData;
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <div className={`dashboard-container ${menuExpanded ? 'menu-expanded' : ''}`}>
      <MenuLateral onToggle={(expanded) => setMenuExpanded(expanded)} />
      
      <div className="dashboard-with-menu">
        <div className="dashboard">

          <Header student={student}/>

          <div className="dashboardContent">
            <div className="leftColumn">
              <SubjectProgress subjects={studyPlan.subjects} />

              <div className='row'>
                <PerformanceStatsCard 
                  studentHighestScore={63} 
                  requiredScore={59} 
                  examName="Unicamp" 
                  courseName="Ciência da Computação" 
                  metric="Melhor nota"
                />
              </div>
              
              <div className="chartContainer">
                <ProgressChart exams={mockExams} />
              </div>
            </div>
            
            <div className="rightColumn">          
              <ExamsTable exams={mockExams} />

              <EventsList events={upcomingEvents}/>

            </div>
          </div>
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