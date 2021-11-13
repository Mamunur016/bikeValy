import React from 'react';
import { Card, Col } from 'react-bootstrap';

const New = ({ blog }) => {
    const { description, img, title, date, editor } = blog;
    return (
        <div>
            <Col>
                <Card className='p-3 border-0 shadow rounded-3 ' style={{ minHeight: "650px" }}>
                    <div className=''>
                        <Card.Img variant="top" src={img} />

                        <div className="text-muted d-flex justify-content-between py-2">
                            <div><small>{date}</small></div>
                            <div><small>{editor}</small></div>
                        </div>
                    </div>
                    <Card.Body>
                        <Card.Title className='text-success'>{title}</Card.Title>
                        <Card.Text>
                            <div><small>{description.substr(0, 250)}</small></div>
                        </Card.Text>
                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};

export default New;