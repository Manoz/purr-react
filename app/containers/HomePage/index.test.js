import React from 'react';
import { shallow } from 'enzyme';

import H2 from 'components/H2';
import HomePage from './index';

describe('<HomePage />', () => {
  it('<main> should have \'site-main\' class', () => {
    const wrapper = shallow(<HomePage />);
    const actual = wrapper.find('main').prop('className');

    expect(actual).toEqual('site-main');
  });

  it('<h2> should have the good message.state prop', () => {
    const wrapper = shallow(<HomePage/>);
    expect(
      wrapper.contains(
        <H2>Hello, World!</H2>
      ),
    ).toBe(true);
  });
});
