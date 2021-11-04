import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Llamando al setCategories', inputValue);
        // Recibimos por props el estado del componente padre y con el spred operator
        //  le pasamos el nuevo estado con el value del input.
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        } else {
        }
    };

    return (
        <>
            <p>{inputValue}</p>
            <form onSubmit={handleSubmit}>
                <div className='input-div'>
                    <input
                        type='text'
                        name='input'
                        value={inputValue}
                        onChange={handleInputChange}
                    ></input>
                </div>
                <br />
                <button type='submit'>Añadir...</button>
            </form>
        </>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
