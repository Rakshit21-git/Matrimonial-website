import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import './NavBar.css'
export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);
  const auth = localStorage.getItem('token')
  const navigation = useNavigate();
  function logout() {

    localStorage.clear();
    navigation("/")

  }


  return (
    // const status = localStorage.getItem()

    <MDBNavbar expand='lg' light className='bg-color'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img src="heart.png" alt="" className='me-5' /></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          {/* <MDBIcon icon='bars' fas /> */}

          <FaBars />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic} className='collapse-m'>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-center' >
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' className=' pe-5 nav-itemss'>

                <Nav.Link eventKey="1" href="/" className='text-light'>
                  Home
                </Nav.Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' className='pe-5 nav-itemss'>

                <Nav.Link eventKey="1" href="/ss" className='text-light'>
                  Stories
                </Nav.Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem >
              <MDBNavbarLink active aria-current='page' href='#' className='pe-5 no-wrap nav-itemss'>

                <Nav.Link eventKey="1" href="/AboutUs" className='text-light'>
                  About Us
                </Nav.Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' className='pe-5 nav-itemss'>
                <Nav.Link eventKey="1" href="/membership" className='text-light'>
                  Membership Plan
                </Nav.Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' className='pe-5 no-wrap nav-itemss'>
                <Nav.Link eventKey="1" href="/ContactUs" className='text-light'>
                  Contant us
                </Nav.Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              {
                auth ? <MDBNavbarLink active aria-current='page' href='#' className='pe-5 no-wrap nav-itemss'>
                  Membership Plan
                </MDBNavbarLink> : <MDBNavbarLink active aria-current='page' href='#' className='pe-5 no-wrap nav-itemss'>

                </MDBNavbarLink>
              }
            </MDBNavbarItem>
            <MDBNavbarItem>
              {
                auth ? <MDBNavbarLink active aria-current='page' href='#' className='pe-5 no-wrap nav-itemss'>
                  Arun
                </MDBNavbarLink> : <MDBNavbarLink active aria-current='page' href='#' className='pe-5 no-wrap nav-itemss'>

                </MDBNavbarLink>
              }
            </MDBNavbarItem>
            <MDBNavbarItem>
              {
                auth ? <NavDropdown className='drop' title="" id="basic-nav-dropdown">
                  <NavDropdown.Item className='' href="#action/3.1">Dashboard</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Privacy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Change Password</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" onClick={logout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown> : <MDBNavbarLink active aria-current='page' href='#' className='pe-5 no-wrap nav-itemss'>

                </MDBNavbarLink>
              }
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' className='pe-5 no-wrap nav-itemss'>
                Arun
              </MDBNavbarLink>
            </MDBNavbarItem> */}


            {/* dropdown */}


          </MDBNavbarNav>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a class="dropdown-item" href="/">My profile</a>
            </li>
            <li>
              <a class="dropdown-item" href="/">Settings</a>
            </li>
            <li>
              <a class="dropdown-item" href="/">Logout</a>
            </li>
          </ul>

          <NavLink className='login-btn btn' to="/LogIn">Log In</NavLink>
          <NavLink className='register-btn me-1 ms-3 btn' to="/Register">Register</NavLink>

        </MDBCollapse>

      </MDBContainer>
    </MDBNavbar>
  );
}