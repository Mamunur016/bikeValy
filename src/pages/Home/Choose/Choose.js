import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Choose = () => {
    return (
        <div className='pt-5' style={{
            background: "#D4E3E5"
        }}>
            <Container>
                <h4 className='text-center py-3 text-danger'>WHY CHOOSE US?</h4>
                <Row md={2} sm={1} xs={1} className='g-4'>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <div className='me-3'>
                            <h1><i class="fas fa-certificate"></i></h1>
                        </div>
                        <div>
                            <h4>

                                HIGHLY-TRAINED STAFF</h4>
                            <p>With support members spread across the world, we provide all. We’re ready with years of experience to introduce the best places in the Wolrd.</p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <div className='me-3'>
                            <h1><i class="fas fa-check"></i></h1>
                        </div>
                        <div>
                            <h4>

                                SPECIALS</h4>
                            <p>A long Payment Confirmation process can’t support you to purchase any tour package. BikeValy has tried to complete the whole process into one call.</p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <div className='me-3'>
                            <h1><i class="fas fa-fast-forward"></i></h1>
                        </div>
                        <div>
                            <h4>
                                FAST & EFFECTIVE SERVICE</h4>
                            <p>Default is 6 months. Furthermore, you can extend support to 12 months.</p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <div className='me-3'>
                            <h1><i class="fas fa-comments"></i></h1>
                        </div>
                        <div>
                            <h4>

                                24/7 SUPPORT</h4>
                            <p>BikeValy introduces 24/7 support team via online or offline. You can reach us in every method including email, social media or phone call. Just feel free to ask anything.</p>
                        </div>
                    </Col>

                </Row>
            </Container>

            <div style={{
                backgroundImage: `url('http://motorbike.autoshowroom.co/wp-content/uploads/2019/12/motorcycle-1412424_1920-1024x683.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                minHeight: "400px"
            }} className='d-flex align-items-center'>
                {/* count section */}

                <Container>
                    <div>
                        <div className=' count py-2'>
                            <Row md={4} sm={2} xs={1} className="g-3">
                                <Col>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <h2 className='py-3 text-white'>20</h2>
                                        <div className=" py-1 px-3  text-white" style={{ background: "#FFD205" }}>
                                            HAPPY CLIENTS

                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <h2 className='py-3 text-white'>30</h2>
                                        <div className=" py-1 px-3 text-white" style={{ background: "#1BBC9B" }}>VEHICLES IN STOCK</div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <h2 className='py-3 text-white'>32</h2>
                                        <div className=" py-1 px-3  text-white" style={{ background: "#14B9D5" }}>AWARDS</div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <h2 className='py-3 text-white'>35</h2>
                                        <div className=" py-1 px-3 text-white" style={{ background: "#F76570" }}>DEALER BRANCHES</div>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </div>
                </Container>

            </div>


        </div>

    );
};

export default Choose;