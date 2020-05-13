import React from 'react';
import { Container } from 'reactstrap';
import Recommendation from './Recommendation';
//
//
const RecommendationSection = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="recommendations"
    >
      <div className="w-100">
        <h2 className="mb-5">Recommendations</h2>
        <Container>
          <Recommendation
            name="George Flattery"
            title="Assistant Manager, Digital Marketing"
            company="Paramount Pictures"
            text="I cannot speak more highly of Chaye and all of her talents and capabilities. Having worked with her on multiple campaigns, everyone on my team knew we were in fantastic hands when Chaye was a part of the process. Her passion for each project created an atmosphere of true partnership and understanding. One of my favorite things about working with Chaye was her ability to take our notes and suggestions and weave them beautifully together with the goals and overarching KPIs of our programs. Her personality was the cherry on top, with her excitement and fun-loving nature shining through all correspondence and making each interaction a joy, even in the face of adapting to changing factors of a project. If you’re looking for someone who has equal parts leadership, partnership and heart, look no further than to Chaye."
          />
          <Recommendation
            name="Adriend Schriefer"
            title="Director, Brand Partnerships"
            company="GoNoodle"
            text="Chaye has been great to work with over the past year at GoNoodle. As VP of Sales Strategy and Account Management, Chaye was vital in the growth of our media and partnerships business. She developed our go-to-market strategy as well as our partnership ideations for specific brands. Chaye project managed our custom executions as well as overseeing account management of our accounts. End-to-end, Chaye directly contributed to the success of all of our media business. On a personal level, Chaye was excellent at developing close client relationships with our partners. I can’t say enough about Chaye’s work ethic and her desire to succeed and help those around her succeed. Chaye is a must hire if you are looking for sales strategy and revenue growth."
          />
          <Recommendation
            name="Michael Connors"
            title="Senior Vice President, Brand Partnerships"
            company="GoNoodle"
            text={`I worked directly with Chaye for over 2 years at GoNoodle, and our success is directly attributed to the amazing work she contributed every single day! During the time we worked together we developed a sales strategy and the supporting structure to double our media and entertainment partnership sales revenue YOY. Chaye played a central role in our success on both the front end and back end of partnerships including: 1.) development of general positioning and materials; 2.) client specific proposals including creative ideation; 3.) project management of custom campaign elements, including complicated video production; 4.) campaign implementation and management; and 5.) campaign summaries and insights. In addition to the incredible amount of work Chaye contributed, her ability to connect with clients on both a professional and personal level was critical to our ability to develop long-term partnerships with many of our media and entertainment clients. Chaye's tireless and smart work directly led to our success and I would highly recommend hiring Chaye if you are looking to grow revenue and strengthen client relationships!`}
          />
          <Recommendation
            name="KC Estenson"
            title="CEO"
            company="GoNoodle"
            text={`Chaye is an incredible professional. She is smart, dedicated and easy to work with. In her time at GoNoodle, she helped to shape and secure many of our key partnerships. She carries my highest recommendation and will be an asset to any team she works with.`}
          />
          <Recommendation
            name="Alyssa Taifi"
            title="MSHR - Regional Retail Admin"
            text={`Chaye is one of the most creative people I have had the pleasure of working with. She is very passionate about providing excellent customer service and is able to adjust her communication style in order to maximize efficiencies and build strong working relationships. Chaye is self motivated and driven to achieve her goals and that of the department she is supporting. Her time managment skills and multi tasking are some of her greatest talents along with the ability to grow others. Her desire to see the people around her succeed is contagious and under her supervision several of her direct reports were promoted. She shares her skills to better others. She was an asset to our team and would be to any organization.`}
          />
        </Container>
      </div>
    </section>
  );
};

export default RecommendationSection;
