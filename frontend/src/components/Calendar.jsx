import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // a plugin!
import ptBrLocale from '@fullcalendar/core/locales/pt-br';


export default function Calendar() {
  const { taskList, setSelectedTask } = useContext(AppContext);
  const handleClick = (e) => {
    const id = Number(e.event.id);
    const selectedTask = taskList.find((task) => task.id === id);
    
    setSelectedTask(selectedTask);
  };

  return (
    <div className="calendar-conteiner">
      <FullCalendar
        events={ taskList }
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        locales={ [ptBrLocale] }
        headerToolbar={
          {
          left: 'prev,today,next',
          center: 'title',
          right: 'timeGridDay,timeGridWeek,dayGridMonth'
          }}
        eventClick={ (e) => handleClick(e) }
      />
    </div>
  );
}   