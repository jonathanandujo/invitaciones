// import './App.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import eventData from '../scrtdb.json'; // Import JSON directly
import Countdown from './components/countdown';
import AudioPlayer from './components/audioPlayer';
import Confirmation from './components/confirmation';
import EventText from './components/eventText';

function Event() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = eventData.events.find(e => e.id === id); // Compare as a string
    setEvent(foundEvent || null);
  }, [id]);

  if (!event) {
    return <h1>Event {id} not found</h1>;
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
      <div className="flex-grid">
        <div className="grid-item">
          <h1>Hi, welcome to the event {event.id}</h1>
          <h2>Song: {event.song.name}</h2>
          <AudioPlayer song={event.song} />
          {JSON.stringify(event)}
          <Countdown weddingDate={event.date} countdownTemplateId={event.countdownTemplateId}/>
          <EventText confirmation={event.eventText} />
          <Confirmation confirmation={event.people} />
        </div>
      </div>
    </div>
  );
}

export default Event;
