import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Bike from '../Bike/Bike';


const Bikes = () => {
    const [bikes, setbikes] = useState([]);
    useEffect(() => {
        fetch('https://blooming-anchorage-75661.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setbikes(data));
    }, []);
    return (
        <div className='py-5' style={{
            background: "#E3E6E3"
        }}>
            <Container>
                <h3 className='text-center py-3 text-primary'>Featured Bike
                </h3>
                <h5 className='text-center pb-3 text-success'>CHOOSE YOUR NEXT BIKE</h5>
                <Row lg={3} md={2} sm={1} xs={1} className='g-3'>
                    {
                        bikes.map(bike => <Bike
                            key={bike._id}
                            bike={bike}
                        ></Bike>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Bikes;