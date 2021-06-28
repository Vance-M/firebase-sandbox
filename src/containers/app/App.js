import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '../../components/search/Search.jsx'
import Display from '../../components/display/Display.jsx'




function App() {

  const [query, setQuery] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(query);
    // getUsers(query)
    //   .then(setArtists)
  };

  const onQueryChangeHandler = ({ target }) => {
    setQuery(target.value);
  };


  return (
    <>
      <Search
        onSubmit={onSubmitHandler}
        query={query}
        onQueryChange={onQueryChangeHandler}
      />
      <Display />
    </>
  );
}

export default App;
