import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import jobInfo from './info/jobs.js'
import './JobList.css'
import JobHeader from './JobHeader'

const JobList = (props) => (
  <div>
    {
      jobInfo.map((job) => {
        return (
          <div key={job.position}>
            <JobHeader
              position={job.position}
              startDate={job.startDate}
              endDate={job.endDate}
              twoRows={true}
              company={job.company}
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

export default muiThemeable()(JobList);
