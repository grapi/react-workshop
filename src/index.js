const React = require('react');
const ReactDOM = require('react-dom');

const sum = require('./sum');
const HelloMessage = require('./HelloMessage');

import CheckboxWithLabel from './CheckboxWithLabel';

var example1_mountNode = document.getElementById('example1');
var example2_mountNode = document.getElementById('example2');

ReactDOM.render(<HelloMessage name="PLAT" />, example1_mountNode);
ReactDOM.render(<CheckboxWithLabel labelOn="On" labelOff="Off" />, example2_mountNode);

console.log('1 + 2 = ' + sum(1, 2));

