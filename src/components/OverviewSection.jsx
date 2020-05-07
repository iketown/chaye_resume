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
        <div className="mb-5">
          <p className="lead">
            My name is Chaye Eichenberger, nice to meet you!
          </p>
          <p>
            I have been in Sales, Business Development, and Account Management
            for 16+ years. I’ve worked for large companies like Gaylord Hotels
            and American Express, as well as start ups such as Emma and
            GoNoodle. I enjoy the entrepreneurial spirit found in smaller
            companies and try to bring that fresh perspective and excitement to
            every role.{' '}
          </p>
          <p>
            I believe my biggest contributions to a company are my ability to{' '}
            <b>collaborate</b> and bring teams together, define <b>strategy</b>{' '}
            and <b>differentiate</b> a product or service, develop processes to{' '}
            <b>drive efficiency</b>, and build strong client relationships.
          </p>
        </div>

        {/* <p>
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
        </p> */}
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
