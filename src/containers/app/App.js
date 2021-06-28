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
    getUser(query)
      .then(setUser)
  };

  const onQueryChangeHandler = ({ target }) => {
    setQuery(target.value);
  };

  useEffect(() => {
    console.log(user)
  }, [user]);

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
