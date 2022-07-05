import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // a plugin!
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

export default function Calendar() {
  function handleClick(e) {
    console.log(e);
  }

  return (
    <div className="calendar-conteiner">
      <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        locales={ [ptBrLocale] }
        headerToolbar={
          {
          left: 'prev,today,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
        eventClick={ (e) => handleClick(e) }
      />
    </div>
  );
}   