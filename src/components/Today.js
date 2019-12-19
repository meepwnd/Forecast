import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTodayIfNeeded } from "../actions/today";
import { selectCity } from "../actions/city";
import Loader from "./Loader";
import CitiesList from "./CitiesList";
import InfoBlock from "./InfoBlock";
import SearchForm from "./SearchForm";

const Today = ({
  data,
  fetchTodayIfNeeded,
  selectCity,
  cities,
  selectedCity,
  isFetching,
  error
}) => {
  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : data ? (
        <>
          <h1 className="city-name">{data.name}</h1>
          <InfoBlock data={data} />
          <NavLink className="navlink" to={`/forecast/${selectedCity}`}>
            Next 2 days
          </NavLink>
        </>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p className="select-text">Please select a city</p>
      )}

      <SearchForm
        fetch={fetchTodayIfNeeded}
        selectCity={selectCity}
        isFetching={isFetching}
      />
      <CitiesList cities={cities} selectCity={selectCity} />
    </div>
  );
};

const mapStateToProps = state => {
  const { selectedCities } = state;
  const selectedCity = selectedCities[0];
  return {
    cities: selectedCities,
    selectedCity,
    data: state.today.cities[selectedCity],
    isFetching: state.today.isFetching,
    error: state.today.error
  };
};

Today.propTypes = {
  cities: PropTypes.array,
  selectedCity: PropTypes.string,
  data: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default connect(mapStateToProps, { fetchTodayIfNeeded, selectCity })(
  Today
);
