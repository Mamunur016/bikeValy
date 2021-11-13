
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Register = () => {
    //    set different state 
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { signInUsingGoogle, createUserWithEmailAndPassword, auth, updateProfile, saveUser } = useAuth();
    const history = useHistory();


    // set different input field value
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }


    // handleRegistration 
    const handleRegistration = (e) => {

        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        //     setError('Password Must contain 2 upper case');
        //     return;
        // }
        // console.log(email, password);


        registerNewUser(email, password);


    }




    //// calling register new user function

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setError('');
                setUserName();
                saveUser(email, name, 'POST');
                history.push('/home')
                // verifyEmaill();
            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => { })
    }

    // const verifyEmaill = () => {
    //     sendEmailVerification(auth.currentUser)
    //         .then((result) => {
    //             console.log(result);
    //         })
    // }


    // sign in with google
    const handleSignInGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');

                history.push('/home');
            })
    }


    return (
        <div>
            <Header></Header>
            <div className='d-flex align-items-center pb-5 pt-5  justify-content-center '>
                <div className='shadow p-5 rounded'>
                    <form action="" onSubmit={handleRegistration}>

                        <input type="text" name="username" id="username" placeholder="Enter Your Name" className='form-control my-3' onBlur={handleNameChange} required />

                        <input type="email" name="email" id="email" placeholder="Enter Your Email" className='form-control my-3' required onBlur={handleEmailChange} />

                        <input type="password" name="pasword" id="password" placeholder="Enter Your password" className='form-control my-3' onBlur={handlePasswordChange} />

                        <input type="submit" value="Sign Up" className='form-control btn-danger' />
                    </form>

                    <p className='my-4 text-center'><Link to='/login' >Already have an account?</Link></p>
                    <hr />
                    <h6 className='text-muted text-center'> OR</h6>
                    <p><button className="btn border py-2 form-control" onClick={handleSignInGoogle}><i class="fab fa-google me-3"></i> Sign Up With Google</button></p>

                    <p> {
                        (error) && <p>{error}</p>
                    }</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;