import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function TVs() {

  return (
    <>
      

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
   
              
   
       <center>
             <p></p>
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/1458E/production/_121124338_gettyimages-909929558.jpg" />
         <Card.Body>
           <Card.Title>Gang Bang</Card.Title>
           <Link to="./Tvgangbang"><Button variant="primary" size="lg" width="100%">
         Assistir
           </Button></Link>
         </Card.Body>
       </Card></center>
   
   
   
   
     
       </CardGroup> 
   



   

   



          <p><br /></p>







    <p></p>

    </>



  );
}

