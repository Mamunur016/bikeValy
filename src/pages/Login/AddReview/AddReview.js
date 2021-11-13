import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        // console.log(data);
        axios.post('https://blooming-anchorage-75661.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {

                    swal({
                        title: "Good job!",
                        text: " review added successfully !",
                        icon: "success",
                    })
                    reset();
                }
            })

    };
    return (
        <div className='py-5' style={{
            backgroundColor: '#D4E3E5'
        }}>
            <Container>
                <h3>Hey <span className='text-primary'>{user.displayName},</span> <small>Please add a new review</small></h3>
                <form className="rounded py-5" onSubmit={handleSubmit(onSubmit)}>




                    <input defaultValue={user.displayName} {...register("name")} className='form-control my-3' />

                    <input defaultValue={user.email} {...register("email", { required: true })} className='form-control my-3' />
                    {errors.email && <span className="error">This field is required</span>}


                    <input placeholder="Add your profile image url" type='url' defaultValue="" {...register("img")} required className='form-control my-3' />

                    <input placeholder="Add a review title" defaultValue="" {...register("title")} className='my-4 form-control' required />




                    <textarea placeholder="Add a Bike Description" rows="5" className='my-4 form-control' defaultValue="" {...register("description")} required />

                    <input type="number" placeholder='Add your rating number' {...register("star", { min: 0, max: 5 })} required className='form-control my-3' />
                    {errors.star && <span className="text-danger d-block">Please add number between 0 to 5</span>}

                    <input type="submit" value='Submit' className=' btn btn-lg my-2 btn-outline-success  fw-bold' />
                </form>
            </Container>
        </div>
    );
};

export default AddReview;