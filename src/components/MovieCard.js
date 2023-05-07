import React from 'react';
import './MovieCard.css';
import StarRanking from './StarRanking';

const MovieCard = ({movie, onMovieSelected}) => {

    let movieRankClass = 'movie-card-gold'
    if (Number(movie.rank) >= 50){
        movieRankClass = 'movie-card-silver'
    }
    if (Number(movie.rank) >= 150) {
        movieRankClass = 'movie-card-bronze'
    }

    const handleClick = () => {
        onMovieSelected(movie)
    }

    return ( 
        <div className={`movie-card ${movieRankClass}`}>
            <div className='movie-card-star'>
                <StarRanking rank={movie.rank}/>
            </div>
            <img className='movie-card-image' src={movie["image"]}/>
            <p>{movie.fullTitle}</p>
            <button onClick={handleClick}>More Movie Magic</button>
        </div>
     );
}
 
export default MovieCard;