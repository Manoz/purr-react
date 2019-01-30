import React from 'react';
import { shallow } from 'enzyme';

import H2 from './index';

describe('<H2 />', () => {
  it('should render a <h2> tag', () => {
    const wrapper = shallow(<H2 />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<H2 id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = shallow(<H2 attribute="test" />);
    expect(wrapper.prop('attribute')).toEqual('test');
  });
});
