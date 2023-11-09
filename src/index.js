import _ from 'lodash';
import './style.css';
import MyImage from './img.jpg'
import Data from './data.xml';
import Notes from './data.csv';
import text from "./text.txt"

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml); // output `TOML Example`
console.log(toml.owner); // output `Tom Preston-Werner`

console.log(yaml); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = MyImage;

  element.appendChild(myIcon);

  return element;
}

console.log(text)
console.log(Data);
console.log(Notes);

document.body.appendChild(component());