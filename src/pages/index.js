import React from 'react';

import Layout from '../components/Layout';
// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import ExperienceSection from '../components/ExperienceSection';
import OverviewSection from '../components/OverviewSection';
import EducationSection from '../components/EducationSection';
import InterestsSection from '../components/InterestsSection.jsx';
import ReferencesSection from '../components/ReferenceSection';
import RecommendationSection from '../components/RecommendationSection';
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
      <RecommendationSection />
      <hr className="m-0" />

      <ReferencesSection />
      <hr className="m-0" />

      <InterestsSection />
      <hr className="m-0" />
    </div>
  </Layout>
);

export default IndexPage;
