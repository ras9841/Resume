import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import './JobHeader.css';

const JobHeader = (props) => (
  <div className="header">
    <div>
      <strong id="jobPosition">{props.position}</strong>
      <span style={{"float":"right"}}>
          {props.startDate} - {props.endDate}
      </span>
    </div>
    {
      props.twoRows ? (
      <div>
        <span><em>{props.company}</em></span>
      </div> ) : null
    }
  </div>
)

export default muiThemeable()(JobHeader);
