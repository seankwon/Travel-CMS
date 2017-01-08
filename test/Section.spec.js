import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Section from '../public/javascripts/presenters/section.js';

describe('<Section/>', function () {
  it('should have text and an id', function () {
    const wrapper = shallow(<Section text="woo"/>);
    expect(wrapper.props().text).to.be.defined;
    expect(wrapper.props().id).to.be.defined;
  });
});
