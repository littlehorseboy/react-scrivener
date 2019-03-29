import React from 'react';
import { shallow } from 'enzyme';
import Root from './Root.jsx';

describe('Root.jsx', () => {
  test('MuiThemeProviderOld props theme.zIndex.loading === 1600', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper.find('MuiThemeProviderOld').props().theme.zIndex.loading).toBe(1600);
  });
});
