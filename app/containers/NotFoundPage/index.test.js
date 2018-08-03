import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import H1 from 'components/H1';
import NotFoundPage from './index';

describe('<NotFoundPage />', () => {
  it('should render a <section> tag', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper.find('section')).toHaveLength(1);
  });

  it('should have a <h1> title', () => {
    const wrapper = renderer.create(<H1 />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
