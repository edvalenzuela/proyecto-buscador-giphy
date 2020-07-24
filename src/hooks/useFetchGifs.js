import { useState, useEffect } from "react"
import { getGif } from "../helpers/getGifs";


export const useFetchGifs = (categ) => {
    
    const [state, setstate] = useState({
        data:[],
        loading: true
    });

    useEffect(() => {
        getGif(categ)
            .then( imgs => {
                setTimeout( () =>{
                    setstate({
                        data : imgs,
                        loading: false
                    });    
                }, 500 );
            });
    }, [categ]) //se ejecuta cada vez que cambie la categoria

    return state;

}
