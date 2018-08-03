import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import StyledH2 from './StyledH2';

describe('<StyledH2 />', () => {
  it('should match the snapshot', () => {
    const wrapper = renderer
      .create(<StyledH2>test</StyledH2>)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = shallow(<StyledH2 id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });
});
