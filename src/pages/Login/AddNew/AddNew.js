import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AddNew = () => {
    const { user } = useAuth();
    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        // console.log(data);
        axios.post('https://blooming-anchorage-75661.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "You add a product!",
                        icon: "success",
                    });
                    reset();
                }
            })
        // history.push('/thankyou')
    };

    return (
        <div className='py-5' style={{
            backgroundColor: '#D4E3E5'
        }}>
            <Container>
                <h3>Hey <span className='text-primary'>{user.displayName} ,</span> <small>Please add a new MotorsBike</small></h3>

                <form className="rounded py-5" onSubmit={handleSubmit(onSubmit)}>





                    <input placeholder="Add a Bike Company Name" defaultValue="" {...register("name")} required className='form-control my-3' />
                    <input placeholder="Add a Bike Model" defaultValue="" {...register("model")} required className='form-control my-3' />
                    <input placeholder="Add a Engine Type" defaultValue="" {...register("engine")} required className='form-control my-3' />

                    <input placeholder="Add a Bike image url" type='url' defaultValue="" {...register("img")} required className='form-control my-3' />

                    <input placeholder="Add a BikeEngine" defaultValue="" {...register("bikeEngine")} required className='form-control my-3' />
                    <input placeholder="Add a Bike Displacement" type='number' defaultValue="" {...register("displacement")} required className='form-control my-3' />
                    <input placeholder="Add a mileage per liter " type='number' defaultValue="" {...register("mileage")} required className='form-control my-3' />
                    <input placeholder="Add a Bike Top Speed" type='number' defaultValue="" {...register("speed")} required className='form-control my-3' />
                    <input placeholder="Add a Bike maximumPower" defaultValue="" {...register("maximumPower")} required className='form-control my-3' />
                    <input placeholder="Add a Bike maximumTorque" defaultValue="" {...register("maximumTorque")} required className='form-control my-3' />
                    <input placeholder="Add a numberOfCylinder for Bike" type='number' defaultValue="" {...register("numberOfCylinder")} required className='form-control my-3' />





                    <textarea placeholder="Add a Bike Description" rows="5" className='my-4 form-control' defaultValue="" {...register("description")} required />

                    <input type="number" placeholder='Bike Price' {...register("price")} required className='form-control my-3' />

                    <input type="submit" value='Submit' className=' btn btn-lg my-2 btn-outline-success  fw-bold' />
                </form>

            </Container>

        </div>
    );
};

export default AddNew;