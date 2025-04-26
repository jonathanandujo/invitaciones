import './App.css';
import { useState, useEffect } from "react";
import eventData from './scrtdb.json'; // Import JSON directly
import Countdown from './components/countdown';
import AudioPlayer from './components/audioPlayer';
import Confirmation from './components/confirmation';
import EventText from './components/eventText';
import Main from './components/main';

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

  /* Componentes
  Nombres - persona 1 persona 2
  Player - canción, nuestra canción
  Counter - fecha
  Fotos - principal, album
  mapa - url / iglesia - recepción
  Confirmación - 
  Texto html - invitacion
  texto padres / slider
  texto 2 html
  Programa - itinerario
  Codigo vestimenta - opcional
  Reservado para adultos - opcional
  Niños bienvenidos
  Album -
  Hashtag - opcional
  Confirmación - whatsapp link - ja
   */

  return (
    <div className="App">
      <Main content={event} />
      <AudioPlayer song={event.song} />
      <Countdown weddingDate={event.date} countdownTemplateId={event.countdownTemplateId} />
      <EventText content={event.weddingText} />
      <Confirmation confirmation={event.people} />
      <hr />
      <pre>
        {JSON.stringify(event, null, 4)}
      </pre>
    </div>
  );
}

export default App;
