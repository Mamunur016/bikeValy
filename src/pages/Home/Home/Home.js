import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Bike from '../Bike/Bike';
import Bikes from '../Bikes/Bikes';
import Choose from '../Choose/Choose';
import News from '../News/News/News';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [bikes, setbikes] = useState([]);
    useEffect(() => {
        fetch('https://blooming-anchorage-75661.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setbikes(data));
    }, []);
    return (
        <div >

            <Header></Header>
            <Banner></Banner>
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
                            ></Bike>).slice(0, 6)
                        }
                    </Row>

                    <div className='py-5 text-center'>
                        <button className='btn btn-success px-4'> <Link to='/services' style={{
                            textDecoration: "none",
                            color: "white"
                        }}>Sell all</Link> </button>
                    </div>
                </Container>
            </div>
            {/* <Bikes></Bikes> */}
            <News></News>
            <Choose></Choose>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;