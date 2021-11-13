import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const ManageProduct = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const url = `https://blooming-anchorage-75661.herokuapp.com/services`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);

    // DELETE AN USER
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://blooming-anchorage-75661.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingproducts = products.filter(user => user._id !== id);
                        setProducts(remainingproducts);
                    }
                });
        }

    }





    return (
        <div className='py-5 bg-light'>
            <Container>

                <h3 className='text-success'> Hey {user.displayName}</h3>
                <h2 className='py-3 text-primary'>products Available: {products.length} </h2>


                {
                    (products.length > 0) && <div>
                        <div className="table-responsive">
                            <table class="table ">

                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>


                                        <th scope="col">Handler  </th>

                                    </tr>
                                    {
                                        products.map(order => <Tabel key={order._id}
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
    const { price, model, _id } = props.order;
    const handleDeleteOrder = props.handleDeleteOrder;

    return (

        <tr>
            <th>{_id}</th>
            <td>{model}</td>
            <td>{price}</td>
            <td> <button className='btn  btn-outline-danger ' onClick={() => handleDeleteOrder(_id)}>Remove</button></td>
        </tr>
    )
}


export default ManageProduct;


