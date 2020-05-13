import React from 'react';
import styled from 'styled-components';
import { Row, Col, Container } from 'reactstrap';

//
//
const Recommendation = ({ name, title, company, text, link }) => {
  return (
    <>
      <blockquote className="blockquote ">
        <p>{text}</p>
        <footer className="blockquote-footer text-right">
          <a href={link} target="_blank" rel="noopener">
            <b className="mb-0">{name}</b>
          </a>
          <div className="text-dark">{title}</div>
          <div>{company}</div>
        </footer>
      </blockquote>
      <hr />
      <div style={{ padding: '2rem' }}> </div>
    </>
  );
};

export default Recommendation;
