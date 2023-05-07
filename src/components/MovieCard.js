import React from 'react';
import './MovieCard.css';
import StarRanking from './StarRanking';

const MovieCard = ({movie}) => {

    let movieRankClass = 'movie-card-gold'
    if (Number(movie.rank) >= 50){
        movieRankClass = 'movie-card-silver'
    }
    if (Number(movie.rank) >= 150) {
        movieRankClass = 'movie-card-bronze'
    }

    return ( 
        <div className={`movie-card ${movieRankClass}`}>
            <div className='movie-card-star'>
                <StarRanking rank={movie.rank}/>
            </div>
            <img className='movie-card-image' src={movie["image"]}/>
            <p>{movie.fullTitle}</p>
        </div>
     );
}
 
export default MovieCard;