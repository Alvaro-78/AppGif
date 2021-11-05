import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifApp = () => {
    const [categories, setCategories] = useState(['random']);

    return (
        <>
            <div className='header-title'>
                <div>
                    <h1 className='title'>GifApp</h1>
                </div>
            </div>
            <div>
                <h2>Encuentra tus Gifs favoritos</h2>
                <AddCategory setCategories={setCategories} />
            </div>
            <br />

            <hr />
            <ol>
                {categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};

export default GifApp;
