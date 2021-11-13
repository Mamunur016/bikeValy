import React from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const ManageOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const url = `https://blooming-anchorage-75661.herokuapp.com/orders`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders]);

    // DELETE AN USER
    const handleDeleteOrder = id => {



        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this  file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    const url = `https://blooming-anchorage-75661.herokuapp.com/orders/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal({
                                    title: "Good job!",
                                    text: "deleted successfully !",
                                    icon: "success",
                                });
                                const remainingOrders = orders.filter(user => user._id !== id);
                                setOrders(remainingOrders);
                            }
                        });
                } else {
                    swal("Your  file is safe!");
                }
            });



    }

    // handle btn 
    const handleBtn = (id) => {


        const btn = document.getElementById(id);
        if (btn.innerText === "Pending") {



            const url = `https://blooming-anchorage-75661.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {

                        swal({
                            title: "Good job!",
                            text: "Update successfully !",
                            icon: "success",
                        });
                        // window.location.reload();

                    }
                })
        }


    }



    return (
        <div className='py-5 bg-light'>
            <Container>

                <h3 className='text-success'> Hey {user.displayName}</h3>
                <h2 className='py-3 text-primary'>Orders Available: {orders.length} </h2>


                {
                    (orders.length > 0) && <div>
                        <div className="table-responsive">
                            <table class="table ">

                                <thead>
                                    <tr>
                                        <th scope="col">Email</th>
                                        <th scope="col">Model</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Handler  </th>

                                    </tr>
                                    {
                                        orders.map(order => <Tabel key={order._id}
                                            order={order}
                                            handleBtn={handleBtn}
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
    const handleBtn = props.handleBtn;
    return (

        <tr>
            <th>{email}</th>
            <td>{model}</td>
            <td>{price}</td>
            <td>{date}</td>
            <td><button className='btn btn-outline-success' id={_id} onClick={() => handleBtn(_id)} >{status}</button>

            </td>
            <td> <button className='btn  btn-outline-danger ' onClick={() => handleDeleteOrder(_id)}>Remove</button></td>
        </tr>
    )
}


export default ManageOrders;


