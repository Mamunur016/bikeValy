import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css'
const Review = ({ review }) => {
    const { img, title, name, description, star } = review;
    return (
        <div>
            <Col>
                <Card className='p-3 border-0 shadow rounded-3 ' style={{ minHeight: "600px" }}>
                    <div className='text-center'>
                        <Card.Img variant="top" src={img} style={{
                            width: '250px', height: '250px',
                            borderRadius: "50%"
                        }} />

                    </div>
                    <Card.Body>
                        <Card.Title className='text-success'>{title}</Card.Title>
                        <Card.Text>
                            <p><small>{description.substr(0, 200)}</small></p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='border-0 bg-white text-center '>
                        <p>     <Rating readonly
                            initialRating={star}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                        ></Rating></p>


                        <p className="text-danger">{name}</p>





                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Review;