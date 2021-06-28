import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '../../components/search/Search.jsx'
import Display from '../../components/display/Display.jsx'
import { getUser } from '../../services/dbUtils';
import firebase from '../../firebase.js';




function App() {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState({});

  
  useEffect(() => {
    console.log(user)
  }, [user]);
  


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const usersRef = firebase.database().ref('users')
    const userData = await getUser(query)
    usersRef.push(userData);

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
