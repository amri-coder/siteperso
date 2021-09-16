import React from 'react';
import './Accueil.css';
import {Container, Row, Col} from 'react-bootstrap';


const Accueil = () => {
    return (
        <Container>
           
            <Row className="acc">
                <Col sm={4} className="col1">
                    <div>
                     Bonjour, je suis Amri Maher
                     </div>
                     <div>
                    Développeur Web.
                    </div>
                </Col>
                <Col sm={8} className="col2">
                    AMRI Maher
                </Col>
            </Row>
           
        </Container>
    )
}

export default Accueil
