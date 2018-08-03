import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from './index';

describe('<NotFoundPage />', () => {
  it('should render a <section> tag', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper.find('section')).toHaveLength(1);
  });

  it('should have a <h1> title', () => {
    const wrapper = shallow(<NotFoundPage />);
    const actual = wrapper.find('h1').text();

    expect(actual).toEqual('404 page not found');
  });
});
