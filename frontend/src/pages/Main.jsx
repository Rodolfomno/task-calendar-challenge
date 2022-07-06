import React, { useContext } from 'react';
import Calendar from "../components/Calendar";
import SelectedCard from '../components/SelectedCard';
import Task from '../components/Task';
import AppContext from '../context/AppContext';



export default function Main() {
  const { selectedTask } = useContext(AppContext);

  return (
    <main>
      <section>
        <Task />
        { selectedTask.title && <SelectedCard /> }
      </section>
      <Calendar />
    </main>
  );
}
