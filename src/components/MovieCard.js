import React from 'react';
import './MovieCard.css';
import StarRanking from './StarRanking';

const MovieCard = ({movie}) => {
    console.log(movie);
    return ( 
        <div className='movie-card'>
       <div className='movie-card-star'> <StarRanking rank={movie.rank}/> </div>
        <img src={movie["image"]}/>
        <p>{movie.fullTitle}</p>
        </div>
     );
}
 
export default MovieCard;