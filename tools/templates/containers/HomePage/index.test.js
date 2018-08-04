import React from 'react';
import { shallow } from 'enzyme';

import HomePage from './index';

describe('<HomePage />', () => {
  it('should render the content', () => {
    const wrapper = shallow(<HomePage/>);
    expect(
      wrapper.contains(
        <div>
          <p>This is your home page</p>
        </div>
      ),
    ).toBe(true);
  });
});
