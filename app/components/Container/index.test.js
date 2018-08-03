import React from 'react';
import { shallow } from 'enzyme';

import Container from './index';

describe('<Container />', () => {
  it('should render a <div>', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.type()).toEqual('div');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<Container id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<Container attribute="test" />);
    expect(wrapper.prop('attribute')).toBeUndefined();
  });
});
