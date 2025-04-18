// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes?title=

import React from 'react';
import './Searchbar.css';

function Searchbar({ setCafeDatas }) {

  const getCafes = (event) => {
    console.log("Fetching cafes...");
    const keyword = event.currentTarget.value;
    const url = `https://my-unique-rails-cafe-api-16801900c191.herokuapp.com/api/v1/cafes?title=${keyword}`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        // console.log(data);
        setCafeDatas(data);
        // cafeDatas = data;
      });
  };

  return (
    <div className="searchbar input-group">
      <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input onChange={getCafes} placeholder="Starbucks" type="text" className="form-control" />
    </div>
  );
}

export default Searchbar;
