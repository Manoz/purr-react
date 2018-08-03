import React from 'react';
import { shallow } from 'enzyme';

import A from './index';

const renderComponent = (props = {}) => shallow(
  <A href="http://example.com" {...props}>
    test
  </A>,
);

describe('<A />', () => {
  it('should render an <a>', () => {
    const wrapper = renderComponent();
    expect(wrapper.type()).toEqual('a');
  });

  it('should have an href attribute', () => {
    const wrapper = renderComponent();
    expect(wrapper.prop('href')).toEqual('http://example.com');
  });

  it('should have children', () => {
    const wrapper = renderComponent();
    expect(wrapper.contains('test')).toEqual(true);
  });
});
