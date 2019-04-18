import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchForm = ({ selectCity, fetch }) => {
  const [city, setCity] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    if (city) {
      selectCity(city);
      fetch(city);
      setCity("");
    }
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="input"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="The weather in..."
      />
      <button className="btn">search</button>
    </form>
  );
};

SearchForm.propTypes = {
  selectCity: PropTypes.func,
  fetch: PropTypes.func
};

export default SearchForm;
