import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';

import swal from 'sweetalert';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');


    const handleOnBlur = e => {
        setEmail(e.target.value);

    }
    const handleAdminSubmit = e => {


        swal({
            title: "Are you sure?",
            text: "You want to make a admin!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const user = { email };
                    console.log(user);
                    fetch('https://blooming-anchorage-75661.herokuapp.com/users/admin', {
                        method: 'PUT',
                        headers: {

                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount) {
                                console.log(data);
                                swal({
                                    title: "Good job!",
                                    text: "Admin added successfully !",
                                    icon: "success",
                                })

                            }
                            else {
                                swal("Make Admin Fail!");
                            }
                        });


                }
            });




        e.preventDefault()
    }
    return (
        <div className='d-flex justify-content-center align-items-center py-5'>
            <div>
                <h2>Make an Admin</h2>
                <form onSubmit={handleAdminSubmit} className='py-2'>
                    <input label="Email" className='form-control'
                        type="email"
                        onBlur={handleOnBlur} required></input>

                    <Button type="submit" className='btn btn-success mt-3'>Make Admin</Button>
                </form>

            </div>
        </div>
    );
};

export default MakeAdmin;