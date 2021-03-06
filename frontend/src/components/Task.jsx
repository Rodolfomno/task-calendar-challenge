import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import TaskButton from './TaskButton';
import DateInput from './DateInput';
import postCreateTask from '../utils/postCreateTask';
import { url } from '../utils/url';
import updateTaskApi from '../utils/updateTaskApi';


export default function Task() {
  const {
    isEditing,
    setIsEditing,
    description,
    setDescription,
    title,
    setTitle,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    setTaskList,
    selectedTask,
    setSelectedTask
  } = useContext(AppContext);

  const [isDisabled, setIsDisabled] = useState();

  useEffect(() => {
    const isTitleValid = title && title.length > 4;
    if ( !isTitleValid) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false);
    }
  }, [title]);

  // function to create a task
  const createTask = async () => {
    const newTask = { title, description, startDate, endDate }
    
    try {
      const response = await postCreateTask(url, newTask)
      console.log(response);
      const newTaskList = [newTask, response.resultData];
      setTaskList(newTaskList);
    } catch (error) {
      console.log(error);
    }

  }

  // function that handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(isEditing) {
      await updateSelectedTask()
      setIsEditing(false);
    } else {
      await createTask()
    }

    setTitle('')
    setDescription('')
    setStartDate(new Date());
    setEndDate(new Date());
  }

  const updateSelectedTask = async () => {
    const { id } = selectedTask;
    const updatedTask = {
      id,
      title,
    };

    const response = await updateTaskApi(`${url}`, updatedTask);
    
    setTaskList(response.data);
    setSelectedTask({});
    setIsEditing(false);
  };


  return (
    <form 
      className="task-form"
      onSubmit={ handleSubmit }  
    >
      <div>
        <label htmlFor="title">
          Tarefa:
          <input
            value={ title }
            onChange={ (e) => setTitle(e.target.value) }
            id="title"
            type="text"
            placeholder="Tarefa"
          />
        </label>
      </div>
      <div>
        <label htmlFor="descricao">
          Descri????o:
          <textarea
            value={ description }
            onChange={ (e) => setDescription(e.target.value) }
            id="descricao"
            type="text"
            rows="4"
            placeholder="Detalhe sua tarefa!"
          />
        </label>
      </div>
      <div >
          <DateInput
            text="In??cio"
            displayDate={ startDate }
            handleChange={ setStartDate }
          />
          <DateInput
            text="T??rmino"
            displayDate={ endDate }
            handleChange={ setEndDate }
          />
        </div>
      <div>
        {
          !isEditing ? 
            (<TaskButton
              className="form-button"
              isDisabled={ isDisabled }
              btnText="Adicionar Task"
              btnType="submit"
            />
            ) : (
            <TaskButton
              className="form-button"
              isDisabled={ isDisabled }
              btnText="Editar Task"
              btnType="submit"
            />)
        }
      </div>
    </form>
  );
}   