import React from 'react';
import Education from './Education';

//
//
const EducationSection = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="education"
    >
      <div className="w-100">
        <h2 className="mb-5">Education</h2>

        <Education
          schoolName="The Braintrust Group"
          degreeName="CSPO, Certified Scrum Product Owner"
          endDate="2018"
        />
        <Education
          schoolName="Master Connection Associates"
          degreeName="Sales Productivity, Sales Strategies, World Class Customer Service Certification"
          endDate="2010 & 2012"
        />
        <Education
          schoolName="University of New Orleans"
          degreeName="Bachelor of Science - Marketing and Management"
          endDate="2003"
        />
      </div>
    </section>
  );
};

export default EducationSection;
