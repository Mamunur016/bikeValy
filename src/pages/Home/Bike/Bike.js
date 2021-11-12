import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Bike = ({ bike }) => {
    // console.log(bike);
    const { name, model, price, img, description, _id, engine, speed } = bike;
    return (
        <div>
            <Col>
                <Card className='p-3 border-0 shadow rounded-3' style={{ minHeight: "600px" }}>
                    <div className='text-center'>
                        <Card.Img variant="top" src={img} className='img-fluid' />
                    </div>

                    <Card.Body>

                        <Card.Title className='text-success'>{model}</Card.Title>

                        <Card.Text>
                            {description.substr(0, 150)}
                        </Card.Text>
                        <div className='d-flex justify-content-between pt-2'>
                            <div className='text-info'>
                                <b>Top-speed: {speed}</b>
                            </div>
                            <div className='text-danger'>
                                <b>Price: {price} BDT</b>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Footer className='border-0 bg-white text-center '>



                        <Link to={`/bike/${_id}`} >
                            <button className="btn btn-outline-success">Order Now</button>
                        </Link>

                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Bike;