import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import JobList from './JobList'
import ProjectList from './ProjectList'

const RightSide = (props) => (
  <div>
    <h2>Employment</h2>
    <JobList/>
    <h2>Projects</h2>
    <ProjectList/>
  </div>
);

export default muiThemeable()(RightSide);
