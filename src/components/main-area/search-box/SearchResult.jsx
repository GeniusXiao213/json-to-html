import React from 'react';
import './searchResult.css';

const SearchResult = ({ result }) => {
  return (
    <div className='search-result' onClick={(e) => alert(`You clicked on ${result.name}`)}>
        <div className='search-result-name'>{result.name}</div>
        <div className='search-result-address'>Insert address</div>
    </div>
  );
};

export default SearchResult