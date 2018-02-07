import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import eduInfo from './info/education.js';
import './Education.css';

const Education = (props) => (
  <div>
    <h2>Education</h2>
    <div>
      <strong>{eduInfo.school}
        <span style={{float: "right"}}>
          ({eduInfo.schoolAbv})
        </span>
      </strong>
    </div>
    <div>
      <div className="degrees">
        <em>Masters of Science</em>
        <span style={{float: "right"}}>
          {eduInfo.msGPA}/4.0
        </span><br/>
        <span className="indented">{eduInfo.msProgram}</span>
      </div>
      <div className="degrees">
        <em>Bachelors of Science</em>
        <span style={{float: "right"}}>
          {eduInfo.bsGPA}/4.0
        </span><br/>
        <span className="indented">{eduInfo.bsProgram}</span>
      </div>
    </div>
    <div className="expectedGrad">
      <em>Expected Graduation</em>
      <span style={{float: "right"}}>
        {eduInfo.liberationDate}
      </span>
    </div>
  </div>
);

export default muiThemeable()(Education);
