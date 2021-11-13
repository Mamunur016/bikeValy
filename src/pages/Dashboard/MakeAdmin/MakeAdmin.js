import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);

    }
    const handleAdminSubmit = e => {
        const user = { email };
        console.log(user);
        fetch('http://localhost:5000/users/admin', {
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
                    setSuccess(true);
                }
            });

        // fetch('http://localhost:5000/users/admin', {
        //     method: 'PUT',
        //     headers: {
        //         'authorization': `Bearer ${token}`,
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount) {
        //             console.log(data);
        //             setSuccess(true);
        //         }
        //     })

        e.preventDefault()
    }
    return (
        <div className='d-flex justify-content-center align-items-center py-5'>
            <div>
                <h2>Make an Admin</h2>
                <form onSubmit={handleAdminSubmit} className='py-2'>
                    <input label="Email" className='form-control'
                        type="email"
                        onBlur={handleOnBlur}></input>

                    <Button type="submit" className='btn btn-success mt-3'>Make Admin</Button>
                </form>
                {success && <Alert severity="success">Made Admin successfully!</Alert>}
            </div>
        </div>
    );
};

export default MakeAdmin;