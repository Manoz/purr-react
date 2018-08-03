import React from 'react';
import { shallow } from 'enzyme';

import P from './P';

describe('<P />', () => {
  it('should render a <p> tag', () => {
    const wrapper = shallow(<P>test</P>);
    expect(wrapper.type()).toEqual('p');
  });

  it('should have children', () => {
    const wrapper = shallow(<P>test</P>);
    expect(wrapper.contains('test')).toEqual(true);
  });
});
