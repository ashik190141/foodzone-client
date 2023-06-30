import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';


const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { login, loginWithGoogle, loginWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const loginHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        setSuccess('');
        login(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setSuccess("Login Successful");
                navigate(from , {replace:true});
            })
            .catch(error => {
                setError(error.message);
        })
    }

    const googleLoginHandler = () => {
        setError('');
        setSuccess('');
        loginWithGoogle()
        .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess("Login Successful");
                navigate(from , {replace:true});
            })
            .catch(error => {
                setError(error.message);
        })
    }

    const githubLoginHandler = () => {
        setError('');
        setSuccess('');
        loginWithGithub()
        .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess("Login Successful");
                navigate(from , {replace:true});
            })
            .catch(error => {
                setError(error.message);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold mb-5">Please Login !!</h1>
                        <p className='font-bold text-2xl text- text-green-500'>{success}</p>
                        <p className='font-bold text-2xl text- text-red-500'>{error}</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={loginHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                                <input required type="email" placeholder="email"
                                name='email'   className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                                    <input type="password" required placeholder="password"
                                    name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        </form>

                        <p className='text-2xl font-bold text-center mb-6'>OR</p>

                        <button onClick={googleLoginHandler} className='mb-2 btn btn-outline'><FaGoogle className='me-2' /> Login With Google</button>
                        <button onClick={githubLoginHandler} className='mb-2 btn btn-outline'><FaGithub className='me-2' /> Login With Github</button>
                        
                        <p className='ml-5'>
                            New to FoodZone?
                            <Link to="/register">
                                <button className="btn btn-active btn-link">Please Register</button>
                            </Link>
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;