import React from 'react';
import { shallow } from 'enzyme';

import ListItem from './ListItem';

describe('<ListItem />', () => {
  it('should render a <li> tag', () => {
    const wrapper = shallow(<ListItem />);
    expect(wrapper.type()).toEqual('li');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<ListItem id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<ListItem attribute="test" />);
    expect(wrapper.prop('attribute')).toBeUndefined();
  });
});
