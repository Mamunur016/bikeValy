
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';


const Login = () => {
    // set different state value
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const { signInUsingGoogle, signInWithEmailAndPassword, auth, saveUser } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const url = location.state?.from || '/dashboard';


    // sign in with google
    const handleSignInGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                history.push(url);
            })
    }

    // handle email and password field value
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    // handleLogin

    const handleLogin = (e) => {
        e.preventDefault();

        processLogin(email, password);
    }

    // process log in function
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                // const user = result.user;

                setError('');
                history.push(url);
            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage);
            });

    }

    return (
        <div>
            <Header></Header>
            <div className='d-flex align-items-center pb-5 pt-5  justify-content-center '>
                <div className='shadow p-5 rounded'>

                    <form action="" onSubmit={handleLogin}>
                        <input type="email" name="email" id="email" placeholder="Enter Your Email" className='form-control my-3' required onBlur={handleEmailChange} />
                        <input type="password" name="pasword" id="password" placeholder="Enter Your password" className='form-control my-3' onBlur={handlePasswordChange} />
                        <input type="submit" value="Sign In" className='form-control btn-danger' />
                    </form>

                    <p className='my-4 text-center'><Link to='/register' >Need an account?</Link></p>
                    <hr />
                    <h6 className='text-muted text-center'> OR</h6>
                    <p><button className="btn border py-2 form-control" onClick={handleSignInGoogle}><i class="fab fa-google me-3"></i> Sign In With Google</button></p>

                    <p>
                        {
                            (error) && <p>{error}</p>
                        }
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;