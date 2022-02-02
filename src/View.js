import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

function View(props){
    const buildCard = () => {
        return props.profile.map((current) => (
           <> 
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
            <Card.Img as={Image} src={current.photo} fluid={true} alt="Profile image" />
              <Card.Title>{current.username}</Card.Title>
              <Card.Text>Age: {current.age}</Card.Text>
              <Card.Text>Location:{current.location}</Card.Text>
              <Card.Text>Hobbies:{current.hobby}</Card.Text>
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