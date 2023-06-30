import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        setError('');
        setSuccess('');
        if (password.length < 6) {
            alert("Password Must be 6 Characters");
            return;
        }
        if (email == '' && password == '') {
            alert("Email and Password Field Must be Filled");
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
                setSuccess("Registration Successful");
                updateUserData(user, name, photo);
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
        })
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                console.log('User Profile Updated');
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
                        <h1 className="text-3xl font-bold mb-5">Please Register !!</h1>
                        <p className='font-bold text-2xl text- text-green-500'>{success}</p>
                        <p className='font-bold text-2xl text- text-red-500'>{error}</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={submitHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input required type="text" placeholder="Name"
                                name='name'   className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input required type="text" placeholder="photo"
                                name='photo'   className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                    <input required type="email" placeholder="Email"
                                    name='email'   className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                    <input type="password" required placeholder="Password"
                                    name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <Link to="/login">
                            <button className="btn btn-active btn-link">Already Have an Account?</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;