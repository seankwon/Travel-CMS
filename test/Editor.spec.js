import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Editor from '../public/javascripts/presenters/editor';
import SectionList from '../public/javascripts/presenters/sectionList';

describe('<Editor />', function() {
  it('should have an input field', function () {
    const wrapper = shallow(<Editor/>)
    expect(wrapper.find('input')).to.have.length(1)
  });

  it('should have a Section List', function () {
    const wrapper = shallow(<Editor/>)
    expect(wrapper.find(SectionList)).to.have.length(1)
  });

});
