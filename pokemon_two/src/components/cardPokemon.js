import React from 'react'
import { useInView } from 'react-intersection-observer'

const CardPokemon = ({name, image, type}) => {
  const style = `thumb-container ${type}`;
  const { ref, inView} = useInView({
      root:null,
      threshold: 0.3,
  });
  return (
    <div className={style}>
      <div className={`detail-wrapper ${inView}`} ref={ref}>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <small>Type: {type}</small>
      </div>
    </div>
  );
};

export default CardPokemon;
