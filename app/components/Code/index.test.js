import React from 'react';
import { shallow } from 'enzyme';

import Code from './index';

describe('<Code />', () => {
  it('should render an <code> tag', () => {
    const wrapper = shallow(<Code />);
    expect(wrapper.type()).toEqual('code');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<Code id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<Code attribute="test" />);
    expect(wrapper.prop('attribute')).toBeUndefined();
  });
});
