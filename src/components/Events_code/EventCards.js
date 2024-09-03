// EventCard.js
import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={() => onClick(event)}>
      <img src={event.image} alt={event.name} className="event-poster" />
      <div className="event-details">
        <h3>{event.name}</h3>
        <p>{event.Date}</p>
      </div>
    </div>
  );
};

export default EventCard;
