import React from "react";
import { shallow } from "enzyme";
import CitiesList from "../CitiesList";

describe("CitiesList component", () => {
  test("should render maximum 5 cities", () => {
    const cities = ['1', '2', '3', '4', '5', '6']
    const wrapper = shallow(<CitiesList cities={cities}/>);
    expect(wrapper.find('li').length).toBe(5)
  });
  
  
});
