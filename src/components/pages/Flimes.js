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


export default function Filmes() {

  return (
  <center>
    
    <div>
      <div className='home'>
      <div className="nave">
      <div className="mb-2">

      </div></div></div>
      
        <nav>


        <CardGroup>
       
    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/bhbPSpYjsRJAK7rXqL8APK9EwBl.jpg" />
      <Card.Body>
        <Card.Title>Pornô</Card.Title>
        <Link to="./Pornof"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

           
    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3kTPSWzNV5ui43eUSN790Q9lVEt.jpg" />
      <Card.Body>
        <Card.Title>Porn Star</Card.Title>
        <Link to="./Pornosj"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5wxor2rzqQnGlm6MXvnamg6L1Kw.jpg" />
      <Card.Body>
        <Card.Title>Daddy Please</Card.Title>
        <Link to="./Daddyp"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://imgs1cdn.adultempire.com/products/55/474455h.jpg" />
      <Card.Body>
        <Card.Title>Teen Drive 3</Card.Title>
        <Link to="./Teend3"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://imgs1cdn.adultempire.com/products/81/2659481h.jpg" />
      <Card.Body>
        <Card.Title>Brazilian 1</Card.Title>
        <Link to="./Braziliantl1"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://imgs1cdn.adultempire.com/products/81/2659481h.jpg" />
      <Card.Body>
        <Card.Title>Filmes lista</Card.Title>
        <Link to="./Videosc"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>




  
    </CardGroup> 

          
  
        </nav>

    <Container fluid="md">
      <Row>
        <Col></Col>
      
      </Row>
      <Row>
      <Col></Col>
      </Row>
    </Container>
       

        <p><br /></p></div></center>


   
    
        
         
  );
}
