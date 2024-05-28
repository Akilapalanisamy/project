import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);

  return (
    <>
      <header className="header">
        <MDBNavbar expand='lg' sticky light bgColor='pink' className="nav">
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIpyASFtiSj_NKVb1bxL68TUVKmCj4lgfM_Q&s'
                height='100'
                alt=''
                loading='lazy'
              />
            </MDBNavbarBrand>
            <MDBNavbarToggler
              type='button'
              data-target='#navbarTogglerDemo02'
              aria-controls='navbarTogglerDemo02'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setOpenNavNoTogglerSecond(!openNavNoTogglerSecond)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar open={openNavNoTogglerSecond}>
              <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' href='/'>
                    <h4>Home</h4>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/Aboutus'><h4>About</h4></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/CoursePage' tabIndex={-1} aria-disabled='true'>
                    <h4>Course</h4>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/Teacher' tabIndex={-1} aria-disabled='true'>
                    <h4>Teacher</h4>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/Cart' tabIndex={-1} aria-disabled='true'>
                    <h4>Cart</h4>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/Contact' tabIndex={-1} aria-disabled='true'>
                    <h4>Contact</h4>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem style={{ marginRight: 'auto' }}>
                  <MDBNavbarLink href='/register' tabIndex={-1} aria-disabled='true'>
                    <MDBBtn outline color="dark" className="btn-lg">SignIn</MDBBtn>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem style={{ marginRight: 'auto' }}>
                  <MDBNavbarLink href='/Form' tabIndex={-1} aria-disabled='true'>
                    <MDBBtn outline color="dark" className="btn-lg">LogIn</MDBBtn>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </header>
    </>
  );
}
