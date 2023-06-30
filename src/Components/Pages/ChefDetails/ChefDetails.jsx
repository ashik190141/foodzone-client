import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const ChefDetails = () => {
    const info = useLoaderData();

    const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, recipe, shortBio } = info;
    // console.log(recipe);
    return (
        <div className='container mx-auto md:mt-20 mt-5'>
            <h2 className='text-4xl font-bold text-center'>Chef Recipes</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 items-center mt-10 place-items-center border-4 rounded-xl bg-slate-300'>
                <div className='pl-5'>
                    <h2 className="font-bold text-3xl mb-8">{chefName}</h2>
                    <p className='mb-4 text-xl'>Experiences: <span className='font-bold text-2xl'>{yearsOfExperience} years</span></p>
                    <p className='mb-4 text-xl'>Recipes: <span className='font-bold text-2xl'>{numberOfRecipes} items</span></p>
                    <p className='mb-4 text-xl'>Likes: <span className='font-bold text-2xl'>{likes}</span></p>
                    <p className='text-2xl text-justify'>{shortBio}</p>
                </div>
                <div className='p-3'>
                    <img src={chefPicture} alt="" className='img-fluid rounded-lg'/>
                </div>
            </div>
            <p className='text-3xl font-bold mt-20 text-center'>Recipe</p>
            <div className='mt-20'>
                {
                    recipe.map(recipe => <Recipe
                        key={recipe.recipeId}
                        recipe={recipe}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;