import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {

  return (
  <center>
    
    <div>
      <div className='home'>
      <div className="nave">
      <div className="mb-2">

      </div></div></div>
      
        <nav>
        <p><br /></p>

        <CardGroup>
       
    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/1458E/production/_121124338_gettyimages-909929558.jpg" />
      <Card.Body>
        <Card.Title>Pornhub</Card.Title>
        <Link to="./Pornoh"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>
  
    </CardGroup> 

          
  
        </nav>

    <Container fluid="md">
      <Row>
        <Col>Ajude a manter nosso site</Col>
      
      </Row>
      <Row>
      <Col>Pix: jairppereira21@gmail.com</Col>
      </Row>
    </Container>
       

        <p><br /></p></div></center>


   
    
        
         
  );
}
