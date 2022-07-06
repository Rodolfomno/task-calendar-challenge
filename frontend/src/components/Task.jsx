import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TaskButton from './TaskButton';
import DateInput from './DateInput';
import postCreateTask from '../utils/postCreateTask';
import { url } from '../utils/url';


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
    isBtnDisabled
  } = useContext(AppContext);

  const createTask = async () => {
    const newTask = { title, description, startDate, endDate }
    const response = await postCreateTask(url, newTask)
    const newTaskList = [newTask, response.result];
    setTaskList(newTaskList);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask()

    if(isEditing) {
      setIsEditing(false);
    }

    setTitle('')
    setDescription('')
    setStartDate(new Date());
    setEndDate(new Date());
  }

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
          Descrição:
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
            text="Início"
            displayDate={ startDate }
            handleChange={ setStartDate }
          />
          <DateInput
            text="Término"
            displayDate={ endDate }
            handleChange={ setEndDate }
          />
        </div>
      <div>
        {
          !isEditing ? 
            (<TaskButton
              className="form-button"
              isDisabled={ isBtnDisabled }
              btnText="Adicionar Task"
              btnType="submit"
            />
            ) : (
            <TaskButton
              className="form-button"
              isDisabled={ isBtnDisabled }
              btnText="Editar Task"
              btnType="submit"
            />)
        }
      </div>
    </form>
  );
}   