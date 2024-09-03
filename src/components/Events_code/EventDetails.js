import React from 'react';
import './Event.css';

const EventDetails = ({ event, onClose }) => {
  return (
    <div className="event-details">
      
      <h2>EVENT: {event.page.name}</h2>
      <p>DATE: {event.page.Date}</p>
      <p>VENUE: {event.page.Venue}</p>
      <p>TIMINGS: {event.page.Timings}</p>
      <p>OUTCOME: {event.page.Outcome}</p>
      <p>DESCRIPTION: {event.description}</p>
      <div>
        <h3>QR Code:</h3>
        {event.page.qr && event.page.qr.map((qrCode, index) => (
          <img className="imgqr" key={index} src={qrCode} alt={`QR code ${index + 1}`} />
        ))}
        {event.page.reg && (
          <div className='reg'>
            <h4>Register Here:</h4>
            <button className='reg-btn'><a href={event.page.reg} target="_blank" rel="noopener noreferrer">
              Register
            </a></button>
          </div>
        )}
      </div>
      <div>
        <h3>Event Pictures:</h3>
        {event.page.Pics.map((pic, index) => (
          <img className="imge" key={index} src={pic} alt={`event pic ${index + 1}`} />
        ))}
      </div>
      <button className="close-btn" onClick={onClose}>Close</button>
    </div>
  );
};

export default EventDetails;
