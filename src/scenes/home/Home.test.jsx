import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Home from './Home';


describe('<Home />', () => {
  it('rendered the title', done => {
    const wrapper = shallow(<Home />);

    expect(wrapper.text()).to.contain('Articles');
    done();
  });
});
