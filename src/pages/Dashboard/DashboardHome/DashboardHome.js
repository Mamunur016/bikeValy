import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth()
    return (
        <div className='py-5'>
            <h3 className='text-primary text-center'>Welcome To Your Dashboard {user.displayName} </h3>
        </div>
    );
};

export default DashboardHome;