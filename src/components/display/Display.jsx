import React from 'react'
import PropTypes from 'prop-types';

export default function Display(
    {                        
        username,
        name,
        link,
        repos,
        gists,
        followers,
        following,
        creation 
    }) {
    return (
        <figure  className='user-row' >
            <a className='li-border' href={link}>{username}</a>
            <p className='li-border'>{name}</p>
            <p className='li-border'>{repos}</p>
            <p className='li-border'>{gists}</p>
            <p className='li-border'>{followers}</p>
            <p className='li-border'>{following}</p>
            <p className='li-border'>{creation}</p>
        </figure>
    )
}


Display.propTypes = {
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    gists: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    creation: PropTypes.string.isRequired
  };
  