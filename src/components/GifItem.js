import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItemGrid } from './GifItemGrid';
//import { getGif } from '../helpers/getGifs';

export const GifItem = ({categ}) => {

    const {data:img, loading} = useFetchGifs(categ);

    
    /* const [img, setImg] = useState([])

    */

    return (
        <>
        <h3 className="mt-5"> {categ} </h3>

        {
        loading &&
            <button className="btn btn-danger animate__animated animate__flash" type="button" disabled>
                <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                Loading...
            </button> 
        }

        {<div className="row d-inline-flex">
            {
                img.map( (item) =>{
                   return <GifItemGrid key={item.id} {...item}/> 
                })
            }
        </div>
        }
        </>
    )
}
