import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '../../components/search/Search.jsx'
import DisplayList from '../../components/display/DisplayList.jsx'
import { getUser } from '../../services/dbUtils';
import firebase from '../../firebase.js';




function App() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    const usersRef = firebase.database().ref('users')
    usersRef.on('value', (snapshot) => {
      let allUsers = snapshot.val();
      let newState = [];

      for (let user in allUsers) {
        newState.push({
          id: user,
          username: allUsers[user].userName,
          name: allUsers[user].userRealName,
          link: allUsers[user].userLink,
          repos: allUsers[user].userRepos,
          gists: allUsers[user].userGists,
          followers: allUsers[user].userFollowers,
          following: allUsers[user].userFollowing,
          creation: allUsers[user].userCreation,
        });
      }
      setUsers(newState);
    })

  }, [query]);
  


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
      <DisplayList users={users} />
    
    </>
  );
}

export default App;
