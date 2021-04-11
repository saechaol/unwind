import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import cardImage from './card_image.jpg';

const DashboardCard = props => {
    return(
        <div style={{padding: '10px'}}>
            <Card className="dashboard-card" style={{borderRadius: '10px', width: '18rem'}}>
                <Card.Body style={{
                    alignSelf: 'center'
                }}>
                    <Card.Title style={{
                        textAlign: 'center',
                    }}>
                        {props.activity_name}
                    </Card.Title>
                </Card.Body>
                <Card.Img variant="bottom" src={cardImage} style={{width: '16.5rem', padding: '5px'}}/>
            </Card>
        </div>
    );
};

export default DashboardCard;