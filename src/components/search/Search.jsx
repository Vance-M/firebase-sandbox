import React from 'react'
import PropTypes from 'prop-types';


export default function Search({onSubmit, query, onQueryChange}) {
    return (
      <>
        <form onSubmit={onSubmit}>
        <label htmlFor="gitUser-search">
          <input
            id="gitUser-search"
            placeholder="Github User Search"
            type="text"
            value={query}
            onChange={onQueryChange}
            data-testid="gitUser-search"
          />
        </label>
        {/* <input type="submit" value="Submit"/> */}
      </form>
      </>
    )
}

Search.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    onQueryChange: PropTypes.func.isRequired,
  };
  

