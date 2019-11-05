import React from 'react';


const Card = ({ cat, callback, index }) => {
    return(
        <div className="col-lg-6 catCard">
            <img src={cat.imageUrl} alt={cat.id} id={index} onClick={() => callback(cat)}/>
        </div>
    )
}

export default Card;