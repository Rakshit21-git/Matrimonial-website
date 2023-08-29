import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css' 

export default function Footer() {
  return (
    <MDBFooter bgColor=''  className='f-bg-img text-center mt-5 text-lg-start text-muted footer'>
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section> */}

      <section className='pt-5 footer-width'>
        <MDBContainer className='text-center text-md-start mt-5 text-light'>
          <MDBRow className='mt-4'>
            <MDBCol md="12" lg="4" xl="3" className='mx-auto mb-4 mt-5 text-justify'>
              
              <p style={{lineHeight:'30px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </MDBCol>

            <MDBCol sm="6" md="4" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Help & support</h6>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Help
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  FQAs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Feedback
                </a>
              </p>
              {/* <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p> */}
            </MDBCol>

            <MDBCol sm="6" md="4" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick links</h6>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Our Stories
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol sm="12" md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 justify-content-center d-flex'>
              <div className='contact_div'>
              <h6 className='text-uppercase fw-bold mb-4 mx-auto'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Lorem ipsum dolor sit amet, consec
              </p>  
              <p>
                <MDBIcon icon="phone" className="pe-3 text-start" /> 986785494
              </p>
              <p>
                <div  className="me-3" ><i class="fa-solid fa-location-dot pe-3"></i>Lorem ipsum dolor sit amet, consec</div>
              </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      
    </MDBFooter>
  );
}