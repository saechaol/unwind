import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import cardImage from './card_image.jpg';

const ActivityCard = props => {
    return(
        <div>
            <Card className="activityCard" style={{borderRadius: '10px'}}>
                <Card.Body style={{
                    alignSelf: 'center'
                }}>
                    <Card.Title style={{
                        textAlign: 'center',
                    }}>
                        {props.activity_name}
                    </Card.Title>
                    <Card.Text style={{
                        textAlign: 'center',
                    }}>
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={cardImage} style={{width: '8rem', padding: '5px', height: '8rem'}}/>
            </Card>
        </div>
    );
};

export default ActivityCard;