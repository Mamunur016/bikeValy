
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (

        <div className='footer'>
            <Container>
                <Row>
                    <Col >
                        {/* <h4>AlMamun</h4> */}
                        <p><small>
                            <img src="https://www.bikevaly.com/assets/img/logo.png" alt="" /></small></p>
                        <p>BikeValy.com is the first and largest website about motorcycle in Bangladesh. We have started our journey since 25th January 2012. We have experienced and hard working team and our prime goal is to provide motorcycle related necessary information to the visitors in easy way.</p>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <h4 className='py-2'>Follow Us
                        </h4>

                        <div>
                            <Link to='' className='nav-item-footer'>
                                <div className='d-flex  '>
                                    <h4 className="me-3"><i class="fab fa-facebook"></i></h4>
                                    <p>Facebook</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to='' className='nav-item-footer'>
                                <div className='d-flex  '>
                                    <h4 className="me-3"><i class="fab fa-instagram"></i></h4>
                                    <p>Instagram</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to='' className='nav-item-footer'>
                                <div className='d-flex  '>
                                    <h4 className="me-3"><i class="fab fa-twitter"></i></h4>
                                    <p>Twitter</p>
                                </div>
                            </Link>
                        </div>


                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <h4 className='py-2'>
                            Quick Link</h4>
                        <p><Link to='/ourteam' className='nav-item-footer'>Our Team</Link></p>


                        <p>  <Link to='/about' className='nav-item-footer'>
                            About Us
                        </Link></p>
                        <p>  <Link to='/contractus' className='nav-item-footer'>
                            Contract Us
                        </Link></p>


                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <h4 className='py-2'>

                            Emergency number</h4>

                        <h5 className="text-danger">+91 458 654 528</h5>
                        <p>
                            Call us now if you are in a  emergency need, we will reply swiftly and provide you with a information aid.
                        </p>

                    </Col>
                </Row>
                <hr />
                {/* foooter bottom */}
                <Row>
                    <Col md={6}>Designed & Developed by AlMamun</Col>
                    <Col md={6} >
                        <p className="text-end">
                            © Copyright 2021 AlMamun All rights reserved.
                        </p>

                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Footer;