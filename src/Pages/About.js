import React from 'react'
import '../Styles/Home.css'
import { Col, Row } from 'react-bootstrap'
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel';

function About() {
  return (
    <div>
      <NavBar/>
      <div className='overlay'>
        <Carousel/>
        <div className='bottom-left p-70'
          style={{position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white'}}>
            <h1 className='fw-bold'>About Travelo</h1>
            <p className='fs-4'>Your gateway to unforgettable journeys</p>
            <button className='btn btn-primary px-4 py-2 rounded-pill'>Get Started</button>
            </div>
          <div className='box' style={{position: 'absolute', bottom: '20px', width: '100%'}}>
          <Col className='mt-5 p-4 rounded shadow-lg w-75 mx-auto 'style={{backgroundColor: 'rgba(255, 255, 255, 0.72)'}}>
            <Row className='text-center'> 
              </Row>

          </Col>
          </div>
          
      </div>
      </div>
  )

}

export default About 