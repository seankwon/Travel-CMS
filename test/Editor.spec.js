import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import { spy } from 'sinon';

import Editor from '../public/javascripts/presenters/editor';
import SectionList from '../public/javascripts/presenters/sectionList';

describe('<Editor />', function() {
  let data = [
    {text: 'poo', id: 4}
  ];
  const wrapper = shallow(<Editor sections={data}/>)

  it('should have an input field', function () {
    expect(wrapper.find('input[type="text"]')).to.have.length(1)
  });

  it('should have a Section List', function () {
    expect(wrapper.find(SectionList)).to.have.length(1)
  });

  it('should add a section', function() {
    wrapper.instance().addSection('hello')
    expect(wrapper.state('sections')).to.have.length(2)
  });

  it('updates its value state when the input changes',function() {
    const updateValue = wrapper.instance().updateValue;
    const textInput = wrapper.find('input[type="text"]')
    expect(textInput.props().onChange).to.eq(updateValue)
  });

  it('passes addSection to its input', function() {
    const addSection = wrapper.instance().addSection
    const input = wrapper.find('input[type="submit"]')
    expect(input.props().onClick).to.eq(addSection)
  });

  it('should accept input and change state', function() {
    const textInput = wrapper.find('input[type="text"]')
    textInput.simulate('change', {target: {value: 'Hello'}})
    expect(wrapper.state().value).to.be.eq('Hello')
  });

  it('should call addSection when submit is clicked', function() {
    //fix duplicaaate calls
    let data = [
      {text: 'poo', id: 4}
    ];
    const wrapper = shallow(<Editor sections={data}/>)
    const submitBtn = wrapper.find('input[type="submit"]')
    wrapper.setState({value: 'Fiero'})
    submitBtn.simulate('click')
    expect(wrapper.state().sections).to.have.length(2);
  });

});
