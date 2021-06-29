import React from 'react'
import PropTypes from 'prop-types';
import Display from './Display';

export default function DisplayList({ users }) {
    return (
        <>
            <ul className='display-ul' aria-label="users-list">
                <li >
                    <figure className='user-title' >
                        <p className='li-border'>Username</p>
                        <p className='li-border'>Name</p>
                        <p className='li-border'>Repos</p>
                        <p className='li-border'>Gists</p>
                        <p className='li-border'>Followers</p>
                        <p className='li-border'>Following</p>
                        <p className='li-border'>Created</p>
                    </figure>
                </li>
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
                            username={username || 'N/A'}
                            name= {name || 'N/A'}
                            link={link || 'N/A'}
                            repos={repos || 0}
                            gists={gists || 0}
                            followers={followers || 0}
                            following={following || 0}
                            creation={creation || 'N/A'}
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
            username: PropTypes.string,
            name: PropTypes.string,
            link: PropTypes.string,
            repos: PropTypes.number,
            gists: PropTypes.number,
            followers: PropTypes.number,
            following: PropTypes.number,
            creation: PropTypes.string
        })
    ),
  };
  