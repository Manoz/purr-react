import React from 'react';
import { shallow } from 'enzyme';

import H1 from './index';

describe('<H1 />', () => {
  it('should render a <h1> tag', () => {
    const wrapper = shallow(<H1 />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<H1 id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<H1 attribute="test" />);
    expect(wrapper.prop('attribute')).toEqual('test');
  });
});
