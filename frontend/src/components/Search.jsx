import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import TaskButton from './TaskButton';

function Search() {
  const { setTaskList } = useContext(AppContext);
  console.log(setTaskList)
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchBtnDisabled, setIsSearchBtnDisabled] = useState('');


  useEffect(() => {
    const isSearchTermValid = searchTerm.length > 4;

    setIsSearchBtnDisabled(!isSearchTermValid);
  }, [searchTerm]); 


  const handleSearchSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={ handleSearchSubmit }
      >
        <div>
          <label
            htmlFor="searchbar"
          >
            Pesquisar tarefa
          </label>
          <input
            id="searchbar"
            type="text"
            placeholder="Pesquisar por título"
            value={ searchTerm }
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <div>
            <div>
              <TaskButton
                isBtnDisabled={ isSearchBtnDisabled }
                btnText="Pesquisar"
                btnType="submit"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
