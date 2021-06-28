import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '../../components/search/Search.jsx'
import Display from '../../components/display/Display.jsx'
import { getUser } from '../../services/dbUtils';




function App() {

  const [query, setQuery] = useState('');
  const [user, setUser] = useState({});

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(query);
    getUser(query)
      .then(setUser)
    console.log(user);
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
      <Display user={user} />
    </>
  );
}

export default App;
