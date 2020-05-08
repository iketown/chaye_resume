import React from 'react';

//
//
const Education = ({ schoolName, degreeName, information, endDate }) => {
  return (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{schoolName}</h3>
        <div className="subheading mb-3">{degreeName}</div>
        {information}
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{endDate}</span>
      </div>
    </div>
  );
};

export default Education;
