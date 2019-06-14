import React from "react";
import { shallow } from "enzyme";
import NotFound from "../NotFound";

describe("notfound component", () => {
  test("should render correctly", () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should have link to home', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('Link').props().to).toEqual('/')

  })
  
});
