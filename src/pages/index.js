import React from 'react';

import Layout from '../components/Layout';
import Experience from '../components/Experience';
// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import ExperienceSection from '../components/ExperienceSection';
import OverviewSection from '../components/OverviewSection';
import EducationSection from '../components/EducationSection';
import InterestsSection from '../components/InterestsSection';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <OverviewSection />
      <hr className="m-0" />

      <ExperienceSection />
      <hr className="m-0" />

      <EducationSection />
      <hr className="m-0" />

      <InterestsSection />
      <hr className="m-0" />
    </div>
  </Layout>
);

export default IndexPage;
