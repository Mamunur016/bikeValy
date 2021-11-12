import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const ContractUs = () => {

    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        history.push('/thankyou')
    };
    return (
        <div className="bg-white py-5">
            <Container>
                <h1 className="text-primary pb-2">SEND US A MESSAGE</h1>
                <h6 className='text-success pb-3'>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital.</h6>

                <form className="appoinment-form" onSubmit={handleSubmit(onSubmit)} style={{
                    width: "70%"
                }}>

                    <input defaultValue={user.displayName} {...register("name")} className='form-control my-3' />

                    <input defaultValue={user.email} {...register("email", { required: true })} className='form-control my-3' />
                    {errors.email && <span className="error">This field is required</span>}



                    <input placeholder="Subject" defaultValue="" {...register("subject")} className='my-4 form-control' required />


                    <textarea placeholder="leave your message" rows="5" className='my-4 form-control' defaultValue="" {...register("description")} required />

                    <input type="submit" value='Contract' className='form-control my-2 btn-outline-success fw-bold' />
                </form>

                <Row lg={4} md={2} sm={2} xs={2} className='g-5 py-5 text-center'>




                    <Col >
                        <div className='border-one '>

                            <h2 className='me-3'><i class="fas fa-map-marker-alt"></i></h2>
                            <h6>ADDRESS
                            </h6>
                            <p> Niketan, Gulshan 1, Dhaka - 1212.</p>


                        </div>



                    </Col>
                    <Col >
                        <div className='border-one'>
                            <h2> <i class="fas fa-phone-square-alt"></i></h2>
                            <h6>CALL US</h6>
                            <p>+91 458 654 528</p>
                            <p>+91 458 654 527</p>
                        </div>


                    </Col>
                    <Col >
                        <div className='border-one'>
                            <h2><i class="far fa-envelope"></i></h2>
                            <h6>WRITE TO US</h6>
                            <p>office@travelmate.com</p>
                            <p> book@travelmate.com</p>
                        </div>


                    </Col>
                    <Col >
                        <div className=''>
                            <div>
                                <Link to='' style={{
                                    textDecoration: "none",
                                    color: "#212529"
                                }}>
                                    <h2> <i class="fas fa-first-aid"></i></h2>
                                    <h6>BOOK AN </h6>
                                    <p>Click here to book an</p>

                                </Link>
                            </div>

                        </div>

                    </Col>




                </Row>
            </Container>
        </div >
    );
};

export default ContractUs;