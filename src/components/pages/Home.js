import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


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
  
        
        <Card>
      <Card.Body><Link to="/Filmes"><Button variant="primary" size="lg" width="100%">
          Filmes
        </Button></Link></Card.Body>
    </Card>


    <Card>
      <Card.Body><Link to="/TVs"><Button variant="primary" size="lg" width="80%">
        TVs
        </Button></Link></Card.Body>
    </Card>

      
    <Card>
      <Card.Body>Conteúdo adulto. Para maoires de 18 anos</Card.Body>
    </Card>
   
    <Card>
      <Card.Body>O site PORNO APP é uma plataforma para assistir filmes e séries online, Esta página funciona com base nas últimas tecnologias lançadas nesta geração voltada ao uso de inteligência artificial, robots e API de dados, ou seja, não hospedamos vídeos em nossos servidores, apenas, de forma automática, indexamos os arquivos que são capturados pela web, nos tornando completamente legais e dentro da lei. O uso desta plataforma é de total responsabilidade do usuário. Qualquer violação de direitos autorais, entre em contato com o distribuidor. Em caso de dúvidas ou reclamações sobre o conteúdo, entre em contato conosco para obter a devida ajuda.</Card.Body>
    </Card>
          
  
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
