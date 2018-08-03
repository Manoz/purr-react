import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Img from './Img';

const src = 'http://example.com/test.jpg';
const alt = 'test';

const renderComponent = (props = {}) => shallow(<Img src={src} alt={alt} {...props} />);

describe('<Img />', () => {
  it('should match the snapshot', () => {
    const wrapper = renderer
      .create(<Img src={src} alt={alt} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
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
