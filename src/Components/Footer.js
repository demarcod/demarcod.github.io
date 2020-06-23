import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return(
        <footer className="mt-4">
            <Container className="footer header-footer" fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={9} sm={12}>
                        Copyright © Donnatella DeMarco {(new Date().getFullYear())}
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                    <div className="footer-links">
                        {/* GitHub */}
                        <a href="https://github.com/demarcod" title="Github" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github" aria-hidden="true" />
                        </a>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/donnatella/" title="LinkedIn" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/missdonnatella/" title="Instagram" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                        {/* Facebook */}
                        <a href="https://www.facebook.com/donnatella.demarco" title="Facebook" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-facebook" aria-hidden="true" />
                        </a>                                                                                              
                    </div>

                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;