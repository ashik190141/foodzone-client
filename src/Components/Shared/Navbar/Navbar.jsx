import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import img from '../../../Image/profile.png';
import './Navbar.css';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate();

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const logoutHandler = () => {
        logOut()
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.log(error);
        })
    }

    return (
        <div>
            <div className="navbar bg-neutral flex justify-between">
                    <div className='flex md:gap-5 gap-1'>
                        <p className="text-white md:text-2xl text-xl font-bold md:ml-10">FoodZone</p>
                        <NavLink to="/" className={({isActive})=>(isActive?'text-blue-600 text-xl font-bold':'text-white text-xl')}>Home</NavLink>
                        <NavLink to="/blog" className={({isActive})=>(isActive?'text-blue-600 text-xl font-bold':'text-white text-xl')}>Blog</NavLink>
                    </div>
                    <div className='flex md:gap-5 gap-1'>
                        {
                        user ? 
                            <div className='flex'>
                                {
                                    user.photoURL ?
                                        <div className='flex md:gap-4'>
                                             <span>
                                                {
                                                    user.displayName ? 
                                                        <div className='text-white'>
                                                            { isHovering && <span>{user.displayName}</span>}
                                                        </div> :
                                                        <div>
                                                            { isHovering && <span>{}</span>}
                                                        </div>
                                                }
                                            </span>
                                            <img src={user.photoURL}  onMouseOver={handleMouseOver}
                                            onMouseOut={handleMouseOut} alt="" className={`pro-img md:mr-10 rounded-xl`}/>
                                        </div> :
                                        <div className='flex md:gap-4'>
                                             <span>
                                                {
                                                    user.displayName ? 
                                                        <div className='text-white'>
                                                            { isHovering && <span>{user.displayName}</span>}
                                                        </div> :
                                                        <div>
                                                            { isHovering && <span>{}</span>}
                                                        </div>
                                                }
                                            </span>
                                            <img src={img}  onMouseOver={handleMouseOver}
                                            onMouseOut={handleMouseOut} alt="" className={`pro-img md:mr-10 rounded-xl`}/>
                                        </div>    
                                }
                                <button onClick={logoutHandler} className="btn btn-primary text-white md:mr-10 mr-1">Log Out</button>
                            </div> :
                            <Link to="/login"><button className="btn btn-primary text-white md:mr-10">Login</button></Link>
                        }
                    </div>
            </div>
        </div>
    );
};

export default Navbar;