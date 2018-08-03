import React from 'react';
import { shallow } from 'enzyme';

import StyledH2 from './StyledH2';
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
        <StyledH2>🤖 Introduction</StyledH2>
      ),
    ).toBe(true);
  });
});
