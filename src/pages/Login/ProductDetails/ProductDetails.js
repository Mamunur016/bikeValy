import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './ProductDetails.css'

const ProductDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [productDetails, setProductDetails] = useState({});

    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.status = 'Pending';
        // console.log(data);

        axios.post('https://blooming-anchorage-75661.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                    history.push('/thankyou')
                }
            })


    };

    useEffect(() => {
        const url = `https://blooming-anchorage-75661.herokuapp.com/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetails(data))


    }, []);

    const { img, price, description, duration, title, destination, included, departure } = productDetails;
    return (
        <div className='py-5 bg-light'>
            <Container>
                <h3 className='text-success'>  {title}</h3>
                <Row>
                    <Col lg={8} md={12}>

                        <div className='py-3 '>
                            <img src={img} alt="" className='rounded' />
                        </div>
                        <p>{description}</p>

                        <div>
                            <Row className='border-top border-bottom py-2 align-items-center '>
                                <Col md={4} sm={6}>
                                    <h4>
                                        Destination</h4>
                                </Col>
                                <Col md={6} sm={6}>
                                    <h5><small> {destination}</small></h5>
                                </Col>
                            </Row>
                            <Row className='border-top border-bottom py-2 align-items-center '>
                                <Col md={4} sm={6}>
                                    <h4>
                                        Duration</h4>
                                </Col>
                                <Col md={6} sm={6}>
                                    <h5><small> {duration}</small></h5>
                                </Col>
                            </Row>
                            <Row className='border-top border-bottom py-2 align-items-center '>
                                <Col md={4} sm={6}>
                                    <h4>
                                        departure Time</h4>
                                </Col>
                                <Col md={6} sm={6}>
                                    <p><small> {departure}</small></p>
                                </Col>
                            </Row>
                            <Row className='border-top border-bottom py-2 align-items-center '>
                                <Col md={4} sm={6}>
                                    <h4>
                                        Included	</h4>
                                </Col>
                                <Col md={6} sm={6}>
                                    <p><small> {included}</small></p>
                                </Col>
                            </Row>
                        </div>
                    </Col>



                    <Col lg={4} md={12}>
                        <div className='p-4  text-white rounded text-center' style={{
                            backgroundColor: "#3F955D"
                        }}>
                            {price} BDT/Person
                        </div>
                        <div>
                            <form className="contract-form rounded py-5" onSubmit={handleSubmit(onSubmit)}>

                                <input defaultValue={user.displayName} {...register("name")} className='form-control my-3' />

                                <input defaultValue={user.email} {...register("email", { required: true })} className='form-control my-3' />
                                {errors.email && <span className="error">This field is required</span>}




                                <select className='form-control my-3'  {...register("price", { required: true })} >
                                    <option value={price}>{price}</option>


                                </select>
                                <select className='form-control my-3'  {...register("destination", { required: true })} >
                                    <option value={destination}>{destination}</option>


                                </select>



                                <input placeholder="Your Phone Number" defaultValue="" {...register("phone")} required className='form-control my-3' />

                                <input placeholder="Your Address" defaultValue="" {...register("address")} required className='form-control my-3' />

                                <input type="date" name="" id="" {...register("date")} required className='form-control my-3' />
                                <textarea placeholder="leave Your Message" rows="5" className='my-4 form-control' defaultValue="" {...register("message")} required />

                                <input type="submit" value='Book Order' className='form-control my-2 btn-outline-success fw-bold' />
                            </form>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetails;