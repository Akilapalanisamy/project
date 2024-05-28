import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'; // Import the navigate function from react-router-dom

const Sign =()=> {
  const navigate = useNavigate();
  const condition = true;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (condition) {
      // If condition is met, navigate to '/Navbar'
      navigate('/Navbar');
    } else {
      // If condition is not met, log a message
      console.log('Please fill in all fields');
    }
  }
  return (
    <MDBContainer className="my-5 position-fixed justify-content-center" style={{ maxWidth: '600px', marginLeft:'1000px',marginRight:'500px'}} onSubmit={handleSubmit}>
      <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100 h-1000' style={{ objectFit: 'cover' }}/>
          </MDBCol>
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
              </div>
              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
              <label>Email</label>
              <MDBInput wrapperClass='mb-4' id='formControlLg' type='email' size="lg"/>
              <label>Password</label>
              <MDBInput wrapperClass='mb-4' id='formControlLg' type='password' size="lg"/>
              <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>
              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Sign;
