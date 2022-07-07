import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TaskButton from './TaskButton';
import axios from 'axios';
import { url } from '../utils/url';

function SelectedCard() {
  const {
    taskList,
    setTaskList,
    selectedTask,
    isEditingTask,
    setIsEditing,
    setStartDate,
    setEndDate,
    setTitle,
    setDescription,
    setSelectedTask
  } = useContext(AppContext);

  const {
    title,
    start,
    end,
    id,
    extendedProps: { description },
  } = selectedTask;

  const handleEdit = () => {
    console.log(selectedTask);
    setIsEditing(!isEditingTask);

    setDescription(description || '');
    setTitle(title);
    setStartDate(start);
    setEndDate(end);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${url}/${id}`);
      const updatedTaskList = taskList.filter((task) => task.id !== id);
      setTaskList(updatedTaskList);
      setSelectedTask({});
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="task-form">
      <div>
        <h4>
          Título da tarefa:
        </h4>
        <p>
          {title}
        </p>
        {description && (
          <>
            <h4>
              Descrição da tarefa:
            </h4>
            <p>
              {description}
            </p>
          </>
        )}
        <h4>
          Data de inicio:
        </h4>
        <p>
          {start.toLocaleString("pt-br")}
        </p>
        {end && (
          <>
            <h4>
              data de término:
            </h4>
            <p>
              {end.toLocaleString("pt-br")}
            </p>
          </>
        )}
      </div>
      <div className="buttons-form-conteiner">
        <TaskButton
          btnText="Editar tarefa"
          btnType="button"
          handleClick={ handleEdit }
        />
        <TaskButton
          btnText="Deletar tarefa"
          btnType="button"
          handleClick={ handleDelete }
        />
      </div>
    </div>
  );
}

export default SelectedCard;
