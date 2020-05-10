import React from 'react';
import { Container } from 'reactstrap';
import Reference from './Reference';
const ReferencesSection = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="references"
    >
      <div className="w-100">
        <h2 className="mb-5">References</h2>
        <Container>
          <Reference
            name="Michael Downs"
            title="Vice President of Client Solutions"
            company="Momentum Inc."
            relation="Direct Supervisor at Emma"
            link="https://www.linkedin.com/in/iammichaeldowns/"
          />

          <Reference
            name="Nichol Druckemiller"
            title="Sr. Manager-Customer Journey & Experience"
            company="American Express"
            relation="Colleague at American Express"
            link="https://www.linkedin.com/in/nichol-druckemilller-91032199/"
          />

          <Reference
            name="Michael Connors"
            title="Senior Vice President of Brand Partnerships"
            company="GoNoodle"
            relation="Direct Supervisor at GoNoodle"
            link="https://www.linkedin.com/in/mikeconnorsjr/"
          />

          <Reference
            name="Abby Pecoriello"
            title="Co-Founder, SVP Content Development & Production"
            company="GoNoodle"
            relation="Colleague at GoNoodle"
            link="https://www.linkedin.com/in/abbypec/"
          />
        </Container>
      </div>
    </section>
  );
};

export default ReferencesSection;
