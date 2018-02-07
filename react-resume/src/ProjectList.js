import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import projectInfo from './info/projects.js'
import './JobList.css'
import JobHeader from './JobHeader'

const ProjectList = (props) => (
  <div>
    {
      projectInfo.map((job) => {
        return (
          <div key={job.position}>
            <JobHeader
              position={job.position}
              startDate={job.startDate}
              endDate={job.endDate}
            />
            <ul className="jobList">
              {job.details.map((str, index)=><li key={index}>{str}</li>)}
            </ul>
          </div>
        )
      })
    }
  </div>
);

export default muiThemeable()(ProjectList);
