import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';
import getAllTasks from '../utils/getAllTasks';
import { url } from '../utils/url';


export default function AppProvider({ children }) {
  const [taskList, setTaskList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [selectedTask, setSelectedTask] = useState({});


  const contextValue = {
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
    taskList,
    setTaskList,
    isBtnDisabled,
    setIsBtnDisabled,
    selectedTask,
    setSelectedTask
  }

  useEffect(() => {
    const getAllData = async () => {
      const response = await getAllTasks(url);
      setTaskList(response.data);
    };

    getAllData();
  }, []); 

  useEffect(() => {
    const isTitleValid = title && title.length > 4;

    setIsBtnDisabled(!isTitleValid);
  }, [title]);

  return (
    <AppContext.Provider
      value={ contextValue }
    >
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};