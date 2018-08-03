import React from 'react';
import { shallow } from 'enzyme';

import H2 from 'components/H2';
import AboutPage from './index';

describe('<AboutPage />', () => {
  it('should render a <section> tag', () => {
    const wrapper = shallow(<AboutPage />);
    expect(wrapper.find('section')).toHaveLength(1);
  });

  it('should have a \'page about\' class', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('section').prop('className');
    const expected = 'page about';

    expect(actual).toEqual(expected);
  });

  it('should have an <h2> tag', () => {
    const wrapper = shallow(<AboutPage/>);
    expect(
      wrapper.contains(
        <H2>About Page</H2>
      ),
    ).toBe(true);
  });
});
