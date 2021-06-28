import React from 'react'
import PropTypes from 'prop-types';
import Display from './Display';

export default function DisplayList({ users }) {
    console.log(users)
    return (
        <>
            <ul aria-label="users-list">
                {users && users.map((
                    {   
                        username,
                        name,
                        link,
                        repos,
                        gists,
                        followers,
                        following,
                        creation
                    }) => (
                        <li key={username}>
                        <Display
                            username={username}
                            name={name}
                            link={link}
                            repos={repos}
                            gists={gists}
                            followers={followers}
                            following={following}
                            creation={creation}
                        />
                      </li>
                    ))}
            </ul>
        </>
    )
}


DisplayList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            repos: PropTypes.number.isRequired,
            gists: PropTypes.number.isRequired,
            followers: PropTypes.number.isRequired,
            following: PropTypes.number.isRequired,
            creation: PropTypes.string.isRequired
        })
    ),
  };
  