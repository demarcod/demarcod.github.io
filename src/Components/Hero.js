import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="main-titles font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                        { props.text && <h3 className="lead font-weight-light" style={{ fontFamily: 'Lato' }}>
                            A PDF version of my resume can be downloaded <a href="Donnatella_Resume_PDF.pdf" download>here</a>. Otherwise, feel free to browse the timeline below!</h3> }
                        { props.text2 && <h3 className="lead font-weight-light" style={{ fontFamily: 'Lato' }}>
                            Welcome to my projects page! Feel free to look around and use the filters below to view my projects by skill.</h3> }
                        { props.text3 && <h3 className="lead font-weight-light" style={{ fontFamily: 'Lato' }}>
                            Got any questions? Want to collaborate? Reach out using any of the options below and I'll get back to you as soon as possible!</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;