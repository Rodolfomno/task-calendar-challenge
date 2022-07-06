import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TaskButton from './TaskButton';
import DateInput from './DateInput';

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
    setEndDate
  } = useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();
    if(isEditing) {
      setIsEditing(false);
    }
  }

  const isBtnDisabled = true;

  return (
    <form 
      className="task-form"
      onSubmit={ handleSubmit }  
    >
      <div>
        <label htmlFor="title">
          Titulo:
          <input
            value={ title }
            onChange={ (e) => setTitle(e.target.value) }
            id="title"
            type="text"
            placeholder="Titulo"
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