import React from 'react';
import './ChefInfo.css';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefInfo = ({ chef }) => {
    const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, id } = chef;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="px-10 pt-10">
                    {/* lazy load */}
                    <LazyLoad offset={300} height={400} width={300}>
                        <img src={chefPicture} alt="Shoes" className="rounded-xl chef-image" />
                    </LazyLoad>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{chefName}</h2>
                    <p>Experiences: <span className='font-bold text-xl'>{yearsOfExperience} years</span></p>
                    <p>Recipes: <span className='font-bold text-xl'>{numberOfRecipes} items</span></p>
                    <p>Likes: <span className='font-bold text-xl'>{likes}</span></p>
                    <div className="card-actions">
                        <Link to={`/${id}`}>
                            <button className="btn btn-primary">View Recipes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefInfo;