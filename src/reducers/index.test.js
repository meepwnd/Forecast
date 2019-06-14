import { forecastReducer, todayReducer, selectedCities } from "./index";

describe("select cities", () => {
  test("add first city ", () => {
    const action = {
      type: "SELECT_CITY",
      city: "london"
    };
    expect(selectedCities([], action)).toEqual(["london"]);
  });

  test("add second city ", () => {
    const action = {
      type: "SELECT_CITY",
      city: "pool"
    };
    expect(selectedCities(["london"], action)).toEqual(["pool", "london"]);
  });

  test("add  city second time", () => {
    const action = {
      type: "SELECT_CITY",
      city: "pool"
    };
    expect(selectedCities(["london", "poo", "pool"], action)).toEqual([
      "pool",
      "london",
      "poo"
    ]);
  });
});

describe("today data", () => {
  test("today fetch ", () => {
    const action = {
      type: "TODAY_FETCH"
    };
    const initialState = { isFetching: false, cities: {}, error: "" };
    expect(todayReducer(initialState, action)).toEqual({
      isFetching: true,
      cities: {},
      error: ""
    });
  });

  test("today success ", () => {
    const action = {
      type: "TODAY_SUCCESS",
      city: "london",
      payload: {
        123: "123"
      }
    };
    const stateBefore = { isFetching: true, cities: {}, error: "" };
    expect(todayReducer(stateBefore, action)).toEqual({
      isFetching: false,
      cities: {
        london: {
          123: "123"
        }
      },
      error: ""
    });
  });

  test("today failure ", () => {
    const action = {
      type: "TODAY_FAILURE",
      city: "london",
      error: "err"
    };
    const stateBefore = { isFetching: true, cities: {}, error: "" };
    expect(todayReducer(stateBefore, action)).toEqual({
      isFetching: false,
      cities: {},
      error: "err"
    });
  });

  describe("forecast data", () => {
    test("forecast fetch ", () => {
      const action = {
        type: "FORECAST_FETCH"
      };
      const initialState = { isFetching: false, cities: {}, error: "" };
      expect(forecastReducer(initialState, action)).toEqual({
        isFetching: true,
        cities: {},
        error: ""
      });
    });
  
    test("forecast success ", () => {
      const action = {
        type: "FORECAST_SUCCESS",
        city: "london",
        payload: {
          123: "123"
        }
      };
      const stateBefore = { isFetching: true, cities: {}, error: "" };
      expect(forecastReducer(stateBefore, action)).toEqual({
        isFetching: false,
        cities: {
          london: {
            123: "123"
          }
        },
        error: ""
      });
    });
  
    test("forecast failure ", () => {
      const action = {
        type: "FORECAST_FAILURE",
        city: "london",
        error: "err"
      };
      const stateBefore = { isFetching: true, cities: {}, error: "" };
      expect(forecastReducer(stateBefore, action)).toEqual({
        isFetching: false,
        cities: {},
        error: "err"
      });
    });
  });
});
