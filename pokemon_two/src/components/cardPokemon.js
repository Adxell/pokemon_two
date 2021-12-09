import React from 'react'

const CardPokemon = ({id, name, image, type}) => {
    const style=`thumb-container ${type}`
    return (
        <div className={style}>
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <img src={image} alt={name} />
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default CardPokemon;
