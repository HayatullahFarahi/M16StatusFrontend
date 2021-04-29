import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='color-nav' variant='dark'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>M16Status</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
              <Nav.Link>
                Search M16
                <i
                  style={{ paddingLeft: '0.5rem' }}
                  className='fas fa-search'
                ></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
