import React from 'react';
import './Accueil.css';
import {Container, Row, Col} from 'react-bootstrap';


const Accueil = () => {
    return (
        <div className="accueil">

            <Container>
            
                <Row className="acc">
                    <Col sm={4} className="col1">
                        <div>
                        Bonjour, je suis
                        </div>
                        <div>
                        Développeur Web.
                        </div>
                        <div>
                        AMRI Maher
                        </div>
                        <div>
                        Développeur Web, je suis à votre disposition pour répondre à tout type de projets de création de sites internet vitrine, e-commerce, de développement spécifique ou d’applications web. 
                        </div>
                    </Col>
                    <Col sm={8} className="col2">
                        J'ai réalisé plusieurs projets en Front-End et en Back-End, notamment de l'intégration web, du responsive ainsi que de l'animation web,  je suis à votre disposition pour répondre à tout type de projets de création de sites internet vitrine, e-commerce, de développement spécifique ou d’applications web.  
                    </Col>
                </Row>
            
            </Container>
        </div>
    )
}

export default Accueil
