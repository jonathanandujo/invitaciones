import { useState, useEffect } from "react";
import eventData from './scrtdb.json'; // Import JSON directly
import Countdown from './components/countdown';
import AudioPlayer from './components/audioPlayer';
import Confirmation from './components/confirmation';
// import EventText from './components/eventText';

function App() {
  const [event, setEvent] = useState(null);
  const [id, setId] = useState(null); // Create a new state variable for id

  useEffect(() => {
    const fullUrl = window.location.pathname;
    const cleanedId = fullUrl?.startsWith("/") ? fullUrl.slice(1) : null;
    setId(cleanedId);
  }, []);

  useEffect(() => {
    // Find the event using the cleaned id
    const foundEvent = eventData.events.find(e => e.id === id);
    setEvent(foundEvent || null);
  }, [id]);

  if (!event) {
    return <h1>Event {id} not found.</h1>;
  }

  return (
    <div className="App">
      <div className="flex-grid">
        <div className="grid-item">
          <h1>Hi, welcome to the event {event.id}</h1>
          <h2>Song: {event.song.name}</h2>
          <AudioPlayer song={event.song} />
          {JSON.stringify(event)}
          <Countdown weddingDate={event.date} countdownTemplateId={event.countdownTemplateId} />
          {/* <EventText confirmation={event.eventText} /> */}
          <Confirmation confirmation={event.people} />
        </div>
      </div>
    </div>
  );
}

export default App;
