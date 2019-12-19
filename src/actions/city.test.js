import {selectCity}  from './city'
import { SELECT_CITY } from "./actionTypes";

it ('should generate selectcity action object', () => {
  const action = selectCity('test city')
  expect(action).toEqual({
    type: SELECT_CITY,
    city: 'test city'
  })
})
