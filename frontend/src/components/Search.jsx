import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import getTaskQuery from '../utils/getTaskQuery';
import { url } from '../utils/url';
import TaskButton from './TaskButton';

function Search() {
  const { 
    searchInput,
    setSearchInput,
    setIsSearchBtnDisabled,
    setSelectedTask
  } = useContext(AppContext);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    const response = await getTaskQuery(`${url}/search?query=${searchInput}`)

    if (response.status === 200) {
      setSelectedTask(response.task)
    } else {
      console.log("task nao encontrada")
    }

    setSearchInput('');
  };

  return (
    <div>
      <form
        onSubmit={ handleSearchSubmit }
      >
        <div className="search-bar">
          <input
            id="searchbar"
            type="text"
            placeholder="Pesquisar por título"
            value={ searchInput }
            onChange={(e) => setSearchInput(e.target.value)}
            required
          />
          <TaskButton
            isBtnDisabled={ setIsSearchBtnDisabled }
            btnText="Pesquisar"
            btnType="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
