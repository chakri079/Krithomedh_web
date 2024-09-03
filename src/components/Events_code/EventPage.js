// EventsPage.js
import React, { useState } from 'react';
import events from './events';
import EventsTimeline from './EventsTimeLine';
import EventDetails from './EventDetails';
import './EventDetails.css';

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="events-page">
      {selectedEvent ? (
        <EventDetails event={selectedEvent} onClose={handleCloseDetails} />
      ) : (
        <EventsTimeline events={events.upcoming.concat(...events.past.e2024, ...events.past.e2023)} onEventClick={handleEventClick} />
      )}
    </div>
  );
};

export default EventsPage;
