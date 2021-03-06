import React from 'react';
import { shallow } from 'enzyme';

import Img from './index';

const src = 'http://example.com/test.jpg';
const alt = 'test';

const renderComponent = (props = {}) => shallow(<Img src={src} alt={alt} {...props} />);

describe('<Img />', () => {
  it('should render an <img> tag', () => {
    const wrapper = renderComponent();
    expect(wrapper.is('img')).toBe(true);
  });

  it('should have an src attribute', () => {
    const wrapper = renderComponent();
    expect(wrapper.prop('src')).toEqual(src);
  });

  it('should have an alt attribute', () => {
    const wrapper = renderComponent();
    expect(wrapper.prop('alt')).toEqual(alt);
  });
});
