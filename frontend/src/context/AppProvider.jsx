import React, { useState } from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';


export default function AppProvider({ children }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
    setEndDate
  } 

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