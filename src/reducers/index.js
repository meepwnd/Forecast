import {
  TODAY_FETCH,
  TODAY_SUCCESS,
  TODAY_FAILURE,
  FORECAST_FETCH,
  FORECAST_SUCCESS,
  FORECAST_FAILURE,
  SELECT_CITY
} from "../actions/actionTypes";
import { combineReducers } from "redux";
import handleError from "../api/handleErrors";

const selectedCities = (state = [], action) => {
  switch (action.type) {
    case SELECT_CITY:
      return [action.city, ...state.filter(city => city !== action.city)];
    default:
      return state;
  }
};
const todayReducer = (
  state = { isFetching: false, cities: {}, error: "" },
  action
) => {
  switch (action.type) {
    case TODAY_FETCH:
      return {
        ...state,
        isFetching: true
      };
    case TODAY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cities: {
          [action.city]: action.payload,
          ...state.cities
        }
      };
    case TODAY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: handleError[action.error] || action.error
      };
    default:
      return state;
  }
};
const forecastReducer = (
  state = { isFetching: false, cities: {}, error: "" },
  action
) => {
  switch (action.type) {
    case FORECAST_FETCH:
      return {
        ...state,
        isFetching: true
      };
    case FORECAST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cities: {
          [action.city]: action.payload,
          ...state.cities
        }
      };
    case FORECAST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: handleError[action.error] || action.error
      };
    default:
      return state;
  }
};

export default combineReducers({
  selectedCities,
  today: todayReducer,
  forecast: forecastReducer
});
