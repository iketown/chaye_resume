import React from 'react';
import Education from './Education';
import { Container } from 'reactstrap';

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
        <Container>
          <Education
            schoolName="University of New Orleans"
            degreeName="Bachelor of Science - Marketing and Management"
            endDate="2003"
          />
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
            schoolName="Project Management Institute"
            degreeName="Studying for Project Management Certification"
            endDate="2020"
          />
          <Education
            schoolName="Mad Dogg"
            degreeName="Certified Spin Instructor"
            endDate="2008"
          />
          <Education
            schoolName="Gallo Wine Academy"
            degreeName="Gallo Wine Expert Certified"
            endDate="2008"
          />
          <Education
            schoolName="Yoga Alliance Certified"
            degreeName="Hot Yoga Instructor"
            endDate="2007"
          />
        </Container>
      </div>
    </section>
  );
};

export default EducationSection;
