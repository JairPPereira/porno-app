import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function TVs() {

  return (
    <>
      <h1 className='tvs'>

        <nav>
          <p><br /></p>

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

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOXRvpP5kAvyvbf2SmkG33bSBJL_jbXX2y915Aezc_yA3mZ63KU3mm4sCVGplct6N7U4HQhGkFEd59lmKF0RGYGivtaGTIrBTv28yqoXb5y50nk8dSXAskf40Fpo4fHayk60tSQgiEFIffDtlXW7NiCLbj10ioNWeCXOFNY_Wlli5zxDrsmPxa8Xm5/s320/Captura%20de%20tela%202022-08-30%20082445.png" />
      <Card.Body>
        <Card.Title>Gang Bang</Card.Title>
        <Link to="./Tvgangbang"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

   

   



          <p><br /></p>



        </nav></h1>
       



    <p></p>

    </>



  );
}

