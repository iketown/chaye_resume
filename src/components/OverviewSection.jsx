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
          <span className="mr-2 d-block d-md-inline">{config.firstName}</span>
          <span className="text-primary d-block d-md-inline">
            {config.lastName}
          </span>
        </h1>
        <div className="subheading mb-5">
          {config.address} · {config.phone} ·
          <a href={`mailto:${config.email}`}>{config.email}</a>
        </div>
        <div className="mb-5">
          <p>My name is Chaye Eichenberger, nice to meet you!</p>
          <p>
            I have been in <b>Sales</b>, <b>Business Development</b>, and{' '}
            <b>Account Management</b> for 16+ years. I’ve worked for large
            companies like Gaylord Hotels and American Express, as well as start
            ups such as Emma and GoNoodle.
          </p>
          <p>
            My experience spans multiple industries, including hospitality,
            Saas, travel, entertainment, and media.
          </p>
          <p>
            While working in <b>larger companies</b>, I’ve come to understand
            the benefits of corporate structure and processes, the cadence of
            building business, and the requirements for making change.
          </p>
          <p>
            Through my time spent with <b>startups</b>, I have grown familiar
            with the drive for innovation, the need to be nimble, and the
            entrepreneurial spirit it takes to stay motivated.
          </p>
          <p>
            I recognize the benefits and limitations that both face and know how
            to successfully navigate each. I believe my biggest contributions to
            a company are my ability to <b>collaborate</b> and bring teams
            together, define strategy and <b>differentiate</b> a product or
            service, develop processes to drive <b>efficiency</b>, and build
            strong client <b>relationships</b>.
          </p>
          <p>
            I have experience with selling and actualizing business, allowing me
            to understand both top and bottom line impact. I have led diverse
            teams; managed large, cross-departmental projects; and spearheaded
            the ideation, creation, and execution of sales strategies, bespoke
            campaigns, and new products for market.
          </p>
        </div>

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
