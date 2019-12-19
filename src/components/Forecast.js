import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchForecastIfNeeded } from "../actions/forecast";
import Loader from "./Loader";
import InfoBlock from "./InfoBlock";

const Forecast = ({
  selectedCity,
  data,
  fetchForecastIfNeeded,
  error,
  isFetching
}) => {
  useEffect(() => {
    fetchForecastIfNeeded(selectedCity);
  }, [fetchForecastIfNeeded, selectedCity]);
  return (
    <>
      {isFetching ? (
        <Loader />
      ) : data ? (
        <div>
          <InfoBlock data={data.list[8]} />
          <InfoBlock data={data.list[15]} />
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>no info</p>
      )}

      <NavLink className="navlink" to="/">
        back
      </NavLink>
    </>
  );
};

const mapStateToProps = state => {
  const { selectedCities } = state;
  const selectedCity = selectedCities[0];
  return {
    cities: selectedCities,
    selectedCity,
    data: state.forecast.cities[selectedCity],
    isFetching: state.forecast.isFetching,
    error: state.forecast.error
  };
};

Forecast.propTypes = {
  cities: PropTypes.array,
  selectedCity: PropTypes.string,
  data: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default connect(
  mapStateToProps,
  { fetchForecastIfNeeded }
)(Forecast);
