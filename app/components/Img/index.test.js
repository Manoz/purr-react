import React from 'react';
import { shallow } from 'enzyme';

import Img from './index';

const src = 'https://i.imgur.com/UjW1zsq.png';
const alt = 'Main banner';

const renderComponent = (props = {}) => shallow(<Img src={src} alt={alt} {...props} />);

describe('<Img />', () => {
  it('should render an <img> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.is('img')).toBe(true);
  });

  it('should have an src attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('src')).toEqual(src);
  });

  it('should have an alt attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('alt')).toEqual(alt);
  });
});
