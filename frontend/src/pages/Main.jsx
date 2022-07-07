import React, { useContext } from 'react';
import Calendar from "../components/Calendar";
import Search from '../components/Search';
import SelectedCard from '../components/SelectedCard';
import Task from '../components/Task';
import AppContext from '../context/AppContext';



export default function Main() {
  const { selectedTask } = useContext(AppContext);

  return (
    <>
      <main>
      <section className="task-conteiner">
      <Search />
        <Task />
        {selectedTask.title && <SelectedCard />}
      </section>
      <Calendar />
      </main>
    </>
  );
}
