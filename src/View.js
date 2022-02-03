import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function View(props){
    const buildCard = () => {
        return props.profile.map((current) => (
           <> 
            <Card.Body>
            <Card.Img variant="top" as={Image} src={current.photo} fluid={true} alt="Profile image" />
              <Card.Title>{current.username}</Card.Title>
              <Card.Text>Age: {current.age}</Card.Text>
              <Card.Text>Location:{current.location}</Card.Text>
              <Card.Text>Hobbies:{current.hobby}</Card.Text>
              <Card.Img variant="bottom" className="like" as={Image} src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-11-512.png" fluid={true} alt="Profile image" />
              </Card.Body>
              <br />
              </>
        ));
      };

    return(
        <Card style={{ width: '22rem' }}>
        {buildCard()}
        </Card>
      )
}
export default View;