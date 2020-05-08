import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';
import styled from 'styled-components';
import chaye from '../assets/images/chaye.png';
import config from '../../config';

import {
  Collapse,
  Button,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

const Sidebar = () => {
  const tabs = [
    { content: 'About', href: 'about' },
    { content: 'Experience', href: 'experience' },
    { content: 'Education', href: 'education' },
    { content: 'Interests', href: 'interests' },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <NavbarBrand href="#page-top">
          <span className="d-block d-lg-none">
            {config.firstName} {config.lastName}
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={chaye}
              alt=""
            />
          </span>
        </NavbarBrand>
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(old => !old)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`#${href}`}>
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}
          </Scrollspy>
        </div>
      </nav>
      <StyledDropdown className="dropdown">
        <Collapse isOpen={menuOpen} className="navbar-collapse ">
          <Nav className="navbar-nav">
            {tabs.map(({ href, content }, i) => {
              return (
                <NavItem
                  className="pr-4"
                  key={href}
                  action
                  onClick={() => setMenuOpen(false)}
                >
                  <NavLink href={`#${href}`}>{content}</NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Collapse>
      </StyledDropdown>
    </>
  );
};

export default Sidebar;

const StyledDropdown = styled.div`
  width: 100%;
  text-align: right;
  text-transform: uppercase;
  background: #ffffffd9;
`;
