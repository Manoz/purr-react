// See guide here: https://github.com/styled-components/jest-styled-components
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Span from './Span';

describe('<Span />', () => {
  it('should match the snapshot', () => {
    const wrapper = renderer
      .create(<Span>test</Span>)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without throwing an error', () => {
    const wrapper = renderer.create(<Span />).toJSON();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('color', '#555');
  });

  it('applies style according to passed props', () => {
    const wrapper = renderer.create(<Span secondary />).toJSON();
    expect(wrapper).toHaveStyleRule('color', 'var(--secondaryColor)');
  });
});
