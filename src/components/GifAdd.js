import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const GifAdd = ({setCategorias}) => {
    
    const [inputValue, setInputValue] = useState('');
    
    /* declarando el setInputValue en el onChange declaramos
    que siempre estara actualizado nuestro input con lo ultimo que escribio 
    el usuario */
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 1){
            setCategorias( catg => [inputValue,...catg]);
            setInputValue('');
        }
        console.log('Submit Hecho');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="gif">Nombre del Gif</label>
            <input 
                className="form-control form-control-lg" 
                type="text" 
                placeholder="Tu gif"
                id="gif"
                autoComplete="off"
                value={inputValue}
                onChange={handleInputChange}
            />  
        </form>
    )
}

GifAdd.propTypes = {
    setCategorias : PropTypes.func.isRequired
}
