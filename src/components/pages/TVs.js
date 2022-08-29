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

   

   



          <p><br /></p>



        </nav></h1>
       



    <p></p>

    </>



  );
}

