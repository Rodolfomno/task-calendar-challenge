import React from 'react';
import Calendar from "../components/Calendar";
import Task from '../components/Task';


export default function main() {
  return (
    <main>
      <section>
        <Task />
      </section>
      <Calendar />
    </main>
  );
}
