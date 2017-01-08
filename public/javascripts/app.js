import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Editor from './presenters/editor';

let sectionData = [
  {id: '1', text: 'Woot, in the world'},
  {id: '2', text: 'Kwon tastic is the name'},
  {id: '3', text: 'Temporary winner'},
  {id: '4', text: 'Companies of people are fighting'},
  {id: '5', text: 'Reduxstagram'},
  {id: '6', text: 'In the truth'},
  {id: '7', text: 'campniah'}
]

ReactDOM.render(
  (<Editor sections={sectionData}/>),
  document.getElementById('journey')
)
