import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Education from './Education';
import ChipArray from './ChipArray';
import Graph from './Graph';
import skills from './info/skills.js';

const LeftSide = (props) => (
  <div>
    <Education/>
    <h2>Languages</h2>
    <Graph data={skills.lang}/>
    <h2>Frameworks</h2>
    <Graph data={skills.frameworks}/>
    <h2>Interests</h2>
    <ChipArray data={skills.interests}/>
  </div>
);

export default muiThemeable()(LeftSide);
