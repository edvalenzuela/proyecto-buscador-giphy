import React, { useState } from 'react'
import { GifAdd } from './GifAdd';
import { GifItem } from './GifItem';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Dragon Ball Z']);

    /*const handleAdd = () =>{
        setCategorias([...categorias, 'Dragon ball']);
    }*/

    return (
        <div className="container mt-5">
            <h2 className="mb-5">Buscador de Giphy</h2>    
            
            <GifAdd setCategorias={setCategorias}/>
                {
                    categorias.map( categ =>{
                        return <GifItem 
                                    key={categ} 
                                    categ={categ}
                                /> 
                    })
                }      
        </div>
    )
}
