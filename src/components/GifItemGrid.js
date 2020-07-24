import React from 'react'

export const GifItemGrid = ({title, url}) => {
    return (
        <div className="card border-dark bg-light m-2 animate__animated animate__fadeIn" style={{'width': '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
            </div>
            <img src={url} className="p-3 card-img-top img-fluid" alt={title}/>
        </div>
    )
}
