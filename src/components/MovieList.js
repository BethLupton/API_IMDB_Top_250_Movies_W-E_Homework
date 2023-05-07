import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'

const MovieList = ({movies, onMovieSelected}) => {
    const movieCards = movies.map((movie, index)=>{
        return (
            <div className='movie-list-movie'>
                <MovieCard movie={movie} onMovieSelected={onMovieSelected}/>
            </div>
        )
    })
     return ( 
        <div className='movie-list'>
             {movieCards}
        </div>

        
     );
}
 
export default MovieList;