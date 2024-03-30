import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function App() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Task-1</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Article
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
                <MDBNavbarLink aria-current='page' href='#'>
                Card
                </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
                <MDBNavbarLink aria-current='page' href='#'>
                Table
                </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
                <MDBNavbarLink disabled aria-current='page' href='#'>
                Footer
                </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}