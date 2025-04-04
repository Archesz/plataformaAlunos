import React from 'react';
import './EventList.scss';

const EventsList = ({ events }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString('pt-BR', { month: 'short' })
    };
  };

  return (
    <div className="events-list">
      <h3 className="events-title">Próximos Eventos</h3>
      
      <div className="events-container">
        {events.map((event, index) => {
          const formattedDate = formatDate(event.date);
          return (
            <div key={index} className="event-item">
              <div className="event-date">
                <span className="event-day">{formattedDate.day}</span>
                <span className="event-month">{formattedDate.month}</span>
              </div>
              
              <div className="event-details">
                <h4 className="event-title">{event.title}</h4>
                <div className="event-info">
                  <span className="event-time">
                    <i className="far fa-clock"></i> {event.time}
                  </span>
                  {event.teacher && (
                    <span className="event-teacher">
                      <i className="fas fa-chalkboard-teacher"></i> {event.teacher}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsList;