import axios from "axios";
import { TODAY_FETCH, TODAY_SUCCESS, TODAY_FAILURE } from "./actionTypes";
import { weather, key } from "../api/api";

export const fetchToday = city => dispatch => {
  dispatch({
    type: TODAY_FETCH
  });

  return axios
    .get(`${weather}${city}${key}`)
    .then(response => {
      if (response.status === 200) {
        dispatch({
          type: TODAY_SUCCESS,
          payload: response.data,
          city
        });
      }
    })
    .catch(error => {
      dispatch({
        type: TODAY_FAILURE,
        error: error.response.statusText
      });
    });
};

const shouldFetchToday = (state, city) => {
  const weatherByCity = state.today.cities[city];
  if (weatherByCity) {
    return false;
  }
  return true;
};

export const fetchTodayIfNeeded = city => (dispatch, getState) => {
  if (shouldFetchToday(getState(), city)) {
    return dispatch(fetchToday(city));
  }
};
