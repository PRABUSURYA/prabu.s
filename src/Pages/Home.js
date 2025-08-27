import React from 'react';
import '../Styles/Home.css';
import { Col, Row, Form, Button, InputGroup, Dropdown } from 'react-bootstrap';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel';
import Image from './Image';

function Home() {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search initiated!');
  };

  return (
    <div>
      <NavBar />
      <div className='overlay'>
        <Carousel/>
        <div 
          className='bottom-left'
          style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}
        >
          <h1 className='fw-bold'>Welcome to Travelo</h1>
          <p className='fs-4'>Your gateway to unforgettable journeys</p>
          <button className='btn btn-primary px-4 py-2 rounded-pill'>Get Started</button>
        </div>

        <div className='counter-text' style={{ position: 'absolute', bottom: '15px', width: '100%' }}>
          <Col className='mt-5 p-4 rounded w-75 mx-auto text-white' >
            <Row className='text-center'>
              <Col>
                <h2 className='fw-bold'>500+</h2>
                <p className='fs-5'>Destinations</p>
              </Col>
              <Col>
                <h2 className='fw-bold'>1200+</h2>
                <p className='fs-5'>Tours</p>
              </Col>
              <Col> 
                <h2 className='fw-bold'>800+</h2>
                <p className='fs-5'>Happy Clients</p>
              </Col>
            </Row>
          </Col>
        </div>
      </div>

      <div className="p-2 mb-4" style={{ backgroundColor: "rgba(255, 133, 133, 0.43)" }}>
        <Row className='justify-content-center'>
          <Col md={10} lg={8} xl={6}>
            <Form onSubmit={handleSearch}>
              <div className="fw-bold fs-5 flex-wrap text-white py-1">Where you want to go?</div>
              <div className="d-flex gap-3 align-items-center">
                
                <InputGroup className="flex-grow-1">
                  <Form.Control type='text' placeholder="Where to go" />
                </InputGroup>
                
                <InputGroup className="flex-grow-1">
                  <Form.Control type='date' />
                </InputGroup>

                <Dropdown as={InputGroup} className="flex-grow-1">
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Select a category
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Button variant="primary" type="submit" className="px-4 py-2 rounded-pill">
                  Search
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div className='container'>
        <p className='text-center' style={{fontSize: '38px', fontWeight: 'bold'}}>
          Popular Destination
        </p>
        <p className='text-center fs-5'>
          Suffered alteration in some form, by injected humour or good day
          <p>randomised booth anim 8-bit hella wolf moon beard words.</p>
        </p>
      </div>
      <Image/>
    </div>
  );
}

export default Home;