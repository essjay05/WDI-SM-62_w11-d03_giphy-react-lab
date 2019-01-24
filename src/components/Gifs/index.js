import React from 'react';



export default ({ gif }) => {
    
    if (!gif) return <h1> not saving to gif state </h1>
    return (
        <div className="gif">
            {gif.map((gif, index) => {
                return <img key={index} src={gif.images.original.url} alt="not available" height="200px" width="250px"/>
            })}
        </div>

    )
};