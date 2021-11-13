import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Carousel, Container, Row } from 'react-bootstrap';
import New from '../New/New';
import './News.css'

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://blooming-anchorage-75661.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setNews(data))
    }, []);




    return (
        <div className='news-container pb-5 pt-4' style={{ backgroundColor: "#F1F1F1" }}>
            <Container>
                <h2 className='text-center text-primary py-3'>BikeValy MAGAZINE</h2>
                <h5 className='text-center text-muted py-3'>Read our latest news from the company or generel news. Feel free to ask questions in comments for any news you find interesting.</h5>
                <Row xl={3} lg={2} md={2} sm={1} xs={1} className='g-3'>
                    {

                        news.map(blog => <New
                            blog={blog}
                            key={blog.title}

                        ></New>)




                    }
                </Row>
                {/* <Carousel className='py-5'>
                    {

                        news.map(blog =>
                            <Carousel.Item interval={3000} style={{ minHeight: "550px" }} >

                                <Card className='p-3 border-0 shadow rounded-3 ' style={{ minHeight: "500px" }} >
                                    <div className=''>
                                        <Card.Img variant="top" src={blog.img} />

                                        <div className="text-muted d-flex justify-content-between py-2">
                                            <div><small>{blog.date}</small></div>
                                            <div><small>{blog.editor}</small></div>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className='text-success'>{blog.title}</Card.Title>
                                        <Card.Text>
                                            <div><small>{blog.description}</small></div>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className='border-0 bg-white '>









                                    </Card.Footer>
                                </Card>
                            </Carousel.Item>

                        )




                    }
                </Carousel> */}


            </Container>
        </div>
    );
};

export default News;