import React from 'react';
import { Route } from 'react-router-dom';
import { shallow } from 'enzyme';

import Header from 'components/Header';
import App from './index';

describe('<App />', () => {
  it('should render the header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render some routes', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Route).length).not.toBe(0);
  });
});
