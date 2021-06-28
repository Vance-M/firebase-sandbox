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
        <figure>
        <a href={link}>{username}</a>
        <p>Name: {name}</p>
        <p>Repos: {repos}</p>
        <p>Gists: {gists}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Created: {creation}</p>

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
  