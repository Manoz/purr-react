import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';
import Img from './Img';
import Code from '../Code';
import pkg from '../../../package.json';
import Banner from './purr-react-banner.png';

describe('<Header />', () => {
  it('should render a <header>', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header')).toHaveLength(1);
  });

  it('should have \'main-header\' class', () => {
    const wrapper = shallow(<Header />);
    const actual = wrapper.prop('className');

    expect(actual).toEqual('main-header');
  });

  it('should render an <img> as banner', () => {
    const wrapper = shallow(<Header/>);
    expect(
      wrapper.contains(
        <Img src={Banner} alt="purr-react banner" />
      ),
    ).toBe(true);
  });

  it('<Code> should have the correct app version', () => {
    const wrapper = shallow(<Header />);

    expect(
      wrapper.contains(
        <Code>{pkg.version}</Code>
      ),
    ).toBe(true);
  });
});
