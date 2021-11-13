import React from 'react';

import {

    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import AddNew from '../../Login/AddNew/AddNew';
import AddReview from '../../Login/AddReview/AddReview';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageOrders from '../../Login/ManageOrders/ManageOrders';
import MyOrders from '../../Login/MyOrders/MyOrders';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProduct/ManageProduct';
import Pay from '../Pay/Pay';



const Dashboard = () => {
    const { user, handleLogOut, admin } = useAuth();

    let { path, url } = useRouteMatch();


    return (
        <div>
            {/* <Router> */}
            <div className="container-fluid">


                <div className="row flex-nowrap">

                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">

                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">


                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

                                <li className="">

                                    <a href="/" className="nav-link align-middle px-0">
                                        <i className="fas fa-home"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </a>

                                </li>
                                {
                                    (!admin) && <div>
                                        <li className=''>
                                            <Link to={`${url}/myorders`} className="nav-link align-middle px-0">
                                                <i class="fas fa-th-large"></i> <span className="ms-1 d-none d-sm-inline">MyOrder</span></Link>
                                        </li>
                                        <li className="">


                                            <Link to={`${url}/pay`} className="nav-link align-middle px-0">
                                                <i class="fas fa-tachometer-alt"></i> <span className="ms-1 d-none d-sm-inline">Pay</span></Link>

                                        </li>

                                        <li className=''>
                                            <Link to={`${url}/addreview`} className="nav-link align-middle px-0">
                                                <i class="fas fa-th-large"></i> <span className="ms-1 d-none d-sm-inline">AddReview</span></Link>
                                        </li>
                                    </div>
                                }
                                {
                                    admin && <div>
                                        <li className=''>
                                            <Link to={`${url}/manageproduct`} className="nav-link align-middle px-0">
                                                <i class="fas fa-th-large"></i> <span className="ms-1 d-none d-sm-inline">ManageProduct</span></Link>
                                        </li>
                                        <li className=''>
                                            <Link to={`${url}/makeadmin`} className="nav-link align-middle px-0">
                                                <i class="fas fa-th-large"></i> <span className="ms-1 d-none d-sm-inline">MakeAdmin</span></Link>
                                        </li>
                                        <li className=''>
                                            <Link to={`${url}/addnew`} className="nav-link align-middle px-0">
                                                <i class="fas fa-th-large"></i> <span className="ms-1 d-none d-sm-inline">AddProduct</span></Link>
                                        </li>

                                        <li className=''>
                                            <Link to={`${url}/manageorders`} className="nav-link align-middle px-0">
                                                <i class="fas fa-table"></i> <span className="ms-1 d-none d-sm-inline">ManageAllOrder</span></Link>
                                        </li>
                                    </div>
                                }
                                {/* {
                                        (user?.email) ? &&  
                                    } */}

                                {
                                    (user?.email) && <div><button className='btn fw-bold text-white' onClick={handleLogOut}> log Out</button></div>
                                }



                            </ul>
                            <hr className='border-3'></hr>

                        </div>
                    </div>


                    <div className="col px-0">
                        <p className='py-3 my-0 text-white ps-2' style={{ background: "#9FE2BF" }}>Dashboard</p>
                        <Switch>
                            <PrivateRoute path={`${path}/myorders`} >
                                <MyOrders></MyOrders>
                            </PrivateRoute>
                            <AdminRoute path={`${path}/manageorders`} >
                                <ManageOrders></ManageOrders>
                            </AdminRoute>
                            <PrivateRoute path={`${path}/addreview`} >
                                <AddReview></AddReview>
                            </PrivateRoute>
                            <PrivateRoute path={`${path}/pay`} >
                                <Pay></Pay>
                            </PrivateRoute>
                            <AdminRoute path={`${path}/manageproduct`} >
                                <ManageProduct></ManageProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addnew`} >
                                <AddNew></AddNew>
                            </AdminRoute>
                            <AdminRoute path={`${path}/makeadmin`} >
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                        </Switch>
                    </div>
                </div>
            </div>
            {/* </Router> */}
        </div>
    );
};


export default Dashboard;