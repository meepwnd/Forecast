import axios from "axios";
import {
  FORECAST_FETCH,
  FORECAST_SUCCESS,
  FORECAST_FAILURE
} from "./actionTypes";
import { forecast, key } from "../api/api";

export const fetchForecast = city => dispatch => {
  dispatch({
    type: FORECAST_FETCH
  });

  axios
    .get(`${forecast}${city}${key}`)
    .then(response => {
      if (response.status === 200) {
        dispatch({
          type: FORECAST_SUCCESS,
          payload: response.data,
          city
        });
      }
    })
    .catch(error => {
      dispatch({
        type: FORECAST_FAILURE,
        error: error.response.statusText
      });
    });
};

const shouldFetchForecast = (state, city) => {
  const forecastByCity = state.forecast.cities[city];
  if (forecastByCity) {
    return false;
  }
  return true;
};

export const fetchForecastIfNeeded = city => (dispatch, getState) => {
  if (shouldFetchForecast(getState(), city)) {
    return dispatch(fetchForecast(city));
  }
};
