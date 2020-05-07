import React from 'react';
import config from '../../config';
const OverviewSection = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0">
          <span className="mr-2">{config.firstName}</span>
          <span className="text-primary">{config.lastName}</span>
        </h1>
        <div className="subheading mb-5">
          {config.address} · {config.phone} ·
          <a href={`mailto:${config.email}`}>{config.email}</a>
        </div>
        <p className="lead ">
          Highly accomplished and experienced sales professional with a{' '}
          <b>proven track record of success</b> in providing sales management,
          sales strategies, new business development, contract negotiations, and
          leadership.
        </p>
        <p>
          Experience in maintaining client relationships and securing new
          business with large corporations.
        </p>
        <p>
          Proven ability to logically and effectively analyze market demand,
          industry changes, and client needs.
        </p>
        <p className="mb-5">
          Outstanding ability to be concise, complete, logical, objective, and
          persuasive in both written and oral communications.
        </p>
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
