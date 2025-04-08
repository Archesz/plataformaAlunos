import React, { useState } from 'react'
import MenuLateral from '../components/MenuLateral/MenuLateral';
import Header from '../components/Header/Header'
import studentData from '../data/data.json';
import RedacaoStatsCard from '../components/RedacaoStatsCard/RedacaoStatsCard';
import '../styles/redacao.scss'
function Redacao() {

    const { student, mockExams, studyPlan, upcomingEvents } = studentData;
    const [menuExpanded, setMenuExpanded] = useState(false);


    return (
        <div className='redacao-page'>

            <MenuLateral onToggle={(expanded) => setMenuExpanded(expanded)} />
            <Header student={student} />

            <div className='redacao-container'>
                
                <RedacaoStatsCard
                    totalScore={880}
                    averageScore={680}
                    targetScore={1000}
                    lastUpdate="2025-04-15"
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


            </div>

        </div>
    )
}

export default Redacao