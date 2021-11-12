import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const url = `https://blooming-anchorage-75661.herokuapp.com/orders/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders]);

    // DELETE AN Order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://blooming-anchorage-75661.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = orders.filter(user => user._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }

    }






    return (
        <div className='py-5 bg-light'>
            <Container>

                <h3 className='text-success'> Hey {user.displayName}</h3>
                <h2 className='py-3 text-primary'>Your Orders: {orders.length} </h2>

                {
                    (orders.length > 0) && <div>

                        <div className="table-responsive">
                            <table class="table ">

                                <thead>
                                    <tr>

                                        <th scope="col">Model</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Handler  </th>

                                    </tr>
                                    {
                                        orders.map(order => <Tabel key={order._id}
                                            order={order}

                                            handleDeleteOrder={handleDeleteOrder}
                                        ></Tabel>)
                                    }
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </Container>
        </div>
    );
};
const Tabel = (props) => {
    const { status, price, date, model, email, _id } = props.order;
    const handleDeleteOrder = props.handleDeleteOrder;

    return (

        <tr>

            <td>{model}</td>
            <td>{price}</td>
            <td>{date}</td>
            <td><button className='btn btn-outline-success' id={_id} >{status}</button>

            </td>
            <td> <button className='btn  btn-outline-danger ' onClick={() => handleDeleteOrder(_id)}>Remove</button></td>
        </tr>
    );
};

export default MyOrders;