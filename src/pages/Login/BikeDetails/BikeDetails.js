import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const BikeDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [bikeDetails, setBikeDetails] = useState({});

    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const today = new Date();

    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const onSubmit = data => {
        data.status = 'Pending';
        console.log(data);

        axios.post('https://blooming-anchorage-75661.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "ordered successfully !",
                        icon: "success",
                    })
                        .then((update) => {
                            if (update) {
                                history.push('/thankyou')
                            }
                        })

                    reset();

                }
            })


    };

    useEffect(() => {
        const url = `https://blooming-anchorage-75661.herokuapp.com/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBikeDetails(data))


    }, []);

    const { name, model, price, img, description, displacement, _id, engine, speed, mileage, bikeEngine, maximumPower, maximumTorque, numberOfCylinder, } = bikeDetails;
    return (
        <div>
            <Header></Header>
            <div className='py-5 bg-light'>
                <Container>
                    <h3 className='text-success'>  {model}</h3>
                    <Row>
                        <Col lg={8} md={12}>

                            <div className='py-3 '>
                                <img src={img} alt="" className='rounded' />
                            </div>
                            <p>{description?.substr(0, 1200)}</p>

                            <Table striped bordered hover responsive >


                                <thead class="table-success">
                                    <tr>
                                        <td colSpan='12'><h4 className='text-success'>Top Features</h4></td>
                                    </tr>
                                </thead>
                                <tbody className='p-2'>
                                    <tr>
                                        <td>Name</td>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <td>Model</td>
                                        <td >{model}</td>
                                    </tr>
                                    <tr>
                                        <td>Engine Type</td>
                                        <td>{bikeEngine}</td>

                                    </tr>
                                    <tr>
                                        <td>Displacement</td>
                                        <td >{displacement}</td>

                                    </tr>
                                    <tr>
                                        <td>Top Speed</td>
                                        <td >{speed}</td>

                                    </tr>
                                    <tr>
                                        <td>Mileages</td>
                                        <td >{mileage} kmpl</td>

                                    </tr>
                                    <tr>
                                        <td>Max Power</td>
                                        <td >{maximumPower}</td>

                                    </tr>
                                    <tr>
                                        <td>Max Torque</td>
                                        <td >{maximumTorque}</td>

                                    </tr>
                                    <tr>
                                        <td>No. of Cylinders</td>
                                        <td >{numberOfCylinder}</td>

                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td >{price}</td>

                                    </tr>
                                </tbody>
                            </Table>


                        </Col>



                        <Col lg={4} md={12}>
                            <div className='p-4  text-white rounded text-center' style={{
                                backgroundColor: "#3F955D"
                            }}>
                                {price} BDT/Bikes
                            </div>
                            <div>
                                <form className="contract-form rounded py-5" onSubmit={handleSubmit(onSubmit)}>

                                    <input defaultValue={user.displayName} {...register("name")} className='form-control my-3' />

                                    <input defaultValue={user.email} {...register("email", { required: true })} className='form-control my-3' />
                                    {errors.email && <span className="error">This field is required</span>}



                                    <select className='form-control my-3'  {...register("price", { required: true })} >
                                        <option value={price}>{price}</option>


                                    </select>
                                    <select className='form-control my-3'  {...register("model", { required: true })} >
                                        <option value={model}>{model}</option>


                                    </select>
                                    <select className='form-control my-3'  {...register("img", { required: true })} >
                                        <option value={img}>{img}</option>


                                    </select>
                                    <select className='form-control my-3'  {...register("date", { required: true })} >
                                        <option value={date}>{date}</option>


                                    </select>








                                    <input placeholder="Your Phone Number" defaultValue="" {...register("phone")} required className='form-control my-3' />

                                    <input placeholder="Your Address" defaultValue="" {...register("address")} required className='form-control my-3' />


                                    <textarea placeholder="leave Your Message" rows="5" className='my-4 form-control' defaultValue="" {...register("message")} required />

                                    <input type="submit" value='Book Order' className='form-control my-2 btn-outline-success fw-bold' />
                                </form>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BikeDetails;