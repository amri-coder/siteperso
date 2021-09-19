import React from 'react';
import './Accueil.css';
import {Container, Row, Col} from 'react-bootstrap';
import Typography from '@mui/material/Typography';



function Accueil (){
    
    return (
        <div className="accueil">

            <Container>
            
                <Row className="acc">

                    <Col sm={4} className="col1">

                        <Typography>
                        Bonjour, je suis
                        </Typography>
                        
                        <Typography>
                        Développeur Web.
                        </Typography>

                        <Typography>
                        AMRI Maher
                        </Typography>

                        <Typography>
                        Développeur Web, je suis à votre disposition pour répondre à tout type de projets de création de sites internet vitrine, e-commerce, de développement spécifique ou d’applications web. 
                        </Typography>


                    </Col>

                    <Col sm={8} className="col2">

                        <Typography variant='body1'>
                            J'ai réalisé plusieurs projets en Front-End et en Back-End, notamment de l'intégration web, du responsive ainsi que de l'animation web,  je suis à votre disposition pour répondre à tout type de projets de création de sites internet vitrine, e-commerce, de développement spécifique ou d’applications web.  
                        </Typography>
                    
                    </Col>

                </Row>
            
            </Container>
        </div>
    )
}

export default Accueil
