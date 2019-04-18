import React from "react";
import PropTypes from "prop-types";

const CitiesList = ({ cities, selectCity }) => (
  <ul className="cities-list">
    {cities
      .slice(0, 5)

      .map(city => (
        <li
          key={city}
          onClick={() => {
            selectCity(city);
          }}
        >
          {city}
        </li>
      ))}
  </ul>
);

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
  selectCity: PropTypes.func.isRequired
};

export default CitiesList;
