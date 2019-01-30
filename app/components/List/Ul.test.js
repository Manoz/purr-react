import React from 'react';
import { shallow } from 'enzyme';

import Ul from './Ul';

describe('<Ul />', () => {
  it('should render an <ul> tag', () => {
    const wrapper = shallow(<Ul />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<Ul id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<Ul attribute="test" />);
    expect(wrapper.prop('attribute')).toEqual('test');
  });
});
