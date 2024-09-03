// EventsTimeline.js
import React from 'react';
import EventCard from './EventsCards';


const EventsTimeline = ({ events, onEventClick }) => {
  return (
    <div className="events-timeline">
      {events.map(event => (
        <EventCard key={event.eventId} event={event} onClick={onEventClick} />
      ))}
    </div>
  );
};

export default EventsTimeline;
