import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TaskButton from './TaskButton';

function SelectedCard() {
  const {
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
    extendedProps: { description },
  } = selectedTask;

  const handleEditTask = () => {
    console.log(selectedTask);
    setIsEditing(!isEditingTask);

    setTitle(title);
    setDescription(description || '');
    setStartDate(start);
    setEndDate(end);
    setSelectedTask({});
  };

  return (
    <div>
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
      <div>
        <TaskButton
          btnText="Editar tarefa"
          btnType="button"
          handleClick={ handleEditTask }
        />
        <TaskButton
          btnText="Deletar tarefa"
          btnType="button"
        />
      </div>
    </div>
  );
}

export default SelectedCard;
