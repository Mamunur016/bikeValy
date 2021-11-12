import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div style={{ background: "#F8F9FA" }}>
            <Container className='py-3'>
                <h1 className='text-center py-3 text-primary'>Welcome to BikeValy</h1>
                <p className='text-center'>
                    BikeValy.com is #1 motorcycle oriented website in Bangladesh where Bike enthusiasts from all over the country can find all the information about any bike. From motorcycle price in Bangladesh and Motorcycle Specification to the test ride reviews of various bikes and first impression reviews of any newly launched bikes. Since 2012, BikeValy is providing information to everyone across the nation about various offers from the motorcycle or related companies, news, coverage of motorcycle based or related events, and any update on any rules about motorcycle sector in Bangladesh.
                </p>
            </Container>
            <div >
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src="http://motorbike.autoshowroom.co/wp-content/uploads/2019/12/biker-407123_1920-1024x683.jpg"
                            // src="http://motorbike.autoshowroom.co/wp-content/uploads/2017/12/Suzuki-SV650-1024x682.jpg"
                            alt="First slide" style={{ height: "500px" }}
                        />
                        <Carousel.Caption>
                            <h3>2018 SUZUKI GSX250R</h3>
                            <p className='text-danger'> <b>500000 taka</b> </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            // src="https://media.istockphoto.com/photos/father-and-son-riding-motorbike-picture-id509011855?b=1&k=20&m=509011855&s=170667a&w=0&h=leVePbaRCpuLgWQdnG25DXm60nfb4Rk7dC5ElEYGdM0="
                            src="http://motorbike.autoshowroom.co/wp-content/uploads/2017/12/Suzuki-SV650-1024x682.jpg"
                            alt="First slide" style={{ height: "500px" }}
                        />
                        <Carousel.Caption>
                            <h3>SUZUKI HAYABUSA GSXR 1300</h3>
                            <p className='text-white fw-bold'>500000 taka</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src="http://motorbike.autoshowroom.co/wp-content/uploads/2019/12/wallhaven-579164-1024x683.jpg"
                            alt="First slide" style={{ height: "500px" }}
                        />
                        <Carousel.Caption>
                            <h3>Honda Cbr</h3>

                            <p className='text-white fw-bold'>500000 taka</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="http://motorbike.autoshowroom.co/wp-content/uploads/2017/12/thumb-1920-810230-1024x683.jpg"
                            alt="Second slide" style={{ height: "500px" }}
                        />
                        <Carousel.Caption>
                            <h3 className='text-white'>NEW DUCATI V4</h3>
                            <p className='text-white fw-bold'>500000 taka</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"

                            src="http://motorbike.autoshowroom.co/wp-content/uploads/2017/09/ducati_v4-1024x622.jpg"
                            alt="Third slide" style={{ height: "500px" }}
                        />
                        <Carousel.Caption>

                            <h3 className='text-white'>NEW DUCATI V4</h3>
                            <p className='text-white fw-bold'>500000 taka</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    );
};

export default Banner;