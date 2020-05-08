import React from 'react';
import config from '../../config';
import { useStaticQuery, graphql } from 'gatsby';
import renderAst from './md-links/MDLinks';

const OverviewSection = () => {
  const overviewQuery = graphql`
    query OverviewMD {
      markdownRemark(frontmatter: { title: { eq: "overview" } }) {
        htmlAst
      }
    }
  `;
  const data = useStaticQuery(overviewQuery);
  console.log('data', data);
  const htmlAst = data?.markdownRemark?.htmlAst;
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0">
          <span className="mr-2 d-block d-md-inline">{config.firstName}</span>
          <span className="text-primary d-block d-md-inline">
            {config.lastName}
          </span>
        </h1>
        <div className="subheading mb-5">
          {config.address} · {config.phone} ·
          <a href={`mailto:${config.email}`}>{config.email}</a>
        </div>
        <div className="mb-5">{renderAst(htmlAst)}</div>

        <div className="social-icons">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url} target="_blank">
                <i className={`${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
