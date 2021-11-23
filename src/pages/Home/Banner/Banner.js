import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div style={{ background: "#F8F9FA" }}>

            <div >
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src="http://motorbike.autoshowroom.co/wp-content/uploads/2019/12/biker-407123_1920-1024x683.jpg"
                            // src="http://motorbike.autoshowroom.co/wp-content/uploads/2017/12/Suzuki-SV650-1024x682.jpg"
                            alt="First slide" style={{ height: "500px" }}
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            // src="https://media.istockphoto.com/photos/father-and-son-riding-motorbike-picture-id509011855?b=1&k=20&m=509011855&s=170667a&w=0&h=leVePbaRCpuLgWQdnG25DXm60nfb4Rk7dC5ElEYGdM0="
                            src="http://motorbike.autoshowroom.co/wp-content/uploads/2017/12/Suzuki-SV650-1024x682.jpg"
                            alt="First slide" style={{ height: "500px" }}
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src="http://motorbike.autoshowroom.co/wp-content/uploads/2019/12/wallhaven-579164-1024x683.jpg"
                            alt="First slide" style={{ height: "500px" }}
                        />

                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="http://motorbike.autoshowroom.co/wp-content/uploads/2017/12/thumb-1920-810230-1024x683.jpg"
                            alt="Second slide" style={{ height: "500px" }}
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"

                            src="http://motorbike.autoshowroom.co/wp-content/uploads/2017/09/ducati_v4-1024x622.jpg"
                            alt="Third slide" style={{ height: "500px" }}
                        />

                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    );
};

export default Banner;