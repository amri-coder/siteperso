import React from 'react';
import './Accueil.css';
import {Container} from 'react-bootstrap';
import img from '../images/accueil.jpg';

function Accueil (){
    
    return (
        <div className="accueil">

            <Container>
                <img src={img} alt="accueil" width="100%" height="100%"/>
            </Container>
        </div>
    )
}

export default Accueil
